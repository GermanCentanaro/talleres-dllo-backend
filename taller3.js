//PUNTO 1
function buscando(x) {
    return (x === "a" | x === "e" | x === "i" | x === "o" | x === "u");
}

function desglosarString(palabra, opcion) {
    const lista = palabra.split("");
    if (opcion === "vocales") {
        return lista.filter(buscando).length;
    }
    if (opcion === "consonantes") {
        return lista.length - lista.filter(buscando).length;
    }
    return -1
}

console.log("PUNTO 1: " + desglosarString("murcielagos", "vocales"));

//PUNTO 2
function twoSum(lista, suma) {
    for (var i = 0; i < lista.length; i++) {
        const valor = suma - lista[i];
        function sumando(num, index) {
            return num === valor && index !== i;
        }
        if (lista.find(sumando) === valor) {
            return [i, lista.findIndex(sumando)];
        }
    }
    return [];
}

console.log("PUNTO 2:", twoSum([2, 7, 11, 15], 9));
console.log("PUNTO 2:", twoSum([3, 2, 4], 6));
console.log("PUNTO 2:", twoSum([3, 3], 6));

//PUNTO 3
function romanos(letra) {
    if (letra === "I") return 1;
    if (letra === "V") return 5;
    if (letra === "X") return 10;
    if (letra === "L") return 50;
    if (letra === "C") return 100;
    if (letra === "D") return 500;
    if (letra === "M") return 1000;
    return 0;
}

function conversionRomana(palabra) {
    const lista = palabra.split("").map(romanos);
    function sumandoRomanos(total, num, i) {
        if (num < lista[i + 1]) {
            return total - num;
        }
        return total + num;
    }
    return lista.reduce(sumandoRomanos, 0)
}

console.log("PUNTO 3:", conversionRomana("III"));
console.log("PUNTO 3:", conversionRomana("IX"));
console.log("PUNTO 3:", conversionRomana("LVIII"));
console.log("PUNTO 3:", conversionRomana("MCMXCIV"));