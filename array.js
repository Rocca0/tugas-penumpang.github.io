// // // let arr = ["Dani", "Juhaedi", 10, 1];

// // // arr.push("danendra", 10);

// // // console.log(arr.join("-"));

// // arr.unshift("LouAyy");
// // Array.shift();
// // console.log(arr)

// arr.splice(2, 2, "sadam", "nocolas");
// console.log(arr)

//METHOD FILTER
//method fillter() berfungsi untuk menyimpan data di array 
//paramater yg harus diberikan pada method filter() sama seperti method forEach() ,yaitu: sebuah fungsi callback

// const angka = [1,2,3,4,5,6,7,8,9];

// const fillterArr = angka.filter((item) => {
//     return item % 2 == 0
// });
// console.log(fillterArr);



// const user =[{
//     nama: 'Faiz',
//     umur: 50,
//     gender: 'male'
// },
// {
//     nama: 'Miftah',
//     umur: 50,
//     gender: 'female'
// },
// {
//     nama: 'Louayy',
//     umur: 100,
//     gender: 'male'
// },
// {
//     nama: 'Roro',
//     umur: 17,
//     gender: 'female'
// },
// {
//     nama: 'Prima',
//     umur: 70,
//     gender: 'male'
// },
// ];

// const userMale = user.filter((user) => user.umur === 50);
// console.log(userMale)

// const brand =[{
//     brandMobil: 'ToyotaMk5',
//     pintu: 5,
//     silinder: 'enam silinder',
// },
// {
//     brandMobil: 'ToyotaMk4',
//     pintu: 5,
//     silinder: 'enam silinder',
// },
// {
//     brandMobil: 'NisanGTR',
//     pintu: 3,
//     silinder: 'enam silinder',
// },
// {
//     brandMobil: 'Suzuki',
//     pintu: 4,
//     silinder: 'empat silinder',
// },
// ];

// const brandMobil = brand.filter((brand) => brand.pintu === 5);
// console.log(brandMobil)

// prompt.brandMobil = brand.filter((brand) =>brand.pintu === 5)
// document.write


// method INCLUDES
// method ini berfungsi untuk mengecek apakah subuah data didalam array atau tidak 
//biasanya digunakan untuk melakukan pencarian untuk memastikan data sudah didalam array 

// let tanaman = ["Padi","Kacang","Jagung","Genjer","Toge"];

// let isThereANust = tanaman.includes("kacang");
// console.log(isThereANust);

//Method Sort
//Method sort() berfungsi untuk mengurut kan data pada array


// var sortAlfabet = ['a','b','c','d','g','r'];
// var sortAngka = [3,4,5,2,1,6,7];

// console.log(sortAlfabet.sort());
// console.log(sortAngka.sort());

// function penjumlahan(a,b){
//     console.log(a);
//     console.log(b);
//     return a + b;
// }
// function pengurangan(a,b){
//     console.log(a);
//     console.log(b);
//     return a - b;
// }
// function perkalian(a,b){
//     console.log(a);
//     console.log(b);
//     return a * b;
// }
// function pembagian(a,b){
//     console.log(a);
//     console.log(b);
//     return a % b;
// }

// let operator = prompt("masukan inputan berupa +,-,*,/")
// let a = parseInt(prompt("masukan nilai1:")) 
// let b = parseInt(prompt("masukan nilai2:"))

// if(operator == '+'){
//     var hasil = penjumlahan(a,b)
//     console.log(hasil)
// }
// if(operator == '-'){
//     var hasil = pengurangan(a,b)
//     console.log(hasil)
// }
// if(operator == '*'){
//     var hasil = perkalian(a,b)
//     console.log(hasil)
// }
// if(operator == '/'){
//     var hasil = pembagian(a,b)
//     console.log(hasil)
// }

// let penumpang = [];
// let tambahPenumpang = function(namaPenumpang, penumpang) {

//   if (penumpang.length == 0) {
//     penumpang.push(namaPenumpang);
//     return penumpang;
//   } else {
//     for (i=0; 1<penumpang.length; i++) {
//       if (penumpang[i] == undefined) {
//         penumpang[i] = namaPenumpang;
//         return penumpang;
//       } else if (namaPenumpang == penumpang[i]) {
//         console.log('Penumpang tersebut sudah ada di dalam angkot.');
//         return penumpang;
//       } else if (i == penumpang.length - 1) {
//         penumpang.push(namaPenumpang);
//         return penumpang;
//       }
//     }
//   }
// }

// tambahPenumpang('Loka', penumpang)


var penumpang = [] //array
var tambahPenumpang = function (namaPenumpang, penumpang){ //parameter funtion
  if(penumpang.length == 0){ // untuk menghitung panjang data
    penumpang.push(namaPenumpang);   // untuk menambah data
    return penumpang; // untuk mengulang isi array
  }else{  
    for (i = 0; i < namaPenumpang.length; i++){ // untuk menghitung ulang panjag data yg sudah di isi
      if(penumpang[i] == undefined){ //(undefined) sebuah tanda jika penumpang kosong 
        penumpang[i] = namaPenumpang; //
        return penumpang;  // mengulang kembali isi array setelah proses dilakukan
      }else if(namaPenumpang == penumpang[i]){  // untuk mengolah data yang bernilai sama 
        console.log(namaPenumpang + "sudah ada"); //sebah informasi ketika ada data yang sama 
        return penumpang;  //untuk mengulang isi array setelah proded dilakukan 
      }
    }
  }
}













