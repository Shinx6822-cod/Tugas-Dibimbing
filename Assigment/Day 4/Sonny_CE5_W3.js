// Soal:
// Count The Vowels
//hitung jumlah huruf vokal pada string
// expected output :
// 9
// 6

let vowels = ["a", "i", "u", "e", "o"]; // vokal

// // Tidak boleh langsung print expected output
// // Berikan comment penjelasan pada baris kode yang dirasa penting

// // Jawaban:
function countVowels(str, vowels) {
  // initialize count
  let count = 0;

  // loop through string to test if each character is a vowel
  for (let letter of str) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  // return number of vowels
  return count;
}

console.log(countVowels("Selamat Pagi Duniaa!!", vowels));
console.log(countVowels("aku suka ngoding", vowels));
