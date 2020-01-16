// const mama = (n) => {
//   return new Promise ((resolve, reject) => {
//       for (let i = 1; i <= 3; i++) {
//         console.log(i);
//         setTimeout(() => {
//             resolve();
//             }, 1000);
//         } 
//     })
   
// }
// mama().then(m => {console.log("done !")});


const someProcedure = async n =>
  {
    for (let i = 1; i < n; i++) {
      const t = 1000
      const x = await new Promise(r => setTimeout(r, t, i))
      console.log (i, x)
    }
    return 'done'
  }

someProcedure(4).then(x => console.log(x)) // => Promise