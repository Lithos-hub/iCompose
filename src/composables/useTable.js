const useTable = () => {
  const sortData = (arr, field, asc) => arr.sort((a, b) => {
    const fieldA = a[field].toString().toUpperCase();
    const fieldB = b[field].toString().toUpperCase();

    if (asc ? fieldA < fieldB : fieldA > fieldB) {
      return -1;
    }
    return 0;
  });

  const filterByInput = (arr, field, input) => arr.filter((element) => element[field].toString().toLowerCase().includes(input.toLowerCase()));

  return {
    sortData,
    filterByInput,
  };
};

export default useTable;
