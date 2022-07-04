// function* gen(x) {
//  return x * 2
// }
//
// console.log([gen]);
// console.log(gen.toString());
// console.log(Object.getPrototypeOf(gen));
// console.log(Object.getPrototypeOf(gen(2)));
// console.log(Object.getPrototypeOf(gen(2))[Symbol.iterator]);
// console.log(gen.constructor.name);
// console.log(typeof gen(2));
// console.log(gen(2).toString());
// console.log(gen(2));
// console.log();
// console.log();



// function foo(x,y) {
//   ajax("http://some.url.1/?x=" + x + "&y=" + y,
//     function(err,data){
//       if (err) {
//         // выдать ошибку в `*main()`
//         it.throw( err );
//       }
//       else {
//         // возобновить `*main()` с полученными `data`
//         it.next( data );
//       }
//     }
//   );
// }
//
// function *main() {
//   try {
//     var text = yield foo( 11, 31 );
//     console.log( text );
//   }
//   catch (err) {
//     console.error( err );
//   }
// }
// var it = main();
// // запустить все!
// it.next();


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))








