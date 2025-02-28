//PUNTO 1
function findMax(lista) {
    n = lista.length;
    var valor = lista[0];
    for (i = 1; i < n; i++) {
        if (lista[i] > valor) {
            valor = lista[i];
        }
    }
    return valor;
}

console.log(findMax([-200, 13, 22, -40, 110]));

//PUNTO 2
function includes(lista, valor) {
    n = lista.length;
    for (i = 0; i < n; i++) {
        if (lista[i] == valor) {
            return true;
        }
    }
    return false;
}

console.log(includes([-200, 13, 22, -40, 110], 10));

//PUNTO 3
function sum(lista) {
    n = lista.length;
    var valor = 0;
    for (i = 0; i < n; i++) {
        valor += lista[i];
    }
    return valor;
}


console.log(sum([-200, 13, 22, -40, 110]));


//PUNTO 4
function missingNumbers(lista) {
    n = lista.length;
    var valores = [];
    var valorMax = lista[0];
    var valorMenor = lista[0];
    for (i = 1; i < n; i++) {
        if (lista[i] > valorMax) {
            valorMax = lista[i];
        }
        if (lista[i] < valorMenor) {
            valorMenor = lista[i];
        }
    }
    for (i = valorMenor; i < valorMax + 1; i++) {
        entra = true
        for (j = 0; j < n; j++) {
            if (lista[j] === i) {
                entra = false
            }
        }
        if (entra) {
            valores.push(i);
        }
    }
    return valores;
}


console.log(missingNumbers([-2, 2, 4, 1]));