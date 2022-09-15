// Soal:
// Seorang frontend developer diminta untuk membuat fitur like posting pada suatu web artikel
// API untuk mendapatkan list likes dari suatu artikel mereturn data berbentuk array string.

// Contoh response:
// {
//     id:"HJKdsJbjbj124",
//     status:"200",
//     likes:["Jacob", "Alex"]
//     createAt: "Monday 27 Sept 2021"
// }

// Ada pun expected output secara data adalah
// []                                -->  menampilkan "no one like this"
// ["Peter"]                         -->  menampilkan  "Peter like this"
// ["Jacob", "Alex"]                 -->  menampilkan "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  menampilkan "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  menampilkan  "Alex, Jacob and 2 others like this"

// Buatlah function yang menghasilkan/mereturn output sesuai dengan expected output
// Tidak boleh langsung print expected output

// Expected Output:
// Alex, Jacob and 4 others like this
// Alex and Jacob like this
// no one likes this

// NOTE : berikan comment penjelasan pada baris kode yang menurut anda penting

// Jawaban:
// Membuat Data Dummy
let a = [
  {
    id: "HJKdsJbjbj124",
    status: "200",
    likes: [],
    createAt: "Monday 27 Sept 2021",
  },
  {
    id: "HJKdsJjbj124",
    status: "200",
    likes: ["Jacob", "Alex"],
    createAt: "Monday 28 Sept 2021",
  },
  {
    id: "HJKdsJbj124",
    status: "200",
    likes: ["Jacob", "Alex", "Mark"],
    createAt: "Monday 29 Sept 2021",
  },
  {
    id: "dsJbjbj124",
    status: "200",
    likes: ["Jacob", "Alex", "Mark", "Max", "Lala", "Hunter"],
    createAt: "Monday 30 Sept 2021",
  },
  {
          id: "dsJbjbj124",
          status: "200",
          likes: ["Jacob", "Alex", "Mark", "Max", "Lala", "Hunter"],
          createAt: "Monday 30 Sept 2021",
        },
];

// Proses Coding menggunakan perulangan dan pengondisikan
for (let i = a.length - 1; i >= 0; i--) {
  if (a[i].likes.length === 0) {
    console.log(`No one likes this`);
  } else if (a[i].likes.length === 2) {
    console.log(a[i].likes[0] + " and " + a[i].likes[1] + " likes this");
  } else if (a[i].likes.length === a[i].likes.length) {
    console.log(
      a[i].likes[0] +
        ", " +
        a[i].likes[1] +
        ", and " +
        (a[i].likes.length - 2) +
        " others likes this"
    );
  }
}
