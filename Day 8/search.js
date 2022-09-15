// sequencial
function seqSearch(nums,num) {
    for(let i =0; i < nums.length; i++) {
        console.log(nums[i]+' '+num);
        if(nums[i]==num){
            return true;
        }
    }    
    return false;
}

let num =25;
let nums = [20,21,90,46,25,12];

seqSearch(nums,num) ? console.log(num + ' is in the array.') : console.log(num + 'is not in the array.');

// binary search
let iterativeFunction = function(arr, x){
    let start = 0, end = arr.length-1;

    while (start <= end) {
        console.log('start',start);
        console.log('end', end);
    // find the mid index/median
    let mid = Math.floor((start + end)/2);
    console.log('Median Index : ',mid);
    console.log('Median Value : ', arr[mid]);
    console.log('condition If', arr[mid] ===x);
    console.log('condition Else If', arr[mid] <x);

    console.log('--------------------------------------- \n');

    // If element is present at mid, return True
    if(arr[mid] === x)return true;

    // else look in left or right half accordingly
    else if(arr[mid]<x)
    start = mid+1;
    else
    end =mid-1;
    }
return false;
    
}

let arr = [1,3,5,7,8,9];
let x =9;

// ternary operator
iterativeFunction(arr,x) ? console.log('Elemen found!'):console.log('Elemen notfound!');