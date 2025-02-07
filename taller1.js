function convertidorTemp(t) {
  return t * 9 / 5 + 32
}


function resolvedor(a, b, c, opcion) {
    let resultado;
    if (opcion == 1) {
        resultado = (-b + Math.sqrt(b**2 - 4 * a * c)) / (2 * a)
    } else {
      resultado = (-b - Math.sqrt(b**2 - 4 * a * c)) / (2 * a)
    }
    return resultado
}

function mejorParidad(num) {
    var par;
    if (num%2 == 0)
        par = true 
    else
        par = false
    return par
}

function peorParidad(num) {
    var par;
    if (num == 2) {
        return "par";
    } else {
        if (num%2 == 0) {
            return "par";
        } else{
            if (num%2 != 0) {
                par = "no es par"
            }
        }
    }
    if (par == "no es par") {
        return "impar"
    }
}
