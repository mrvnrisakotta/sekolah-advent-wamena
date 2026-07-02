// Toggle Drawer for Mobile Menu
function toggleDrawer() {
  const drawer = document.getElementById('drawer');
  const drawerAside = document.getElementById('drawer-aside');
  if (drawer.classList.contains('hidden')) {
    drawer.classList.remove('hidden');
    setTimeout(() => {
      drawerAside.classList.remove('-translate-x-full');
    }, 10);
  } else {
    drawerAside.classList.add('-translate-x-full');
    setTimeout(() => {
      drawer.classList.add('hidden');
    }, 300);
  }
}

// Typing effect
const phrases = ["Software Engineer", "UI/UX Designer", "Fullstack Developer"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingText = document.getElementById('typing-text');

function type() {
  if (!typingText) return;
  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentPhrase.length) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 500;
  }

  setTimeout(type, delay);
}

document.addEventListener('DOMContentLoaded', () => {
  if (typingText) {
    type();
  }
});

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => {
      b.classList.remove('active-filter', 'bg-primary', 'text-white');
      b.classList.add('bg-white', 'text-on-surface-variant', 'border-surface-container-high');
    });
    
    btn.classList.add('active-filter', 'bg-primary', 'text-white');
    btn.classList.remove('bg-white', 'text-on-surface-variant', 'border-surface-container-high');
    
    const filterValue = btn.getAttribute('data-filter');
    
    projectItems.forEach(item => {
      const category = item.getAttribute('data-category');
      if (filterValue === 'all' || category === filterValue) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Contact Form Handling
function handleFormSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  if (name && email && subject && message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    
    toastMsg.textContent = `Terima kasih ${name}, pesan Anda berhasil dikirim!`;
    
    toast.classList.remove('translate-y-16', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100');
    
    document.getElementById('portfolio-contact-form').reset();
    
    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-16', 'opacity-0', 'pointer-events-none');
    }, 4000);
  }
}

// Active Nav highlight on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 120) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active-link', 'text-primary');
    link.classList.add('text-on-surface-variant');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active-link', 'text-primary');
      link.classList.remove('text-on-surface-variant');
    }
  });
});