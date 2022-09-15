function selectionSort(Arr){
    let n = Arr.length;

    for(let i =0; i<n; i++){
        // Finding the smallest number in the element of array
        let min = i;// awal ditampung itu index ke 0
        console.log('i1',i);
        for(let j = i+1; j < n; j++){
            // console.log('i2',i);
            // console.log('arr j', Arr[j]);
            // console.log('min ', Arr[min]);
            // console.log('cal', Arr[j]<Arr[min]);
            // console.log('------------------------\n');

            if(Arr[j]<Arr[min]){//berubah menjadi index j
                min =j;
            }
        }
        // console.log('min2 :', min ,i);
        if(min !=i){
            // swapping the element
            let tmp = Arr[i]; //67
            Arr[i] = Arr[min]; //34
            console.log('Min Value :', Arr[min]);
            Arr[min]= tmp;
            console.log('Temp :', tmp);
        }
        console.log(arr);
    }
    return Arr;
}
let arr = [9,5,3,2,4,1];
console.log(selectionSort(arr));