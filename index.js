//factory function
const createCirle = (radius) => {
  return {
    radius,
    draw: function () {
      console.log('draw');
      console.log('radius', radius);
    },
  };
};

const circle = createCirle(2);
console.log(circle);
circle.draw();

// constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw with constructor');
    console.log('radius', radius);
  };
}

const circle2 = new Circle(4);
console.log(circle2);

for (let key in circle2) {
  console.log(key);
}
const keys = Object.keys(circle2);
console.log(keys);

if ('radius' in circle2) {
  console.log('yes');
}
// behind the scenes of creating function
// const CIrcle1 = new Function(
//   'radius',
//   `
// this.radius = radius;
//   this.draw = function () {
//     console.log('draw with constructor');
//     console.log('radius', radius);
//   };
// `
// );
// const cirlce = new CIrcle1(5);

// Circle.call({},1)
// Circle.call(window,1)
// Circle.apply({},[1,2,3])

// let x = 10;
// let y = x;

// x = 20;

// //y = 10

// let x = { value: 10 };
// let y = x;

// x.value = 20;

// deleting property

// let obj = {
//   name: 'John',
// };

// obj.surname = 'Smith';

// delete obj.name;
