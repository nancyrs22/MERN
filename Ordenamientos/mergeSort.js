function mergeSort(arr)
{
    if(arr.length <=1)
    {
        return arr;
    }
    else
    {
        let mitad = parseInt(arr.length/2);
        let izq = arr.splice(0,mitad);
        let der = arr;

        let izqDiv = mergeSort(izq);
        let derDiv = mergeSort(der);

        return merge(izqDiv,derDiv);
    }

    function merge(izq,der)
    {
        let arrOrdenado=[];
        //Siempre y cuando no este vacio ninguno
        while(izq.length && der.length)
        {
            if(izq[0] < der[0])
            {
                arrOrdenado.push(izq.shift()); //Obtenemos el primer elemento del lado izq y lo eliminamos
            }
            else
            {
                arrOrdenado.push(der.shift()); //Obtenemos el primer elemento del lado der y lo eliminamos
            }
        }

        return [...arrOrdenado,...izq,...der];
    }
}