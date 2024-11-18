document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Obrigado pelo contato! Responderemos em breve.');
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    const totalItems = items.length;

    function updateCarousel() {
        // Remove a classe active de todos os items
        items.forEach(item => item.classList.remove('active'));
        // Adiciona a classe active ao item atual
        items[currentIndex].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    // Adiciona eventos aos botões
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Rotação automática a cada 5 segundos
    setInterval(nextSlide, 5000);

    // Pega todos os botões dropdown
    const dropbtns = document.querySelectorAll('.dropbtn');
    
    // Adiciona evento de clique para cada botão
    dropbtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Fecha todos os outros dropdowns
            const allDropdowns = document.querySelectorAll('.dropdown-content');
            allDropdowns.forEach(drop => {
                if (drop !== this.nextElementSibling) {
                    drop.classList.remove('show');
                }
            });

            // Toggle do dropdown atual
            const dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle('show');
            
            // Previne propagação do evento
            e.stopPropagation();
        });
    });

    // Fecha o dropdown quando clicar fora
    window.addEventListener('click', function(e) {
        if (!e.target.matches('.dropbtn')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(dropdown => {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    });

    // Adicione classes scroll-reveal aos elementos que deseja animar
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealOnScroll = function() {
        scrollRevealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.85) {
                element.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Primeira verificação
  });