function medianofArr(numbers1) {
  let concat = numbers1;

  console.log(concat);
  let length = concat.length;

  if (length % 2 == 1) {
    // If length is odd
    console.log(concat[length / 2 - 0.5]);
    return concat[length / 2 - 0.5];
  } else {
    console.log((concat[length / 2] + concat[length / 2 - 1]) / 2);

    return (concat[length / 2] + concat[length / 2 - 1]) / 2;
  }
}
let numbers1 = [3, 5, 6, 8, 9];
medianofArr(numbers1);

console.log("-------------------------------------\n");
function medianofArr(numbers2) {
  let concat = numbers2;

  console.log(concat);
  let length = concat.length;

  if (length % 2 == 1) {
    // If length is odd
    console.log(concat[length / 2 - 0.5]);
    return concat[length / 2 - 0.5];
  } else {
    console.log((concat[length / 2] + concat[length / 2 - 1]) / 2);

    return (concat[length / 2] + concat[length / 2 - 1]) / 2;
  }
}
let numbers2 = [1, 3, 5, 7];
medianofArr(numbers2);
