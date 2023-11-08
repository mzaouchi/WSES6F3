// function Hello(){
//     {
//       var a = 6
//       console.log(a)
//     }
//     console.log(a)
   
//     return "Hello Fourat"
//   }
  
//   console.log(Hello())
  
//   function Hello(){
//     {
//       let a = 9
//       console.log(a)
//     }
//     console.log(a)
  
   
//     return "Hello Fourat"
//   }
  
//   console.log(Hello())
  

  
//   function Hello(){
//     {
//       const a = 7
//       console.log(a)
//     }
//     console.log(a)
    
  
   
//     return "Hello Fourat"
//   }
  
//   console.log(Hello())
  
//   var a = 5
//   a = 8
//   console.log(a)
  
//   let b = 1
//   b = 90
//   console.log(b)
  
//   const c = 9
//   c = 7
  
//   const t = [2,5,8]

// t[0] = 90

// // console.log(t)

// // t = 7

// t.push(78)

// console.log(t)

// const user = {name :"Fourat", age : 19}

// // user = 9

// user.name = "Souad"

// console.log(user)

// user.city = "Bhar lazrag"

// console.log(user)

// // function Somme(a,b){
// //   return a+b
// // }

// // let Somme=(a,b)=> a+b
  

// // console.log(Somme(3,8))

// // const Hello=()=> "Hello Fourat"

// // console.log(Hello())

// // const Hello=v=> "Hello "+v

// // console.log(Hello("Souad"))

var name = "Dali"
var age = 5
// console.log("Hello "+name+" My age is "+age)

console.log(`Hello ${name}, 
my age is ${age}`)

// var age = 70

// age<18 ? console.log("Dali") : age<60 ? console.log("Adulte") : console.log("Vieux")

// if(age<18){
//   console.log('Dali')
// }else if(age<60){
//   console.log('Adulte')
// }else{
//   console.log('Vieux')
// }

// var a = 0

// a >= 0 ? console.log('Positif')  :console.log('Negatif')

var a = 3

// if(a>=0){
//   console.log('Positif')
// }

a>=0 && console.log('Poisitif') 


var user = {name : "Ali", age : 21,adress : {city :"Bhar lazrag",cp : 2089}}

var djeja = {name :"Dali",age : 2,adress:{city:'paris',cp:9999}}

const Hello=(k)=>{ 
  var {name,age,adress} = k
  var {city} = adress
  return `Hello ${name}, age ${age}, from ${city}`
  }

console.log(Hello(user))
// var t = [4,5,6,8]
// var u = [8,3,0,2,7]
// // var k = []
// var o = [...u, ...t]
// console.log(o)
// console.log(t)


// console.log(t+u)
// console.log(t,u)
// console.log([t+u])

// for(var i = 0;i<t.length;i++){
//   k.push(t[i])
// }


// for (var i = 0; i < u.length; i++) {
//   k.push(u[i])
// }

// console.log(k)

var user ={name :"Si mohamed ali",age : 3}

console.log({...user,city :'Lac',age : 90})




var t = [4,7,8,3]
const initialValue = 0;
console.log(t.reduce((accumulator, currentValue) => accumulator + currentValue*2,initialValue))


var f = [4,7,8,3]


console.log(f.map((el,i,t)=> el+2))

console.log(f.map((el,i,t)=>el))

console.log(f)


var f = [4,7,8,3]
f.forEach((el, i, t) =>  t[i] = el + 2)

console.log(f)


var f = [4,7,8,6]

// console.log(f.filter((el,i,t)=>el>4))

console.log(f.filter((el, i, t) => i%2 == 0))


var f = [4,7,8,6]

console.log(f.find((el,i,t)=> el == 4))

var f = [4, 7, 8, 6]

console.log(f.findIndex((el,i,t)=> el == 67))


var f = [4, 7, 8, 6]

console.log(f.sort((a,b)=>a-b))
console.log(f.sort((a, b) => b-a))

var f = [4, 7, 8, 6,3,3,5]

console.log(f.splice(1,2))

var a = "Mahmoud*kHALIL"

console.log(a.split('*'))

var t = ["Mahmoud","Khalil"]

console.log(t.join('*'))
