// метод сортировки
const ar = [3, 4, 0, 1, 2]

for (let j = 0; j < ar.length; j++) {
  for (let i = 0; i < ar.length -1 -j; i++) {
    if (ar[i] >= ar[i+1]) [ar[i], ar[i+1]] = [ar[i+1], ar[i]]
  }
}



Array.prototype.reduce2 = function (callBack, acc) {
  acc = acc ? acc : this[0];
  let i = acc.toString() == "[object Object]" ? 0 : 1;

  for (; i < this.length; i++) {
    var a = callBack(acc, this[i], i , this) //?
  console.log(a);
  }
  console.log(a);
  return acc
}

/*const callBack1 = (acc, item, index, array)=>{
  return acc[item] ? acc[item] += 1 : acc[item] = 1;
}*/
const callBack1 = (acc, item, index, array)=>{
  acc[item] ? acc[item] += 1 : acc[item] = 1;
  return acc
}



const ar = 'aAb'.toLowerCase().split("");

ar.reduce2(callBack1,{}) //?




Array.prototype.filter2 = function(callBack) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    const itsTrue = callBack(this[i], i , this) //?
    if (itsTrue) {
      arr.push(this[i])
    }
  }
  return arr
}

const callBack = (item, index, array) => {
  return item >= 3
}

Array.prototype.map2 = function(callBack) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {

    arr.push(callBack(this[i], i , this));
  }
  return arr
}

const callBack = (item, index, array) => {
  return item * item
}


/*function fn(a, b, c, d, e, ) {
  const ar = [].slice.call(arguments,3,-1);
  return ar;
}*/


// fn(1,2,3, 4, 5) //?





/*
function promptDirection(question) {
  var result = prompt(question, "");
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";

  throw new Error("Недопустимое направление: " + result);
}

function look() {
if(promptDirection("Куда?") == "L")
    return "дом";
  else
    return "двоих разъярённых медведей";
}
try {
  console.log("Вы видите ", look());
} catch (error) {
  console.log(error);
  console.dir(error.message);
  console.dir(error.stack);
  console.dir(error);
}
*/























