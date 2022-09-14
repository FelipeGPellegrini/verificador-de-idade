function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("itxtano")
    var resultado = document.getElementById("resultado")
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("[ERROR] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "Homem"

            if(idade >= 0 && idade < 10){
                img.setAttribute("src", "imgs/crianca-homem.png")
            } else if (idade < 21){
                img.setAttribute("src","imgs/jovem-homem.png" )
            } else if (idade < 50){
                img.setAttribute("src","imgs/adulto-homem.png" )
            } else {
                img.setAttribute("src","imgs/idoso-homem.png" )
            }
            
        } else {
            genero = "Mulher"

            if(idade >= 0 && idade < 10){
                img.setAttribute("src","imgs/crianca-mulher.png" )
            } else if (idade < 21){
                img.setAttribute("src","imgs/jovem-mulher.png" )
            } else if (idade < 50){
                img.setAttribute("src","imgs/adulto-mulher.png" )
            } else {
                img.setAttribute("src","imgs/idoso-mulher.png" )
            }
        }

        resultado.style.textAlign = "center"
        resultado.innerHTML = `Detectamos ${genero} que no final do ano terá ${idade} anos.`
        resultado.appendChild(img)
    }
}