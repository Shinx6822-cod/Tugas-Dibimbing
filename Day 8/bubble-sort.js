// Creating the bubble function
function bblSort(arr){
    for(let i = 0; i < arr.length; i++){ // 3 kali perulangan
        // Last i elemen are already in place
        for (let j = 0; j < (arr.length-i-1); j++) {//sisa dari jumlah array/ indexOfLastUnsortedElement
            // Checking if the item at present iteration
            // is greater than the next iteration
            // console.log('val arr', (arr.length-i-1)); //indexOfLastUnsortedElement
            // console.log('index j :', j);
            // console.log('val arr[j]:', arr[j]);
            // console.log('val arr[j+1]:', arr[j+1]);
            // console.log('condition :'), arr[j] > arr[j+1];
            // console.log('----------------------------------\n');

            if(arr[j] > arr[j+1]){
                // if the condition is true then swap them
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]=temp;
            }
            console.log(arr);
            
        }
    }
// print the sorted array
console.log('-------------------\n');
console.log(arr);
}
// this is our unsorted array
let arr = [67, 30,28];
// Now pass this array to bblsort() function
bblSort(arr);
