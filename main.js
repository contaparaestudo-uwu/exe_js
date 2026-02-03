function valide(event){

    event.preventDefault(); //faz com que a página não f5

    var n1 = document.querySelector('input#n1')
    var n2 = document.querySelector('input#n2')
    var nResult = document.querySelector('div#result')

    var num1 = Number(n1.value)
    var num2 = Number(n2.value)

    if (num2 > num1){ //usar vars convert em numeros e não string
        nResult.innerHTML = `<p>O valor <strong>B</strong> (${num2}) é maior do que o valor A (${num1}).</p>`
    }else{
        nResult.innerHTML = `<p>O valor <strong>A</strong> (${num1}) é maior do que o valor B (${num2}).</p>`
    }

    event.target.reset(); //reseta todos os campos input ao exe evento
    n1.focus(); //campo n1 ativo p nova verificação
}
