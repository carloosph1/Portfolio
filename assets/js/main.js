/*==================== MENU MOSTRAR E OCULTO ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU MOSTRAR =====*/
/*Validar se a constante existe */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}
/*===== MENU OCULTO =====*/
/* Validar se a constante existe */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')

};

navLink.forEach((n) => n.addEventListener('click', linkAction));



/*==================== ALTERAR CABEÇALHO DE FUNDO ====================*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 20 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
};

window.addEventListener('scroll', scrollHeader);


/*==================== active scroll sections link  ====================*/

const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector(
                '.nav-menu a[href*=' + sectionId + ']');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);

/*==================== ROLL ON ANIMATION ====================*/

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.text-gradient').forEach((span) => {
    gsap.to(span, {
        backgroundSize: '100% 100%',
        ease: 'none',
        scrollTrigger: {
            trigger: span,
            start: 'top bottom',
            end: 'top center',
            scrub: true,
        },
    });

});

/*==================== DARK LIGHT TEMA ====================*/
window.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');

    function applyTheme(theme) {
        if (theme === 'light') {
            document.body.classList.remove('light-theme');
            toggleBtn.classList.add('ri-sun-line');
            toggleBtn.classList.remove('ri-moon-line');
           

        } else {
             document.body.classList.add('light-theme');
            toggleBtn.classList.remove('ri-sun-line');
            toggleBtn.classList.add('ri-moon-line');
            
        }

        localStorage.setItem('theme', theme);
    }
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    toggleBtn.addEventListener('click', () => {
        const isLight = document.body.classList.contains('light-theme');
        applyTheme(isLight ? 'light' : 'dark'); 
    });
});



/*==================== PORTFÓLIO DE FILTROS MIXITUP ====================*/
var mixer = mixitup('.work-container', {
    selectors: {
        target: '.mix'
    },
    animation: {
        duration: 300
    }
});


/* Active work */
const linkWork = document.querySelectorAll('.work-item');
function activeWork() {
    linkWork.forEach((a) => {
        a.classList.remove('active-work');
    });
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));


/*==================== EMAIL JS ====================*/
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactMessage = document.getElementById('contact-message'),
    message = document.getElementById('message');

    
const sendEmail = (e) => {
    e.preventDefault();

    if (contactName.value === '' ||
        contactEmail.value === '' ||
        contactMessage.value === ''
    ) {
        message.textContent = 'Preencha todos os dados';
        setTimeout(() => {
            message.textContent = ''
        }, 5000);
    } else {
        emailjs.sendForm('service_0exb6ns', 'template_eafvdd7', '#contact-form', 'aK6Achzxm-Ef-U5BM').then(
            () => {
                message.textContent = 'mensagem enviada ✓';
            },
            (error) => {
                alert('OOPS! ALGO DEU ERRADO...', error);
            }
        );
        contactName.value = '';
        contactEmail.value = '';
        contactMessage.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3500,
    delay: 400,
});

sr.reveal(`.home-data`);
sr.reveal(`.home-img-wrapper`, { delay: 500 });
sr.reveal(`.home-social`, { delay: 600 });
sr.reveal(`.services-card, .mix`, { interval: 100 });
sr.reveal(`.skill-developer, .resume-left, .contact-grup`, { origin: 'left' });
sr.reveal(`.resume-title, .resume-descricao, .resume-right, .contact-form`, { origin: 'right' });