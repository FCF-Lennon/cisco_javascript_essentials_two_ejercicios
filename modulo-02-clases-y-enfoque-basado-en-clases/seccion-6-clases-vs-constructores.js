
// Clases vs. Constructores en JavaScript

/*
    Las clases en JavaScript son muy parecidas a las funciones constructoras, 
    que también permiten crear objetos mediante la técnica del constructor.

    En realidad, las clases son principalmente *azúcar sintáctico* 
    sobre la herencia basada en prototipos ya existente.

    Azúcar sintáctico: se refiere a una característica del lenguaje que 
    no añade nuevas capacidades, sino que simplifica la sintaxis 
    para hacerla más cómoda y legible para el programador.

    Por lo tanto, las clases no introducen un nuevo modelo de herencia, 
    solo una forma más limpia y práctica de escribirlo.
*/


// Ejemplo 1: Uso de una clase

class TestClass { 
    constructor(arg) {
        this.arg = arg;
        console.log(this.arg);
    }; 
    
    showSth() { 
        console.log("¡Soy prototípico!");
    };
    
    static showSth() { 
        console.log("¡Hola, soy estático!");
    };  
}; 

let test = new TestClass("Hola");
test.showSth();          // -> ¡Soy prototípico!
TestClass.showSth();     // -> ¡Hola, soy estático!
console.log(test instanceof TestClass); // -> true

/*
    Explicación:
    
    - `showSth()` es un método de instancia (prototípico).
    - `static showSth()` es un método estático, pertenece a la clase, 
      no a las instancias.
*/


// Ejemplo 2: Uso de una función constructora

let Test = function(arg) { 
    this.arg = arg;
    console.log(this.arg);
}; 
    
Test.prototype.showSth = function() { 
    console.log("¡Soy prototípico!");
};
    
Test.showSth = function() { 
    console.log("¡Hola, soy estático!");
};  

let test2 = new Test("Hola");
test2.showSth();         // -> ¡Soy prototípico!
Test.showSth();          // -> ¡Hola, soy estático!
console.log(test2 instanceof Test); // -> true

/*
    Explicación:
    
    El código es funcionalmente idéntico al anterior.
    Ambos ejemplos crean una instancia con un método de prototipo 
    y un método estático asociado a la clase o constructor.
*/


// Ejemplo 3: Código más habitual sin fines comparativos

let TestAlt = function(arg) { 
    this.arg = arg;
    this.showSth = function() { 
        console.log("¡Soy prototípico!");
    };
    console.log(this.arg);
}; 
        
TestAlt.showSth = function() { 
    console.log("¡Hola, soy estático!");
};

/*
    En este caso:
    
    - El método `showSth` se define directamente dentro del constructor,
      lo que significa que cada objeto creado tendrá su propia copia.
    - Es más común en código simple, aunque menos eficiente
      que el uso de métodos en el prototipo.
*/


// Reflexión final

/*
    En resumen:
    
    - Las clases y los constructores ofrecen las mismas posibilidades.
    - Usar una u otra es una cuestión de preferencia o estilo del equipo.
    - Los frameworks modernos (como React) suelen basarse en clases,
      lo que a veces determina cuál método debemos usar.
*/
