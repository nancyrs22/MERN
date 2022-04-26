function hacerPasta(pasta,hacerSalsa)
{
    console.log("Hervir el agua");
    console.log("Agregar "+pasta+" pasta al agua");
    console.log("Pasta lista!");

    hacerSalsa();
}

function hacerSalsaAlfredo()
{
    console.log("Revolvemos ingredientes y hacemos la salsa alfredo");
}

function hacerSalsaPesto()
{
    console.log("Revolvemos ingredientes y hacemos la salsa pasta");
}

hacerPasta("Spagetti",hacerSalsaAlfredo);
console.log("----------");
hacerPasta("Fetuccini",hacerSalsaPesto);

const callbackFunction = () =>
{
    console.log("Algunos milisengudos despues");
}

setTimeout(callbackFunction,3000);