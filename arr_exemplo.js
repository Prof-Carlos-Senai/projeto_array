let res=document.getElementById('res')
let nome_cidade = []

function inserir(){
    let cidade = document.getElementById('cidade').value
    nome_cidade.push(cidade)
    res.innerHTML = "As cidades inseridas são: " + nome_cidade
}

function excluir(){
    let cidade = document.getElementById('cidade').value
    nome_cidade.pop()
    res.innerHTML = "As cidades inseridas são: " + nome_cidade
}

function inserir_inicio(){
    let cidade = document.getElementById('cidade').value
    nome_cidade.unshift(cidade)
    res.innerHTML = 'As cidades inseridas são: '+nome_cidade    
}

function excluir_inicio(){
    let cidade = document.getElementById('cidade').value
    nome_cidade.shift()
    res.innerHTML = 'As cidades inseridas são: '+nome_cidade    
}

function ordenar(){
    nome_cidade.sort()
    res.innerHTML = 'As cidades em ordem são: '+nome_cidade    
}

function reverter(){
    nome_cidade.reverse()
    res.innerHTML = 'As cidades em ordem reversa são: '+nome_cidade    
}