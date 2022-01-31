export const removeDuplicates = (array, field) => {
  const filteredArr = array.reduce((acc, current) => {
    const duplicate = acc.find((item) => item[field] === current[field]);
    if (!duplicate) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  return filteredArr;
};
