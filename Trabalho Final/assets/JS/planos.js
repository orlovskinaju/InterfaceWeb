document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

 
    const planToggle = document.getElementById('planToggle');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const annualPrices = document.querySelectorAll('.annual-price');

    planToggle.addEventListener('change', function () {
        if (this.checked) {
            monthlyPrices.forEach(price => price.style.display = 'none');
            annualPrices.forEach(price => price.style.display = 'block');
        } else {
            monthlyPrices.forEach(price => price.style.display = 'block');
            annualPrices.forEach(price => price.style.display = 'none');
        }
    });

   
    annualPrices.forEach(price => price.style.display = 'none');

 
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const isActive = question.classList.contains('active');

            faqQuestions.forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.style.maxHeight = null;
            });

            if (!isActive) {
                question.classList.add('active');
                const answer = question.nextElementSibling;
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    if (faqQuestions.length > 0) {
        faqQuestions[0].classList.add('active');
        faqQuestions[0].nextElementSibling.style.maxHeight =
            faqQuestions[0].nextElementSibling.scrollHeight + 'px';
    }

    
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.plan-card, .faq-item, table');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    document.querySelectorAll('.plan-card, .faq-item, table').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    const signupForm = document.querySelector('.signup-form');

    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const nomeCompleto = signupForm.querySelector('input[placeholder="Nome completo"]').value.trim();
            const nomeArtistico = signupForm.querySelector('input[placeholder="Nome artístico (opcional)"]').value.trim();
            const email = signupForm.querySelector('input[type="email"]').value.trim();
            const genero = signupForm.querySelector('select:nth-of-type(1)').value;
            const portfolio = signupForm.querySelector('input[type="url"]').value.trim();
            const senha = signupForm.querySelector('input[placeholder="Crie uma senha"]').value;
            const confirmarSenha = signupForm.querySelector('input[placeholder="Confirme a senha"]').value;
            const plano = signupForm.querySelector('select:nth-of-type(2)').value;
            const aceitouTermos = signupForm.querySelector('input[type="checkbox"]').checked;

            if (!aceitouTermos) {
                alert("Você deve aceitar os termos para continuar.");
                return;
            }

            if (senha !== confirmarSenha) {
                alert("As senhas não coincidem!");
                return;
            }

            const dados = {
                nomeCompleto,
                nomeArtistico,
                email,
                genero,
                portfolio,
                plano,
                senha
            };

            console.log("Dados do formulário:", dados);

            alert(
                `Cadastro realizado com sucesso!\n\nResumo:\nNome: ${nomeCompleto}\nArtista: ${nomeArtistico || '-'}\nEmail: ${email}\nGênero: ${genero}\nPortfólio: ${portfolio || '-'}\nPlano: ${plano}`
            );
        });
    }

    const themeToggle = document.getElementById('themeToggle');

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
        });
    }
});
