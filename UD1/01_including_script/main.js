function hello(name, lastname, years) {

}

let result = hello('Jhon', 'Anderson', 35)
if (result != "Hola Jhon Anderton, tienes 35 años de edad") {
    console.log('test fail')
    return
}

result = hello('Jhon', 'Foo', 47)
if (result != "Hola Jhon Foo, tienes 47 años de edad"){
    console.log('test fail')
    return
}

console.log('Test OK')