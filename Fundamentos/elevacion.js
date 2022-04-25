console.log(example);
var example = "I'm the example!";

//prediccion: creo que va a salir undefined porque si va a detectar la variable pero no su valor
/*
console.log(example);
let example = "I'm the example!";
*/
//prediccion: va a dar error porque let solo se reconoce en bloques, y tomaria como un bloque lo que  esta por debajo y no por encima

console.log(hello);                                   
var hello = 'world';                                 
//prediccion: va a salir undefined porque si va a detectar la variable pero no su valor

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//prediccion: va a salir magmet porque es el ultimo valor que se le asigno a la variable needle

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//prediccion: va a salir super cool porque solo esta imprimiendo el primer valor, no la funcion porque no la esan llamando

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//prediccion: va a imprimir chicken y half chicken porque el primer console esta imprimiendo la variable food que es chicken, luego llama a la funcion eat
//que imprime la primera variable food, half chicken, la ultima variable food solo se le asigna un nuevo valor pero no lo imprime

/*
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
*/
//prediccion: no encuentra la funcion porque esta siendo declarada dentro de una variable que está por debajo de la llamada


console.log(genre); //undefinde
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre); //rock
    var genre = "r&b";
    console.log(genre); //r&b
}
console.log(genre); //disco

dojo = "san jose"; 
console.log(dojo); //san jose
learn();
function learn() {
    dojo = "seattle";   
    console.log(dojo);  //seattle
    var dojo = "burbank";
    console.log(dojo);  //burbank
}
console.log(dojo);  //san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; //error: está cambiando la constante dojo
    }
    return dojo;
}

echo "# MERN" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/nancyrs22/MERN.git
git push -u origin main