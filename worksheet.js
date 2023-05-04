//Task One:
let dayOfWeek='Monday';
console.log(dayOfWeek);

let dayOfWeek1 = "Friday"
console.log(`I cant wait for ${dayOfWeek1}`);

//Task Two:
let animalInput = prompt('What is your favorite animal?')
let colorInput = prompt('Whay is your favorite color?')
console.log(`I've never seen a ${colorInput} ${animalInput}`)

//Conditionals Task One:
// My favorite breakfast French Toast
// My favorite lunch Steak Bomb Sub
// My favorite dinner Prime Rib

let timeOfDay =1300
let typeOfMeal;
if(timeOfDay<1200){
    typeOfMeal = 'French Toast'
}
else if (timeOfDay>1200 && timeOfDay<1700){
    typeOfMeal = 'Steak Bomb Sub'
}
else if (timeOfDay>1700){
    typeOfMeal = 'Prime Rib'
}
console.log(typeOfMeal);

// Conditionals Task Two:

const randInt = Math.random() * (10-1) + 1
console.log (randInt);
if(randInt > 0 && randInt < 2){
    console.log('Beatles')
}
if(randInt>3 && randInt<5){
    console.log('Stones')
}
if(randInt>6 && randInt<8){
    console.log('Floyd')
}
if(randInt===9 && randInt ==10){
    console.log('Hendrix')
}

// Loops Task One:

for(let i=0;i<7;i++);{
console.log('Javascript is Cool!!!');
}

//Loops Task Two:

let counter = 0;

for(let i = 0; i < 11; i++) {
    console.log(counter);
    counter = counter + 1;
}

//Loops Task Three:

for(let i = 0; i < 10; i++) {
    if(counter == 0) {
        console.log("Hello");
        counter += 1;
    }

    else if(counter % 2 != 0) {
        console.log("Goodbye");
        counter += 1;
    }

    else if(counter % 2 == 0) {
        console.log("Hello");
        counter += 1;
    }
}

// Functions Task One:

function printMovieName() {
    let favoriteMovie = "Berserk";
    return favoriteMovie;
}

let bestMovie = printMovieName();
console.log("Your favorite movie is: " + bestMovie);


    



