
//SECCIÓN 3 – Programación asíncrona:


/*
    Esta sección profundiza en la programación asíncrona en JavaScript.
    Se exploran objetos y técnicas clave como:
    - XMLHttpRequest
    - fetch
    - callbacks
    - promesas
    - async / await

    El objetivo es entender cómo JavaScript maneja operaciones que
    no se completan inmediatamente, como peticiones a servidores.
*/


// Programación asíncrona – Servidor de ejemplo (Node.js):


/*
    Servidor de ejemplo implementado con Node.js y Express.
    Responde en un solo puerto (3000) y ofrece:

    - Una página HTML simple.
    - Una respuesta JSON que:
    - recibe un parámetro numérico "value"
    - calcula su cuadrado
    - responde con el resultado y un retardo aleatorio (1000–2000 ms)

    ⚠️ Código de servidor: solo ilustrativo.
*/

// Código ejecutable en Node.js
var express = require("express");
var cors = require("cors");
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));

const sleep = (waitTimeInMs) =>
  new Promise(resolve => setTimeout(resolve, waitTimeInMs));

app.get("/", (req, res) => {
  res.send("Sample Site");
});

app.get("/json", async (req, res) => {
  const time = Math.floor(Math.random() * 1000) + 1000;
  let square = req.query.value || 0;
  square *= square;
  await sleep(time);
  res.json({
    time: time,
    square: square
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

/*
    Para probar:
    - Abrir http://localhost:3000
    - Usar la consola del navegador apuntando a /json
*/


// ¿Por qué necesitamos técnicas asíncronas?:


/*
    Ejecución síncrona:
    - Cada tarea espera a que la anterior termine.

    Ejecución asíncrona:
    - Una tarea puede comenzar antes de que otra finalice.
    - Es común cuando se espera información externa (servidores, BD).

    Veamos una comparación práctica.
*/


// Ejecución síncrona:

let showInfo = result => {
  let info = "the arguments are equal";
  if (result > 0) {
    info = "the first argument is greater";
  } else if (result < 0) {
    info = "the second argument is greater";
  }
  console.log(info);
};

let compareSync = (a, b, fn) => {
  let r = a - b;
  fn(r);
};

console.log("start");
compareSync(10, 5, showInfo);
console.log("end");

/*
    Salida:
        start
        the first argument is greater
        end

    Todo ocurre en orden secuencial → síncrono.
*/


// Ejecución asíncrona:


let compareAsync = (a, b, fn) => {
  let r = a - b;
  setTimeout(fn, 1000, r);
};

console.log("start");
compareAsync(10, 5, showInfo);
console.log("end");

/*
    Salida:
        start
        end
        the first argument is greater

    La función termina antes de ejecutar el callback.
*/


// Funciones callback – XMLHttpRequest:

/*
    XMLHttpRequest permite realizar solicitudes HTTP de forma asíncrona.
    Se basa en eventos (por ejemplo, "load").
*/

const value = 200;
let request = new XMLHttpRequest();

request.onload = () => {
  if (request.status === 200) {
    const resp = JSON.parse(request.responseText);
    console.log(`server: ${value} * ${value} = ${resp.square} (${resp.time}ms)`);
  }
};

request.open('GET', `http://localhost:3000/json?value=${value}`);
request.send();

console.log(`browser: ${value} * ${value} = ${value * value}`);

/*
    El navegador no espera al servidor.
    La respuesta se maneja cuando ocurre el evento "load".
*/

// Variante usando addEventListener
request.addEventListener("load", () => {
  if (request.status === 200) {
    const resp = JSON.parse(request.responseText);
    console.log(`server: ${value} * ${value} = ${resp.square} (${resp.time}ms)`);
  }
});


// Promesas:

/*
    Una promesa representa el resultado futuro (éxito o error)
    de una operación asíncrona.
    Estados posibles:
    - pending
    - fulfilled
    - rejected
*/

// Promesa simple resuelta
let p1 = new Promise((resolve, reject) => {
  resolve(5);
});

// Promesa rechazada
let p2 = new Promise((resolve, reject) => {
  reject(new Error('!!!'));
});

// Promesa con retardo aleatorio
let p3 = new Promise((resolve, reject) => {
  let value = Math.floor(Math.random() * 4);
  if (value === 0) {
    reject(new Error('!!!'));
  } else {
    setTimeout(() => resolve(value), value * 1000);
  }
});

// Consumo con then / catch
p3.then(
  value => console.log(value),
  error => console.log(`Error: ${error.message}`)
);

console.log('end');

/*
    then → éxito
    catch → error
    finally → siempre
*/

// Ejemplo con finally
let p4 = new Promise(resolve => {
  setTimeout(() => resolve(5), 1000);
});

p4.finally(() => console.log('promise is settled'))
  .then(v => console.log(v));

// Encadenamiento de promesas
let p5 = new Promise(resolve => resolve(5));

p5.finally(() => console.log('end'))
  .then(v => {
    console.log(v);
    return ++v;
  })
  .then(v => {
    console.log(v);
    return ++v;
  })
  .then(v => console.log(v));

/*
    Salida:
        end
        5
        6
        7
*/


// Promise.all:

let promisesAll = [
  new Promise(resolve => setTimeout(() => resolve(1), 1000)),
  new Promise(resolve => setTimeout(() => resolve(3), 3000)),
  new Promise(resolve => setTimeout(() => resolve(2), 2000)),
];

Promise.all(promisesAll)
  .then(values => values.forEach(v => console.log(v)));


// Promise.any y Promise.race:

let promisesRace = [
  new Promise(resolve => setTimeout(() => resolve(4), 4000)),
  new Promise(resolve => setTimeout(() => resolve(3), 3000)),
  new Promise(resolve => setTimeout(() => resolve(2), 2000)),
];

Promise.any(promisesRace)
  .then(v => console.log(`any: first resolved ${v}`));

Promise.race(promisesRace)
  .then(v => console.log(`race: first resolved ${v}`));


// Promesas + fetch

const valueFetch = 200;

fetch(`http://localhost:3000/json?value=${valueFetch}`)
  .then(response => response.json())
  .then(data => {
    console.log(`server: ${valueFetch} * ${valueFetch} = ${data.square} (${data.time}ms)`);
  });

console.log(`browser: ${valueFetch} * ${valueFetch} = ${valueFetch * valueFetch}`);


// async / await:

/*
    async / await permite escribir código asíncrono
    con una sintaxis similar a la síncrona.
*/

function newPromise() {
  return new Promise(resolve => {
    setTimeout(() => resolve(1), 1000);
  });
}

async function testAsync() {
  console.log('testAsync start');
  let resp = await newPromise();
  console.log(resp);
  console.log('testAsync end');
}

console.log('before testAsync ...');
testAsync();
console.log('... after testAsync');


// async / await con fetch:

const valueAsync = 200;

async function getSquare(v) {
  const response = await fetch(`http://localhost:3000/json?value=${v}`);
  const data = await response.json();
  console.log(`server: ${v} * ${v} = ${data.square} (${data.time}ms)`);
}

getSquare(valueAsync);
console.log(`browser: ${valueAsync} * ${valueAsync} = ${valueAsync * valueAsync}`);


// Manejo de errores con try / catch:


function failingPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('something bad happened')), 1000);
  });
}

async function testError() {
  try {
    let resp = await failingPromise();
    console.log(resp);
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
}

testError();
