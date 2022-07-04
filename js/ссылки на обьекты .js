const z = {zz:11}
const b = {bb:22}

Object.setPrototypeOf(b, z)





b.zz //?


const k = () => {

  b.zz = 777

}


k(b)

z
b

console.log(213);