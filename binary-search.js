const binarySearch = (value, num) => {

    let low = 0;
    let high = value.length - 1;
    let mid = Math.round(low + (high - low) / 2)
    let i = 0;
    while (value[mid] != num ) {
      if (value[mid] < num) {
        low = mid + 1;
        mid = Math.round(low + (high - low) / 2);
      }
      else if (value[mid] > num) {
        high = mid - 1;
        mid = Math.round(low + (high - low) / 2);
      }
  
    }
    console.log("-------")
    return mid;
}
  
  
console.log(
binarySearch(
    [1,4,5,7,9,12,14,16,18,36,48,59], 9)
);