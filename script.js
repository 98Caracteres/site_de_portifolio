document.addEventListener('DOMContentLoaded', function () {
    // Animações ao rolar para a visão
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    if (animateElements.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5, // Executa quando 50% do elemento estiver visível
        });

        animateElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Botão de voltar ao topo
    const scrollToTopButton = document.getElementById('scrollToTop');

    if (scrollToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopButton.classList.add('visible');
                scrollToTopButton.classList.remove('hidden');
            } else {
                scrollToTopButton.classList.add('hidden');
                scrollToTopButton.classList.remove('visible');
            }
        });

        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Carregamento preguiçoso de imagens
    const lazyImages = document.querySelectorAll('img.lazy-load');

    if (lazyImages.length > 0) {
        const lazyLoad = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy-load');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => lazyLoad.observe(img));
    }
});
