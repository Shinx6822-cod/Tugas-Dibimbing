// 1. Check if the number 19 is in the array above?
// 2. Sort the Array with bubble sort
// 3. Filter the array above and only display even numbers
console.log('1. Check if the number 19 is in the array above?');
function seqSearch(arr,num) {
    for(let i =0; i < arr.length; i++) {
        // console.log(arr[i]+' '+num);
        if(arr[i]==num){
            return true;
        }
    }    
    return false;
}

let arr = [28,82,23,32,9,19];
let num =19;

seqSearch(arr,num)
    ? console.log(num + ' is in the array.') 
    : console.log(num + 'is not in the array.');
console.log('-------------------------------------------\n');

console.log('2. Sort the Array with bubble sort');
function bblSort(arr1){
    for(let i = 0; i < arr1.length; i++){ // 3 kali perulangan
        for (let j = 0; j < (arr1.length-i-1); j++) {//sisa dari jumlah array/ indexOfLastUnsortedElement
            if(arr1[j] > arr1[j+1]){
                let temp = arr1[j];
                arr1[j] = arr1[j+1];
                arr1[j+1]=temp;
            }
        }
    }
// print the sorted array
console.log(arr1);
}
// this is our unsorted array
let arr1 = [28,82,23,32,9,19];
// Now pass this array to bblsort() function
bblSort(arr1);

console.log('3. Filter the array above and only display even numbers');
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

