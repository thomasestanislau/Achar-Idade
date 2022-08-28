
function verificar(){

var data = new Date()
var anoAtual = data.getFullYear()
var anoUser = document.getElementById('anoUser')

var resposta = document.getElementById("resposta")

if(Number(anoUser.value) == 0 || Number(anoUser.value) > anoAtual || anoUser.value.length == 0){
    alert("[ERRO] Digite os dados novamente")
}else if(anoUser.value.length <= 3){
    alert("[ERRO] Insira o ano com 4 números")
}else{
    var idade = anoAtual - Number(anoUser.value)
    var sexo = document.getElementsByName("radsex")
    if(sexo[0].checked){
        var genero = "homem"
    }else{
        var genero = "mulher"
    }

    resposta.innerHTML = `Detectamos um ${genero} com ${idade} anos`
}


}