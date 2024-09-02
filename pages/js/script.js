window.addEventListener('scroll', function() {
    const systems = document.querySelectorAll('.system');
    const windowHeight = window.innerHeight;
    
    systems.forEach(system => {
        const systemTop = system.getBoundingClientRect().top;
        
        if (systemTop < windowHeight - 50) {
            system.classList.add('appear');
        }
    });
});

window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.why');
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top + scrollTop;
        if (scrollTop + windowHeight > elementTop) {
            element.classList.add('appear');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const mints = document.querySelectorAll(".mint");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("scroll-in");
                }
            });
        },
        {
            threshold: 0.2,
        }
    );

    mints.forEach((mint) => {
        observer.observe(mint);
    });
});

document.getElementById('toggle-logos').addEventListener('click', function () {
    var extraLogos = document.getElementById('extra-logos');
    var isHidden = extraLogos.classList.contains('d-none');

    if (isHidden) {
        extraLogos.classList.remove('d-none');
        this.textContent = 'Show Less';
    } else {
        extraLogos.classList.add('d-none');
        this.textContent = 'Show More';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let collabLogos = document.querySelectorAll('.collab-logo');

    function onScroll() {
        let scrollPosition = window.pageYOffset + window.innerHeight;
        
        collabLogos.forEach(function(logo) {
            let logoTop = logo.getBoundingClientRect().top + window.pageYOffset;
            
            if (scrollPosition > logoTop) {
                logo.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Call once to show elements already in view
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollElements = document.querySelectorAll(".scroll-animation");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <= 
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });
});

