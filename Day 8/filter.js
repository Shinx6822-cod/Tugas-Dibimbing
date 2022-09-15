let filter = (collection,test)=>{
    let results = [];
    each(collection,(val)=>{
        console.log(val);
        // console.log(test(val));
        if(test(val)){
            results.push(val);
        }
    });
    return results;
}

// untuk melakukan looping/pengecekan untuk setiap data yg ada didlm array
let each = (collection, iterator)=>{
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            // console.log(('value : ',collection[i]));
            // console.log('i :', i);
            console.log('collection : ', collection);
            // value, key/property, clollection
            iterator(collection[i], i, collection);
        }
    }
};

function multipleOfThree(value){
    return value%3 ===0;
}
function returnBmw(value){
    return value ==='BMW';
}

console.log('Multiple of three:', filter([1,2,3,4,5,6], multipleOfThree));

let cars=['Saab','Volvo','BMW'];
console.log(filter(cars, returnBmw));