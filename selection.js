function selectionSort(arr) {
  let idx; // helper idx
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    idx = i; // min idx is i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j]; // set new min
        idx = j;
      }
    }
    if (idx !== i) { // if idx is not i, swap
      let temp = arr[idx];
      arr[idx] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

module.exports = selectionSort;