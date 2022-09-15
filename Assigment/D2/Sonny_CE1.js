// Soal:
// Pada suatu kelas, seorang guru meminta para siswa untuk melakukan hal sebagai berikut
// guru akan menghitung nilai dari angka 1 hingga 15
// setiap bilangan yang habis dibagi 3 maka siswa secara bersama akan menyebut kata "Hip"
// setiap bilangan yang habis dibagi 5 maka siswa secara bersama akan menyebut kata "Hura"
// setiap bilangan yang habis dibagi 3 dan 5  maka siswa secara bersama akan menyebut kata "Hip Hura"
// setiap bilangan yang tidak memenuhi kondisi sebelumnya maka siswa secara bersamaan akan menyebutkan
//      angka itu sendiri
//
/* 
Expected Output:
1
2
Hip
4
Hura
Hip
7
8
Hip
Hura
11
Hip
13
14
Hip Hura
done
*/

// Tidak Boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dianggap penting

// contoh 1 :
// hipHura(15)
// "Hip Hura"

// contoh 2 :
// hipHura(6)
// "Hip"

// contoh 3 :
// hipHura(25)
// "Hura"

// Buatlah logic dari statement diatas
// Tidak boleh langsung print expected output

// Jawaban:

const bilangan = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function hipHura(bilangan) {
  // write your code here
  for (let i = 0; i < bilangan.length; i++) {
    // setiap bilangan yang habis dibagi 3 dan 5  maka siswa secara bersama akan menyebut kata "Hip Hura"
    if (bilangan[i] % 3 === 0 && bilangan[i] % 5 === 0) {
        console.log("Hip Hura");
    }
    // setiap bilangan yang habis dibagi 3 maka siswa secara bersama akan menyebut kata "Hip"
    else if (bilangan[i] % 3 === 0) {
      console.log("Hip");
    }
    // setiap bilangan yang habis dibagi 5 maka siswa secara bersama akan menyebut kata "Hura"
    else if (bilangan[i] % 5 === 0) {
      console.log("Hura");
    }
    // setiap bilangan yang tidak memenuhi kondisi sebelumnya maka siswa secara bersamaan akan menyebutkan angka itu sendiri
    else {
      console.log(bilangan[i]);
    }
  }
  return 'done';
}

console.log(hipHura(bilangan));

console.log("_________________________" + "\n" + "Jawaban ke-2");

