document.addEventListener('DOMContentLoaded', function() {  
    const formInscricao = document.getElementById('formInscricao');
    if (formInscricao) { 
        formInscricao.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const altura = document.getElementById('altura').value;
            const peso = document.getElementById('peso').value;
            const cpf = document.getElementById('cpf').value;
            const posicao = document.getElementById('posicao').value;

            const dados = { nome, altura, peso, cpf, posicao };
            
            let inscricoes = JSON.parse(localStorage.getItem('inscricao')) || [];
            inscricoes.push(dados);
            localStorage.setItem('inscricao', JSON.stringify(inscricoes));
            
            formInscricao.reset(); 
        });
    }


    const formLogin = document.getElementById('formLogin');
    if (formLogin) { 
        formLogin.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const usuario = document.getElementById('usuario').value;
            const senha = document.getElementById('senha').value;

            if (usuario === 'coordenador' && senha === '1234') {
                window.location.href = 'admin.html';
            } else {
                alert('Usuário ou senha incorretos!');
            }
        });
    }
});


