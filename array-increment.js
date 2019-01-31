const arrayIncrement = (arr) => {
    let carry = 0;
    for (let i=arr.length - 1; i>=0; i--) {
        if (arr[i] < 9) {
            arr[i] += carry;
            break;
        } else {
            arr[i] = 0;
            carry = 1;
            if (i === 0) {
                arr = [1, ...arr];
            }
        }
    }
    return arr;
};
  
console.log(arrayIncrement([9,9,9,9]));