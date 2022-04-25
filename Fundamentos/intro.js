var variable = "Hola";

console.log(variable);

const constante = "No podemos cambiarla";

//constante = "Ya la cambié"; //esto saldra error porque las vareiables constantes no pueen cambiar su valor

let i = 0; //la variable tipo let solo se puede usar en un bloque de codigo
for(let i=0; i<5; i++)
{
    console.log(i);
}

console.log(i);

const alumnos = ["Juan","Ana","Maria","Jose"];

function imprimirNombres()
{
    let index = 0;
    let name;

    for(index; index<alumnos.length;index++)
    {
        name = alumnos[index];
        console.log(name+' alumno esta en '+index);
    }

    console.log("El ultimo nombre e index fueron: "+name+" "+index);
}

imprimirNombres();