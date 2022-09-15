let arr =[[1,2],[3,4],[5,6]];
// console.log(arr[0][0]);

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

arr.map(ar=>{
    ar.map(a=>{
        console.log(a);
    });
});
