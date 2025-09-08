
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
// información completa: título, artista y fecha de creación:

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