
        document.getElementById('mobileMenuButton').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.toggle('hidden');
        });

        const darkModeToggle = document.getElementById('darkModeToggle');
        const htmlElement = document.documentElement;
 
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
            darkModeToggle.innerHTML = '<i class="fas fa-sun text-yellow-300"></i>';
        } else {
            htmlElement.classList.remove('dark');
            darkModeToggle.innerHTML = '<i class="fas fa-moon text-gray-700"></i>';
        }
        
        darkModeToggle.addEventListener('click', function() {
            htmlElement.classList.toggle('dark');
            
            if (htmlElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
                darkModeToggle.innerHTML = '<i class="fas fa-sun text-yellow-300"></i>';
            } else {
                localStorage.theme = 'light';
                darkModeToggle.innerHTML = '<i class="fas fa-moon text-gray-700"></i>';
            }
        });

        const backToTopButton = document.getElementById('backToTop');
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0');
            } else {
                backToTopButton.classList.add('opacity-0');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });


        const contactForm = document.querySelector('form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                if (name && email && subject && message) {
                    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
                    contactForm.reset();
                } else {
                    alert('Por favor, completa todos los campos del formulario.');
                }
            });
        }

        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {

        const imageModal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const closeModal = document.getElementById('closeModal');

        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const imgSrc = this.querySelector('img').src;
                const imgAlt = this.querySelector('img').alt;
                modalImage.src = imgSrc;
                modalImage.alt = imgAlt;
                imageModal.classList.remove('hidden');
            });
        });

        closeModal.addEventListener('click', function() {
            imageModal.classList.add('hidden');
        });

        imageModal.addEventListener('click', function(e) {
            if (e.target === imageModal) {
                imageModal.classList.add('hidden');
            }
        });

            });
        });




