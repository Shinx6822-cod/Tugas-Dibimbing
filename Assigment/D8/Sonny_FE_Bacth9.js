let arr = [10, 22, 67, 75, 80, 66];

console.log("1. Check if number 12 is the array obove?");
function seqSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]+' '+num);
    if (arr[i] == num) {
      return true;
    }
  }
  return false;
}

let num = 12;

seqSearch(arr, num)
  ? console.log(num + " is in the array.")
  : console.log(num + " is not in the array.");

console.log("--------------------------------------------");
console.log("2. Sort the array with bubble sort");
function bblSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Last i elemen are already in place
    for (let j = 0; j < arr.length - i - 1; j++) {
      //sisa dari jumlah array/ indexOfLastUnsortedElement
      if (arr[j] > arr[j + 1]) {
        // if the condition is true then swap them
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // print the sorted array
  console.log("Bubble Sort [" + arr + "]");
}
bblSort(arr);

console.log("--------------------------------------------");
console.log("3. sort the array with selection sort");
function selectionSort(Arr) {
  let n = Arr.length;

  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the element of array
    let min = i; // awal ditampung itu index ke 0
    for (let j = i + 1; j < n; j++) {
      if (Arr[j] < Arr[min]) {
        //berubah menjadi index j
        min = j;
      }
    }
    if (min != i) {
      // swapping the element
      let tmp = Arr[i]; //67
      Arr[i] = Arr[min]; //34
      Arr[min] = tmp;
    }
  }
  return "selection sort [" + Arr + "]";
}
console.log(selectionSort(arr));

console.log("--------------------------------------------");
console.log("4. filter the array above and only display odd numbers.");
function oddNumber(Arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Arr[i] % 2 !== 0) {
      console.log(Arr[i]);
    }
  }
}
oddNumber(arr);
