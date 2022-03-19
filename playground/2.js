
// let a=fetch('https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=2015&page=13');

//  let b= a.then((data)=>{
//     return data.json();
//  })
// console.log(b);

// function Book(title,author){
//    console.log(this);
//    this.title=title;
//    this.author=author;
// }

// let book1= new Book('xyz','xyz');
// let book2=  Book('pqr','pqr');
// console.log(book1,book2);

// const http = require('https')
// console.log(http);
// const url = "http://localhost:5000/users";
// http.get(url, res => {
//    console.log(url)
//   let data = '';
//   res.on('data', chunk => {
//     data += chunk;
//   });
//   res.on('end', () => {
//     data = JSON.parse(data);
//     console.log(data);
//   })
// }).on('error', err => {
//   console.log(err.message);
// })
let d=fetch('http://localhost:5000/users')
let x=d.then((data)=>{return data.json()} )
co
x.then((d)=>console.log(d)).catch((e)=>console.log(e))