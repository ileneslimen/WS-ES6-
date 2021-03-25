// Without destruction
let user = {
    name: "norhen",
    age: 26,
    fullstack: {
      track: "js",
      skill: 'ES6',
    },
  };
let a = (userr) => {
    return `my name is ${user.name}, i'm ${user.age} and we are learning ${user.fullstack.track}:${user.fullstack.skill} `;
  };
  console.log(a(user));
//with desct

let user = {
    name: "norhen",
    age: 26,
    fullstack: {
      track: "js",
      skill: 'ES6',
    },
  };
  let a = ({ name, age, fullstack: { track, skill } }) => {
    return `my name is ${name}, i'm ${age} and we are learning ${track}:${skill} `;
  };
  console.log(a(user));

  //spread objects
let user={name:'ilen', age:25, adress:'boumhel'}
let infos={track:'full stack js', framework:'react'}
let fullinfo= {...user,...infos}
console.log(fullinfo)
let info={...user, id:1}
console.log(info)
//spread with map 

const users = [{ name: "mohamed" }, { name: "salah" }];
const tt = [...users, { name: "hejer" }];
const u = users.map((el, i) => { return{...el, age: i} });
console.log(...u);

//spread tables 
let arr=['hello', 'world']
let arr2=['welcome', 'to', 'gomycode']
let newarr=[...arr]
console.log(newarr)
console.log(arr)
//concat
let newar=[...arr,...arr2]
let x=[...arr, 'x']
console.log(x)
console.log(newar)
