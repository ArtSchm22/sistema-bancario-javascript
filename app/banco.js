let client = {
    name: "John Doe",
    login: "john_doe",
    password: "john123",
    account: "AT22",
    money: 3000
}

let add_dinheiro = function(value){
    client.money = client.money + value
}

let remover_dinheiro = function(value){
    client.money = client.money - value
}

let consultar_saldo = function(){
    console.log(client.money)
}

let consultar_cliente = function(){
    console.log(`Nome: ${client.name}`)
    console.log(`Login: ${client.login}`)
    console.log(`Senha: ${client.password}`)
    console.log(`Conta: ${client.account}`)
    console.log(`Saldo: ${client.money}`)
}

add_dinheiro(2000)
consultar_cliente()