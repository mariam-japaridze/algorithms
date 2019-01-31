const insertionSort = (arr) => {
    for (let i=0; i<arr.length; i++) {
         let value = arr[i];
          let prev = i - 1;
        while (prev >= 0 && arr[prev] > value) {
              arr[prev+1] = arr[prev];
              prev--
          }
          arr[prev+1] = value
    }
    return arr;
  };
  
  console.log(insertionSort([14,33,27,10,35,19,42,44]));