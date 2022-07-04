// let ar = [99, 77];
// const iter = ar[Symbol.iterator]();
// console.log(iter);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

class Range {
  constructor (from, to) {
    this.from = from;
    this.to = to;
  }
  has(x) { return typeof x === "number" && this.from <= x && x <= this.to; }

  toString() { return `{ х | ${this.from} ^ х ^ ${this.to} }`; }


  [Symbol.iterator]() {

    let next = Math.ceil(this.from);
    let last = this.to;
    return {
      
      next () {
        return (next <= last)
          ? { value: next++ }
          : { done: true };
      },

    };

  }
}

// for (const i of new Range (1, 4)) {i}

// const obj = new Range (1, 4)
// console.log(obj);
// const iter = obj[Symbol.iterator]()
// console.log(iter);
// console.log(iter[Symbol.iterator]);
// console.log(iter[Symbol.iterator]());





// const obj = {
//   start : 0,
//   end:10,
//   [Symbol.iterator](){
//     return {
//       next:() => {
//         if (this.start <= this.end) return {value:this.start ++ , done:false}
//         if (this.start > this.end) return {value:undefined, done:true}
//       }
//     }
//   }
// }
// ;
// console.log([...obj]);

// for (const item of obj) {
//   console.log(item);
// }









