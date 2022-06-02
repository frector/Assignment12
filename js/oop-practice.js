// STEP 1
// function Cat (){

// };
// const Dog = function (){

// };
// STEP 2
// const cat1 = new Cat();
// const dog1 = new Dog();
// STEP 3
// class Animal {
//     constructor(){
//         console.log('The Animal has been created');
//     }
// }
// const animal1 = new Animal();
// STEP 4
// class Animal {
//     constructor(size){
//         console.log(`The ${size} Animal has been created`);
//     }
// }
// const animal1 = new Animal('small');
// STEP 5
// class Animal {
//     constructor(color,breed,type,height,length){
//         console.log(`The ${color} ${breed} ${type} that is ${height} inches tall and ${length} inches long has been created`);
//     }
// }
// const animal1 = new Animal('red', 'falcon', 'bird', 'eight','twelve');
// STEP 6
// class Animal {
//     constructor(color,breed,type,height,length){
//         for (let prop in constructor){
//             console.log(constructor[prop]);
//         }
//     }
// }
// const animal1 = new Animal();
// STEP 7
// class Animal {
//     constructor(color, breed, type, height, length){
//         this.color = color;
//         this.breed = breed;
//         this.type = type;
//         this.height = height;
//         this.length = length;
//         console.log(`The ${this.color} ${this.breed} ${this.type} that is ${this.height} inches tall and ${this.length} inches long has been created`);
//     }
//     speak = function() {
//         if (${this.type} == 'dog') {
//             console.log(`The ${this.color} dog is barking!`);
//         } else if (${this.type} == 'cat') {
//             console.log(`The ${this.color} cat is meowing!`);
//         }   
//     }
// }
// const animal1 = new Animal('brown', 'boxer', 'dog', 'eight', 'twelve');
// animal1.speak();
// STEP 8
// class Animal {
//     constructor(color, breed, type, height, length){
//         let _color = color;
//         let _breed = breed;
//         let _type = type;
//         let _height = height;
//         let _length = length;
//         console.log(`The ${_color} ${_breed} ${_type} that is ${_height} inches tall and ${_length} inches long has been created`);
//         let checkType = function (){
//             if (${_type} == 'dog') {
//                 return ${_type};
//             } else if (${_type} == 'cat') {
//                 return ${_type};
//             } 
//         }

//     }
//     speak = function (){
//         console.log(`The ${_type} has made a noise`);
//     }
// }
// const animal1 = new Animal('brown', 'boxer', 'dog', 'eight', 'twelve');
// animal1.speak();
// STEP 9
