
// Laboratorio - Módulo 01

// Ejercicio 01 - Desafío de código

/*
    Has comenzado a organizar las pinturas que guardas en casa 
    y has decidido hacer un inventario de algunas de las más 
    importantes. Declara un arreglo de objetos que corresponda
    a las siguientes obras:

    - Mona Lisa (Leonardo da Vinci, 1503)
    - La última cena (Leonardo da Vinci, 1495)
    - La noche estrellada (Vincent van Gogh, 1889)
    - El grito (Edvard Munch, 1893)
    - Guernica (Pablo Picasso, 1937)
    - El beso (Gustav Klimt, 1907)
    - La joven de la perla (Johannes Vermeer, 1665)
    - El nacimiento de Venus (Sandro Botticelli, 1485)
    - Las meninas (Diego Velázquez, 1656)
    - La creación de Adán (Miguel Ángel, 1512)
*/

// Muestra en la consola todas las obras de la lista con la
// información completa: título, authora y fecha de creación:

// Desarrollo:

const pictures = [
    { picture: "Mona Lisa", author: "Leonardo da Vinci", year: 1503 }, 
    { picture: "La última cena", author: "Leonardo da Vinci", year: 1495 }, 
    { picture: "La noche estrellada", author: "Vincent van Gogh", year: 1889 }, 
    { picture: "El grito", author: "Edvard Munch", year: 1893 }, 
    { picture: "Guernica", author: "Pablo Picasso", year: 1937 }, 
    { picture: "El beso", author: "Gustav Klimt", year: 1907 }, 
    { picture: "La joven de la perla", author: "Johannes Vermeer", year: 1665 }, 
    { picture: "El nacimiento de Venus", author: "Sandro Botticelli", year: 1485 }, 
    { picture: "Las meninas", author: "Diego Velázquez", year: 1656 }, 
    { picture: "La creación de Adán", author: "Miguel Ángel", year: 1512 }
]

console.log('\nObras: con For + in')
for (canvas in pictures) {
    console.log(`Pintura: ${pictures[canvas].picture}, Autor: ${pictures[canvas].author}, Año: ${pictures[canvas].year}`)
}

console.log('\nObras: con For + of')
for (const canvas of pictures) {
    console.log(`Pintura: ${canvas.picture}, Autor: ${canvas.author}, Año: ${canvas.year}`)
}

console.log('\nObras: con For + of + entries()')
for (const [index, canvas] of pictures.entries()) {
    console.log(`${index + 1}. Pintura: ${canvas.picture}, Autor: ${canvas.author}, Año: ${canvas.year}`)
}

console.log('\nObras: con forEach()')
pictures.forEach((canvas, index) => {
    console.log(`${index + 1}. Pintura: ${canvas.picture}, Autor: ${canvas.author}, Año: ${canvas.year}`)
})



// Ejercicio 02 - desafío de código

/*
    Escribe dos funciones, Image y getImage, que devuelvan
    un nuevo objeto de imagen basado en tres argumentos dados:
    título, autor y fecha.

    La función Image es el constructor, getImage es la fábrica.
    Usando el arreglo de datos images de la tarea anterior, crea
    un nuevo arreglo, images1, utilizando el constructor Image 
    (no copies los objetos, sino crea nuevos basados en las 
    propiedades leídas).
    
    De manera similar, a partir de images1 crea un nuevo arreglo,
    images2, utilizando getImage.
    
    Muestra el contenido de images2.
*/

// Desarrollo:

// Constructor
let ImageObj = function(picture, author, year) {
    this.picture = picture;
    this.author = author;
    this.year = year;
}
// Fábrica
let getImage = function(picture, author, year) {
    return {
        picture,
        author,
        year
    };
}

let images1 = [];
let images2 = [];

pictures.forEach((canvas) => images1.push(new ImageObj(canvas.picture, canvas.author, canvas.year)));
images1.forEach((canvas) => images2.push(getImage(canvas.picture, canvas.author, canvas.year)));
console.log('\nimages2: con getImage()');
images2.forEach((canvas, index) => {
    console.log(`${index + 1}. Pintura: ${canvas.picture}, Autor: ${canvas.author}, Año: ${canvas.year}`)
});



// Ejercicio 03 - desafío de código

/*
    Crea un objeto images que se utilizará para almacenar las imágenes.
    El objeto debe tener una propiedad list. que será un arreglo de objetos
    de imagen, y métodos:

    - contains, que recibe como argumento el título de la imagen y devuelve
      true si la imagen ya está en la lista (de lo contrario devuelve false).
    - add, que recibe tres argumentos (titulo, autor y fecha), crea un nuevo
      objeto con ellos y lo agregas a la lista (si aún no ha sido agregado).
    - show, que muestra todas las imágenes en la lista.
    - clear, que elimina todos los objetos de la lista.

    Al crear un objeto, utiliza el constructor Image preparado en la tarea
    anterior.
*/

// Prueba el script llamando a la secuencia:

