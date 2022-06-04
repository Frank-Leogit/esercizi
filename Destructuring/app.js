$(init);
function init(){
    // // DESTRUCTURING ARRAY
    // const alphabet = ['A','B','C','D','E','F'];
    // const numbers = ['1','2','3','4','5','6'];
    // const [a,,c, ...rest]= alphabet;
    // const [d,e,f, ...res]= numbers;
    // console.log(a,c);
    // console.log(d,e,f);
    // console.log(rest);
    // console.log(res);
    // const newArray = [...alphabet, ...numbers];
    // console.log(newArray);
    // // DESTRUCTURING FOR FUNCTIONS
    // const array = sumAndMultiply(2,3);
    // console.log(array);
    // const [sum, multiply,division='no division'] = sumAndMultiply(2,3);
    // console.log(sum,multiply);
    // console.log(division);
    // DESTRUCTURING OBJECTS
    const personOne = {
        name: 'Kyle',
        age: 24,
        address: {
            city: 'Somewhere',
            state: 'One of them'
        }
    }
    const personTwo = {
        name: 'Sally',
        age: 32,
        favoriteFood: 'Watermelon',
        address: {
            city: 'Somewhere else',
            state: 'Another of them'
        }
    }
    const {name : firstName,age , favoriteFood = 'Rice', address: {city, street = 'belford shire' } } = personTwo;
    console.log(firstName);
    console.log(age);
    console.log(favoriteFood);
    console.log(personTwo);
    console.log(street);
    

}
// function sumAndMultiply(a,b){
// return [a+b,a*b, a/b];
// }