import { Component1 } from "./Component1";
import { Component2 } from "./Component2";
import { ConcreteMediator } from "./ConcreteMediator";
import * as readline from 'readline';
import * as fs from 'fs';

const component1 = new Component1();
const component2 = new Component2();
new ConcreteMediator(component1, component2);
const rl = readline.createInterface(process.stdin, process.stdout);
const files = fs.readFileSync("./base.json");
let data = JSON.parse(files.toString());
fs.writeFileSync('./base.json', JSON.stringify(data));
console.log("Ejemplo Mediator!");
console.log("Ingresa:");
console.log("AGUA para hechar agua al parabrisas");
console.log("DIRECIONAL para activar direccionales");
console.log("LIST para listar el log");
console.log("REMOVE para borrar el log");
console.log("EXIT para salir");
rl.setPrompt("> ");
rl.prompt();

rl.on("line", async function (line) {
    if(line.toUpperCase() === 'AGUA'){
        console.log('El cliente activa la operación hechar agua en parabrisas.');
        component1.doA();
        data.push({opcion: 'AGUA'});
        fs.writeFileSync('./base.json', JSON.stringify(data));
    }else if(line.toUpperCase() === 'DIRECCIONAL'){
        console.log('El cliente activa la operación direccionales.');
        component2.doD();
        data.push({opcion: 'DIRECCIONAL'});
        fs.writeFileSync('./base.json', JSON.stringify(data));
    }else if(line.toUpperCase() === 'REMOVE'){
        console.log('Archivo vaciado');
        fs.writeFileSync('./base.json', JSON.stringify([{}]));
    }else if(line.toUpperCase() === 'LIST'){
        console.log('LOG: ');
        console.log(data);
    }else if(line.toUpperCase() === 'EXIT'){
        console.log('Hasta pronto');
        process.exit(0);
    }else{
        console.log("Solo puedes ingresa:");
        console.log("AGUA para hechar agua al parabrisas");
        console.log("DIRECIONAL para activar direccionales");
        console.log("LIST para listar el log");
        console.log("REMOVE para borrar el log");
        console.log("EXIT para salir");
    }
	rl.prompt();
}).on("close", function () {
	process.exit(0);
});