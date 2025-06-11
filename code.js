// --- JAVASCRIPT ---

document.addEventListener('DOMContentLoaded', () => {

    // --- Utility UI ---
    const scrollProgressBar = document.getElementById('scroll-progress-bar');
    const backToTopButton = document.querySelector('.back-to-top');

    const updateScrollProgress = () => {
        if (!scrollProgressBar) return;
        const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPosition = document.documentElement.scrollTop;
        const progress = (scrollPosition / scrollTotal) * 100;
        scrollProgressBar.style.width = `${progress}%`;

        if (backToTopButton) {
            if (scrollPosition > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        }
    };
    window.addEventListener('scroll', updateScrollProgress);
    
    // --- GSAP Animations ---
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        // Hero text animation
        gsap.from(".reveal-text", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });
        
        // Animated counters
        document.querySelectorAll('.count').forEach(counter => {
            const target = +counter.dataset.target;
            gsap.to(counter, {
                scrollTrigger: {
                    trigger: counter,
                    start: "top 85%",
                },
                innerText: target,
                duration: 2,
                ease: "power2.out",
                snap: { innerText: 1 },
                onUpdate: function() {
                    if (target.toString().includes('.')) {
                        counter.textContent = parseFloat(counter.textContent).toFixed(1);
                    } else {
                        counter.textContent = Math.round(counter.textContent);
                    }
                }
            });
        });

        // Staggered reveals for sections
        const sections = ['.how-it-works-grid .step-card', '.why-us-grid .why-card', '.pricing-grid .pricing-card', '.faq-accordion .faq-item'];
        sections.forEach(selector => {
            gsap.from(selector, {
                scrollTrigger: {
                    trigger: selector,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            });
        });
        
        // Character reveal for headlines
        document.querySelectorAll('.reveal-text-chars').forEach(el => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%"
                },
                text: {
                    value: el.textContent,
                    newClass: "revealed-char",
                    delimiter: "",
                },
                duration: el.textContent.length * 0.05,
                ease: "none",
            });
        });
    }
    
    // --- Interactive Logic ---
    // Pricing Toggle
    const toggle = document.getElementById('pricing-toggle-checkbox');
    const pricingGrid = document.querySelector('.pricing-grid');
    if (toggle && pricingGrid) {
        const updatePricing = () => {
            if (toggle.checked) {
                pricingGrid.classList.add('yearly');
            } else {
                pricingGrid.classList.remove('yearly');
            }
        };
        toggle.addEventListener('change', updatePricing);
        updatePricing(); // Set initial state
    }

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
        });
    });

    // --- 3D Globe (only on homepage) ---
    const globeCanvas = document.getElementById('hero-globe');
    if (globeCanvas && typeof THREE !== 'undefined') {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: globeCanvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(1.5, 64, 64),
            new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load('https://raw.githubusercontent.com/jeremydw/jeremydw.github.io/master/world_map_cold.png'),
                transparent: true,
                opacity: 0.6,
                blending: THREE.AdditiveBlending
            })
        );
        scene.add(sphere);

        const stars = new THREE.Group();
        for (let i = 0; i < 1000; i++) {
            const geometry = new THREE.SphereGeometry(0.005, 24, 24);
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(geometry, material);
            star.position.x = (Math.random() - 0.5) * 10;
            star.position.y = (Math.random() - 0.5) * 10;
            star.position.z = (Math.random() - 0.5) * 10;
            stars.add(star);
        }
        scene.add(stars);

        camera.position.z = 3;

        const animate = () => {
            requestAnimationFrame(animate);
            sphere.rotation.y += 0.0005;
            renderer.render(scene, camera);
        };
        animate();
        
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    // --- Trial Page Specific Logic ---
    if (document.getElementById('trial-section')) {
        window.formWizard = function() {
            return {
                step: 1,
                formData: {
                    fullName: '',
                    email: '',
                    device: 'Select your device...',
                    messengerNumber: '',
                    verificationCode: ''
                },
                emailStatus: 'idle',
                verificationSent: false,
                get progress() { return ((this.step - 1) / 2) * 100; },
                isStep1Valid() { return this.formData.fullName.trim() !== '' && this.emailStatus === 'valid'; },
                isStep2Valid() { return this.formData.device !== 'Select your device...'; },
                isStep3Valid() { return this.formData.verificationCode.length === 4; },
                handleNext() {
                    if (this.step === 1 && this.isStep1Valid()) this.step++;
                    else if (this.step === 2 && this.isStep2Valid()) this.step++;
                },
                validateEmail() {
                    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.formData.email)) {
                        this.emailStatus = 'idle';
                        return;
                    }
                    this.emailStatus = 'validating';
                    setTimeout(() => {
                        if (this.formData.email.includes('mailinator.com') || this.formData.email.includes('temp-mail.org')) {
                            this.emailStatus = 'invalid';
                        } else {
                            this.emailStatus = 'valid';
                        }
                    }, 1000);
                },
                sendVerificationCode() {
                    if (this.formData.messengerNumber.trim() !== '') {
                        this.verificationSent = true;
                        console.log(`Simulating sending code to ${this.formData.messengerNumber}`);
                    }
                },
                submitForm() {
                    if (this.isStep3Valid()) {
                        const webhookURL = 'YOUR_MAKE.COM_WEBHOOK_URL_HERE';
                        console.log('Submitting to webhook:', webhookURL);
                        console.log('Form data:', this.formData);
                        // fetch(webhookURL, { ... });
                        this.step = 4;
                    }
                }
            };
        };
    }
});