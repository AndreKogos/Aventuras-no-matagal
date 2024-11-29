const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})

Era uma vez um homem no interior de São Paulo chamado Carlinhos, Carlinhos havia herdado um sitio de seu falecido pai, então carlinhos decidiu ir explorar o sitio em busca de aventuras