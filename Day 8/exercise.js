let arr = [28, 82, 23, 32, 9, 19];

console.log('1. Check if the number 19 is in the array above?');
function search(arr, data) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] == data) {
      return true;
    }
  }
  return false;
}

let num = 19;

search(arr, num)
  ? console.log(num + " is in the array.")
  : console.log(num + " is not in the array.");

  console.log('-----------------------------------');
console.log('2. Sort The Array With bubble sort');
function bubleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // Print the sorted array
  console.log("Bubble Sort", arr);
}

bubleSort(arr);

console.log('----------------------------------------------');
console.log('3. filter the array above and only display even numbers');
let filter = (collection, test) => {
  let results = [];
  each(collection, (val) => {
    if (test(val)) {
      results.push(val);
    }
  });
  return results;
};

let each = (collection, iterator) => {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      // value, key/property, collection
      iterator(collection[i], i, collection);
    }
  }
};

function returnEvens(value) {
  return value % 2 === 0;
}

console.log("Even Numbers : ", filter(arr, returnEvens));
