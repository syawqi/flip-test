import {useState, useEffect, useCallback} from 'react';
import Service from './../../services/transactions';

const useFetchTransaction = () => {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(true);
  const [sort, setSort] = useState('');

  useEffect(() => {
    var newData = originalData;

    // searchData function

    function searchData() {
      var byName = newData.filter(s =>
        s.beneficiary_name.toUpperCase().includes(search.toUpperCase()),
      );

      var senderBank = newData.filter(s =>
        s.sender_bank.toUpperCase().includes(search.toUpperCase()),
      );

      var beneficiaryBank = newData.filter(s =>
        s.beneficiary_bank.toUpperCase().includes(search.toUpperCase()),
      );

      var amountTrx = newData.filter(s =>
        s.amount.toString().includes(search.toUpperCase()),
      );

      newData = [];

      // Set new  Data and remove duplicate
      // Combine data from above
      newData = [
        ...new Set([
          ...byName,
          ...senderBank,
          ...beneficiaryBank,
          ...amountTrx,
        ]),
      ];
    }

    // sortingData function
    function sortData() {
      var newSort = newData;

      if (sort === 'byA') {
        newSort = newData.sort((a, b) => {
          return a.beneficiary_name.localeCompare(b.beneficiary_name);
        });
      }

      if (sort === 'byZ') {
        newSort = newData.sort((a, b) => {
          return b.beneficiary_name.localeCompare(a.beneficiary_name);
        });
      }

      if (sort === 'lates') {
        newSort = newData.sort((a, b) => {
          return b.created_at.localeCompare(a.created_at);
        });
      }

      if (sort === 'oldest') {
        newSort = newData.sort((a, b) => {
          return a.created_at.localeCompare(b.created_at);
        });
      }

      newData = [];

      // Set new  Data and remove duplicate
      newData = [...new Set([...newSort])];
    }

    if (search.length > 0) {
      searchData();
    }

    if (sort.length > 0) {
      sortData();
    }

    setData(newData);
    console.log(newData);
  }, [originalData, search, sort]);

  // effect for looking refresh function
  useEffect(() => {
    if (refreshing) {
      Service.getTransactionData().then(value => {
        setOriginalData(Object.values(value));
        setRefreshing(false);
      });
    }
  }, [refreshing]);

  // handle refresh data
  const handleSearch = useCallback(value => {
    console.log(value);
    setSearch(value);
  }, []);

  // handle refresh data
  const onRefresh = useCallback(() => {
    setRefreshing(true);
  }, []);

  // handle sort data
  const handleSort = useCallback(value => {
    setSort(value);
  }, []);

  return {
    data,
    handleSearch,
    search,
    onRefresh,
    refreshing,
    handleSort,
    sort,
  };
};

export default useFetchTransaction;
