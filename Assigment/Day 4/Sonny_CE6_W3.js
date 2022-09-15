// Soal:
// berikan spasi di antara kata yang terdapat pada string berikut
//expected output :
// Selamat Pagi Dunia
// Aku Suka Javascript

// Tidak boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dirasa penting

// // Jawaban:
// function manipulateString(str) {

// }

// console.log(manipulateString("SelamatPagiDunia"));
// console.log(manipulateString("AkuSukaJavascript"));

let str = "SelamatPagiDunia"

function manipulateString(str) {

    let result = []

    for (let i = 0; i < str.split("").length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result.push(" ")
            // console.log(result.push(" "));
            result.push(str[i])
          } else {
            result.push(str[i])
        }

    }

    return result.join("").trim()
}

console.log(manipulateString(str))

