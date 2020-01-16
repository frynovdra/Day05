# Day05

1. Javascipt bersifat non blocking, jika suatu perintah diberikan delay maka yang dieksekusi adalah baris selanjutnya dan baris sekarang dskip sesuai kondisi delay.
2. Proses synchronous terkesan lama dibandingkan asynchronous 
3. Javascript single thread tape bisa asynchronous 
4. Cara menghandle Asynchronous pada javascript bisa menggunakan promise 
5. SetTimeout (() => {}, delay)
6. Pemakaian atau calling fungus promise Chaining :  fungsi.then().then().catch().finally();
7. finally( ) kalau tidak beri parameter akan dieksekusi paling awal
8. Untuk chaining lebih cocok pada promise
9. Untuk pemakaian resolve hanya bisa tertampil 1 pada for loop
10. Untuk get API butuh delay, make async await dibutuhkan until mapping

* Kerangka promise : 
`const namaFungsi = () => {
    return new Promise ((resolve,reject) =>{
    /*Isi code disini*/
)}`


* Kerangka Async Await :
`(async(){
    await /*perintah*/
})
