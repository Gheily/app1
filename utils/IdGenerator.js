//Crear randómicamente 10 dígitos 
export function idGenerator(n) { 
    var add = 1, max = 10 - add; 
    
    if (n > max) { 
        return idGenerator(max) + idGenerator(n - max); 
    } 
    
    max = Math.pow(10, n + add); 
    var min = max / 10; 
    var number = Math.floor(Math.random() * (max - min + 1)) + min; 
    
    return ("" + number).substring(add); 
}