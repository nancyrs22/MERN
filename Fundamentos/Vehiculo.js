class Vehiculo
{
    constructor(anio,marca,modelo,color,ruedas)
    {
        this.anio = anio;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.ruedas = ruedas;
    }

    acelerar()
    {
        return "Aceleremos";
    }
}

class Auto extends Vehiculo
{
    constructor(anio,marca,modelo,color,ruedas,placas)
    {
        super(anio,marca,modelo,color,ruedas);

        this.placas = placas;
    }

    acelerar()
    {
        //let mensaje_padre = super.acelerar();
        return "RUUUMM..!!!"+super.acelerar();
    }
}

const auto1 = new Vehiculo(1991,"Honda","Civic","rojo",4);
console.log(auto1.marca);

console.log(auto1.acelerar());

const auto2 = new Auto(2010,"Mazda","CX-3","blanco",4,"ABC-123");
console.log(auto2.placas);
console.log(auto2.acelerar());