// Soal : Hitunglah jumlah masing-masing karakter yang terdapat pada kata berikut
// karakter yang berupa huruf kapital maupun huruf kecil dihitung sama
// Contoh :
// Dibimbing di | karakter contoh d:2, i:4 dast .......
// Software | karakter contoh s:1, e:1, dst.....
// Frontend| karakter contoh f:1,r:1 dst ......

// Tidak boleh langsung print exoected output
// NOTE : Berikan comment penjelasan pada baris kode yang dirasa penting
// Gunakan Object/Array dan juga perulangan
// Jawaban:
function charCount(word) {
  // write your code here
  const b = word.toLowerCase('').split('');
  const char = {};
  for (let word of b) {
    if (!char[word]) {
      char[word] = 1;
    } else {
      char[word]++;
    }
  }
  console.log(char);
}

charCount("Dibimbing di")
charCount("Software")
charCount("Frontend")
