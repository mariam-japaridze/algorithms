const recurring = (value) => {
    let tempArr = [];
    for (let i=0;i<value.length;i++) {
      if (tempArr[value[i]] !== undefined) {
        return value[i];
      } else {
        tempArr[value[i]] = true;
      }
    }
  };
  
  console.log(recurring("ABCDABGS"));