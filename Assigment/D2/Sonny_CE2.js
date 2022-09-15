// Soal:
// Cari Nilai Max dan Min dari   [31, 9, 54, 11, 43, 6, 67]  dengan metode  for loop
// dengan hasil output {max:67, min:6}
// Tidak boleh langsung print expected output
/*
Expected Output:
{ max: 67, min: 6 }
*/
// Tidak boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dianggap penting

// Jawaban:
const array = [31, 9, 54, 11, 43, 6, 67];
let arr_length = array.length;
maxmin = maxMin(array, arr_length);
let min;
let max;
function maxMin(array, arr_length) {
  // write your code here
  
  maxmin = new Array();
  let i;

  if (array[0] > array[1]) {
    maxmin.max = array[0];
    maxmin.min = array[1];
  } else {
    maxmin.min = array[0];
    maxmin.max = array[1];
  }
  
  for (i = 2; i < arr_length; i++) {
    // cari max
    if (array[i] > maxmin.max) {
      maxmin.max = array[i];
    }
    // cari min
    else if (array[i] < maxmin.min) {
      maxmin.min = array[i];
    }
  }
  return maxmin;
}

console.log(maxmin);