function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (newStr) {
    return newStr.charAt(0).toUpperCase() + newStr.substr(1).toLowerCase();
  });
}

function generateBankName(name) {
  if (name.length > 4) {
    return toTitleCase(name);
  }

  return name.toUpperCase();
}

function generateStatus(status) {
  var newStatus = 'Berhasil';

  if (status === 'PENDING') {
    newStatus = 'Pengecekan';
  }

  return toTitleCase(newStatus);
}

function rupiahFormatter(amount) {
  return `Rp${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

function toReadableDate(date) {
  var months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  var currentDate = date.split(' ')[0];

  var year = currentDate.split('-')[0];
  var month = currentDate.split('-')[1];
  var date = currentDate.split('-')[2];

  return `${date} ${months[month - 1]} ${year}`;
}

export {
  toTitleCase,
  generateBankName,
  toReadableDate,
  generateStatus,
  rupiahFormatter,
};