/* 
    images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
    images.add('The Last Supper', 'Leonardo da Vinci', 1495);
    images.add('The Starry Night', 'Vincent van Gogh', 1889);
    images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
    images.show();
    // -> Mona Lisa (Leonardo da Vinci, 1503)
    // -> Last Supper (Leonardo da Vinci, 1495)
    // -> The Starry Night (Vincent van Gogh, 1889)
    images.clear();
    images.show(); 
*/

// Desarrollo:

let images = {
    list: [], 

    contains(picture) {
        return this.list.some(canvas => canvas.picture === picture)
    },
    add(picture, author, year) {
        if (!this.contains(picture)) {
            this.list.push(new ImageObj(picture, author, year))
        }
    },
    show() {
        this.list.forEach(canvas => console.log(`-> ${canvas.picture} (${canvas.author}, ${canvas.year})`))
    },
    clear() {
        this.list.splice(0, this.list.length);
    }
};


// Ejemplo de prueba
console.log(images.contains("Mona Lisa")); // false
images.add("Mona Lisa", "Leonardo da Vinci", 1503);
images.add("The Last Supper", "Leonardo da Vinci", 1495);
images.add("The Starry Night", "Vincent van Gogh", 1889);
images.add("Mona Lisa", "Leonardo da Vinci", 1503); // no se duplicará
images.show();
/*
-> Mona Lisa (Leonardo da Vinci, 1503)
-> The Last Supper (Leonardo da Vinci, 1495)
-> The Starry Night (Vincent van Gogh, 1889)
*/
// images.clear();
console.log(images.list.length); // 0



// Ejercicio 04 - desafío de código

/*
    Complementa el objeto images de la tarea anterior con dos nuevos 
    métodos (sin reescribir todo el objeto):
    
    - edit: que recibe tres argumentos (title, artist y date) y, si
      encuentra una imagen con el título dado en la lista, cambia sus
      propiedades artist y date.
    - delete: que recibe el argumento title y, si encuentra una imagen
      con este título en la lista, la elimina (para borrar un elemento
      de la lista, usa el método splice).

    Adicionalmente, agrega un método show() al constructor Image, que 
    mostrará la información de esa única imagen. No reescribas el constructor.
    Para esto, utiliza prototypes. Luego, modifica el método show del objeto
    images para que use el nuevo método show de una sola imagen y así 
    mostrar la información.
*/

// Prueba el script llamando a la siguiente secuencia:

/*
    images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
    images.add('The Last Supper', 'Leonardo da Vinci', 1495);
    images.add('The Starry Night', 'Vincent van Gogh', 1889);
    images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
    images.delete('The Last Supper');
    images.show();
    // -> Mona Lisa (Leonardo da Vinci, 1504)
    // -> The Starry Night (Vincent van Gogh, 1889)
*/


// Desarrollo:

images.edit = function(picture, author, year) {
    let canvas = this.list.find(canvas => canvas.picture === picture);
    if (canvas) {
        canvas.author = author;
        canvas.year = year;
        return true;
    }
    return false;
}

images.delete = function(picture) {
    let index = this.list.findIndex(canvas => canvas.picture === picture);
    if (index !== -1) {
        this.list.splice(index, 1);
        return `La obra: ${picture}, fue eliminada.`;
    }
    return `La obra: ${picture}, no se encuentra en nuestros registros.`;
}


ImageObj.prototype.show = function() {
    return `-> ${this.picture} (${this.author}, ${this.year})`;
}

images.show = function() {
    this.list.forEach(canvas => console.log(canvas.show()))
}


let canva = 'Mona Lisa';
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.delete('The Last Supper');
images.show();



// Ejercicio 05 - Desafio de código

/*
    Escribe una función deepComp, que compare dos objetos dados como
    argumentos (comparación profunda).
    Compara únicamente las propiedades (ignora los métodos) y considera
    la posibilidad de anidamiento (cualquier número de niveles).

    Las propiedades también pueden ser objetos y arreglos. Nos interesan
    únicamente las propiedades disponibles durante la enumeración habitual.
*/

// Para las pruebas, utiliza el siguiente fragmento de código:

let deepComp = function(objA, objB) {

    let keysA = Object.keys(objA);
    let keysB = Object.keys(objB);
    
    if (objA === objB) return true;
    if (objA == null || objB == null) return objA === objB;
    if (typeof objA !== 'object' || typeof objB !== 'object') return objA === objB;
    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
        if (!keysB.includes(key)) return false;
        if (!deepComp(objA[key], objB[key])) return false;
    }
    return true;
}

let a = {x : [1, 2, 3, 4, 5], y : 0, z : {m : "test", n : false}};
let b = {x : [1, 2, 3, 4, 5], y : 0, z : {m : "test", n : false}};
let c = {x : [1, 2, 3, 4, 5, 6], y : 0, z : {m : "test", n : false}};
let d = {x : [1, 2, 3, 4], y : 0, z : {m : "test", n : false}};
let e = {x : [1, 2, 3, 4, 5], y : 0, z : {m : "test", n : true}};
let f = {x : [1, 2, 3, 4, 5], y : -1, z : {m : "test", n : false}};

const listObj = [b, c, d, e, f];

for (const obj of listObj) {
    console.log(deepComp(a, obj)); // -> false
}
