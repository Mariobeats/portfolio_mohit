document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       LOADING SCREEN TERMINAL EMULATION
       ========================================================================== */
    const loader = document.getElementById('loader');
    const loaderText = document.getElementById('loader-text');
    
    const loadingSteps = [
        "loading modules...",
        "checking cyber-security parameters...",
        "loading flutter frameworks...",
        "initializing daily-bhakti app assets...",
        "assembling rescue-mesh networks...",
        "connecting skillswap databases...",
        "portfolio loaded successfully. launching..."
    ];
    
    let stepIndex = 0;
    
    function runLoaderText() {
        if (stepIndex < loadingSteps.length) {
            loaderText.textContent = loadingSteps[stepIndex];
            stepIndex++;
            setTimeout(runLoaderText, 250);
        } else {
            // Once text sequence completes, check window load to fade out loader
            setTimeout(() => {
                loader.classList.add('fade-out');
            }, 300);
        }
    }
    
    // Start terminal text sequence
    runLoaderText();

    // Safety fallback in case typing takes too long, remove loader after window load
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('fade-out');
        }, 2200);
    });

    /* ==========================================================================
       MOBILE NAVIGATION TOGGLE
       ========================================================================== */
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.contains('open');
            navMenu.classList.toggle('open');
            mobileToggle.classList.toggle('open');
            mobileToggle.setAttribute('aria-expanded', !isOpen);
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                mobileToggle.classList.remove('open');
                mobileToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* ==========================================================================
       CANVAS PARTICLE BACKDROP
       ========================================================================== */
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let numberOfParticles = 80;

    // Adjust particle count depending on viewport
    function adjustParticleCount() {
        if (window.innerWidth < 768) {
            numberOfParticles = 30;
        } else if (window.innerWidth < 1200) {
            numberOfParticles = 60;
        } else {
            numberOfParticles = 90;
        }
    }

    // Set canvas dimensions
    function initCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        adjustParticleCount();
    }

    initCanvasSize();
    
    // Resize listener (debounced)
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            initCanvasSize();
            createParticles();
        }, 150);
    });

    // Particle Object constructor
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            // Slow motion particles for Apple/Linear feel
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 1.5 + 0.5;
            this.color = 'rgba(79, 172, 254, 0.35)'; // Soft blue glow
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
            if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
        }
    }

    function createParticles() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    createParticles();

    // Check proximity between particles to draw thin connection lines
    function connectParticles() {
        const maxDistance = 140;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a + 1; b < particlesArray.length; b++) {
                const dx = particlesArray[a].x - particlesArray[b].x;
                const dy = particlesArray[a].y - particlesArray[b].y;
                const distance = Math.hypot(dx, dy);

                if (distance < maxDistance) {
                    // Line opacity depends on proximity
                    const opacity = (1 - (distance / maxDistance)) * 0.12;
                    ctx.strokeStyle = `rgba(0, 242, 254, ${opacity})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Animation Loop
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].draw();
            particlesArray[i].update();
        }
        connectParticles();
        requestAnimationFrame(animateParticles);
    }

    animateParticles();

    /* ==========================================================================
       HERO TYPING EFFECT
       ========================================================================== */
    const typewriter = document.getElementById('typewriter');
    const roles = [
        "Full Stack Developer",
        "Flutter Developer",
        "Cyber Security Enthusiast"
    ];
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typingSpeed = 80;

    function handleTypewriter() {
        const currentRole = roles[roleIdx];
        
        if (isDeleting) {
            typewriter.textContent = currentRole.substring(0, charIdx - 1);
            charIdx--;
            typingSpeed = 40; // Erase faster
        } else {
            typewriter.textContent = currentRole.substring(0, charIdx + 1);
            charIdx++;
            typingSpeed = 90; // Standard typing speed
        }

        if (!isDeleting && charIdx === currentRole.length) {
            isDeleting = true;
            typingSpeed = 1600; // Pause at end of word
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            typingSpeed = 400; // Pause before starting new word
        }

        setTimeout(handleTypewriter, typingSpeed);
    }

    if (typewriter) {
        setTimeout(handleTypewriter, 1500);
    }

    /* ==========================================================================
       LINEAR-STYLE CARD CURSOR GLOW EFFECT
       ========================================================================== */
    const glassPanels = document.querySelectorAll('.glass-panel');

    glassPanels.forEach(panel => {
        panel.addEventListener('mousemove', (e) => {
            const rect = panel.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            panel.style.setProperty('--mouse-x', `${x}px`);
            panel.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    /* ==========================================================================
       SCROLL REVEAL FALLBACK & SHRINKING HEADER FALLBACK
       ========================================================================== */
    const hasScrollTimeline = CSS.supports('(animation-timeline: view()) and (animation-range: entry)');
    const header = document.getElementById('main-header');

    // Scroll listener fallback for navbar shrink (Safari/Firefox)
    if (!CSS.supports('(animation-timeline: scroll()) and (animation-range: 0% 100%)')) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('shrunk');
            } else {
                header.classList.remove('shrunk');
            }
        });
    }

    // Scroll reveal fallback using IntersectionObserver (Safari/Firefox)
    if (!hasScrollTimeline) {
        const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Stop observing once animated in
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => {
            el.classList.add('io-reveal');
            
            // Map corresponding directions to IO classes
            if (el.classList.contains('reveal-up')) el.classList.add('io-reveal-up');
            if (el.classList.contains('reveal-left')) el.classList.add('io-reveal-left');
            if (el.classList.contains('reveal-right')) el.classList.add('io-reveal-right');
            
            revealObserver.observe(el);
        });
    }

    /* ==========================================================================
       SKILLS INFINITE LOOP TICKER CLONER
       ========================================================================== */
    const tickerTrack = document.getElementById('skills-ticker-track');
    if (tickerTrack) {
        const originalItems = Array.from(tickerTrack.children);
        originalItems.forEach(item => {
            const clone = item.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            tickerTrack.appendChild(clone);
        });
    }

    /* ==========================================================================
       GITHUB CONTRIBUTION GRAPH BUILDER
       ========================================================================== */
    const contribGraph = document.getElementById('contribution-graph');
    
    if (contribGraph) {
        // Build 53 columns (weeks) of 7 cells (days) = 371 cells
        const totalWeeks = 53;
        const totalDays = 7;
        const totalCells = totalWeeks * totalDays;
        
        // Generate contribution layout weights (more zeros, some clusters)
        const fragment = document.createDocumentFragment();
        
        for (let i = 0; i < totalCells; i++) {
            const cell = document.createElement('div');
            cell.className = 'contrib-cell';
            
            // Generate pseudo-random level matching real workflows
            let level = 0;
            const rand = Math.random();
            
            if (rand > 0.88) {
                level = 4; // High contributions
            } else if (rand > 0.78) {
                level = 3;
            } else if (rand > 0.60) {
                level = 2;
            } else if (rand > 0.40) {
                level = 1;
            } else {
                level = 0; // No activity day
            }
            
            cell.classList.add(`level-${level}`);
            
            // Simple tooltip on hover
            const date = new Date();
            date.setDate(date.getDate() - (totalCells - i));
            const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            
            let commitMsg = "No contributions";
            if (level > 0) commitMsg = `${level * 2 + Math.floor(Math.random() * 3)} contributions`;
            
            cell.setAttribute('title', `${commitMsg} on ${formattedDate}`);
            fragment.appendChild(cell);
        }
        
        contribGraph.appendChild(fragment);
    }

    /* ==========================================================================
       CONTACT FORM SUBMITTER
       ========================================================================== */
    const contactForm = document.getElementById('portfolio-contact-form');
    const formStatus = document.getElementById('form-status-message');
    const formSubmitBtn = document.getElementById('form-submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const subject = document.getElementById('form-subject').value;
            const message = document.getElementById('form-message').value;

            // Simple client verification
            if (!name || !email || !subject || !message) {
                formStatus.className = "form-status error";
                formStatus.textContent = "Please fill in all the required fields.";
                return;
            }

            // Emulate backend sending sequence
            formSubmitBtn.disabled = true;
            formSubmitBtn.querySelector('span').textContent = "Sending Message...";
            formStatus.className = "form-status";
            formStatus.textContent = "";

            setTimeout(() => {
                formStatus.className = "form-status success";
                formStatus.textContent = "Thank you! Your message was delivered successfully.";
                contactForm.reset();
                formSubmitBtn.disabled = false;
                formSubmitBtn.querySelector('span').textContent = "Send Message";
                
                // Clear state message after timeout
                setTimeout(() => {
                    formStatus.textContent = "";
                }, 5000);
            }, 1800);
        });
    }

    // Set current copyright year
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});
