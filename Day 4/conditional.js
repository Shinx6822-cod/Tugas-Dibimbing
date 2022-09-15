// Case : age clasification

// if : hanya untuk satu kondisi saja
let name = "Niko";
if (name === "Niko") {
  console.log("My Name Is Niko");
}

// if else : hanya untuk 1 kondisi dan 1 untuk set default value / output
let age = 10;
if (age <= 10) {
  console.log("kids");
} else {
  console.log("Adults");
}

let num = 10;
if (num % 2 == 0) {
  console.log(num, " is even number");
} else {
  console.log(num, " is odd number");
}

// else if : bisa untuk lebih dari dua kondisi
let names = "Fiqri";
let ages = 5;
if (ages < 10) {
  console.log("Kids");
} else if (ages >= 10 && ages <= 30) {
  console.log("Adults");
} else {
  console.log("Olds");
}

// nested if (if bersarang)
if (names === "Fiqri") {
  if (ages >= 10) {
    console.log("This is Fiqri");
  } else {
    console.log("Another");
  }
} else {
  console.log("Who am I?");
}

// ternary operators
// voteable case
let votable = ages < 18 ? console.log("Too young") : console.log("Old enough");
// console.log(voteable);

// nested ternary operators
name === "Fiqri"
  ? age < 18
    ? console.log("Fiqri too young")
    : console.log("Fiqri old enough")
  : console.log("another");

// klasifikasi nilai
let ketNilai = "";
let nilai = 100;
// note = pointing atau patokan untuk perbandingan
switch (true) {
  case nilai == 100:
    ketNilai = "A";
    break;
  case nilai >= 20 && nilai <= 50:
    ketNilai = "D";
    break;
  default:
    ketNilai = "Unknown";
    break;
}
switch (nilai) {
  case 100:
    ketNilai = "A";
    break;
  case 90:
    ketNilai = "B";
    break;
  case 80:
    ketNilai = "C";
    break;
  default:
    ketNilai = "Unknown";
    break;
}
console.log("Nilai = ", ketNilai);

let day;
// console.log("day : ", new Date().getDay());
switch (
  new Date().getDay() // base on expression
) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default: // similiar with else
    day = "Unknown Day";
    break;
}
console.log("The Day Is : ", day);
