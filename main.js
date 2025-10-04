// Toggle mobile nav
document.addEventListener('DOMContentLoaded', ()=> {
  const nav = document.getElementById('primaryNav');
  const btn = document.getElementById('navToggle');
  btn && btn.addEventListener('click', ()=> nav.classList.toggle('open'));

  // Footer years
  const y = new Date().getFullYear();
  document.getElementById('year')?.textContent = y;
  document.getElementById('year2')?.textContent = y;
  document.getElementById('year3')?.textContent = y;

  // Simple reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries)=> {
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('visible');
    });
  }, {threshold: .15});
  reveals.forEach(r=>obs.observe(r));

  // Contact form validation (client-side)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      const status = document.getElementById('status');

      if(!name.value || name.value.length < 2){
        status.textContent = 'Please enter your name (2+ characters).';
        name.focus(); return;
      }
      if(!email.value || !/^\S+@\S+\.\S+$/.test(email.value)){
        status.textContent = 'Please enter a valid email address.';
        email.focus(); return;
      }
      if(!message.value || message.value.length < 10){
        status.textContent = 'Message must be at least 10 characters.';
        message.focus(); return;
      }

      // For a static site: simulate success
      status.textContent = 'Sending…';
      setTimeout(()=> {
        status.textContent = 'Thanks! Your message was sent (simulated).';
        form.reset();
      }, 700);
    });
  }
});
