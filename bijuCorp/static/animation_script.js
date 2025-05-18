// Remove all the previous JavaScript code and replace with this
document.addEventListener('DOMContentLoaded', () => {
   // Sidebar functionality
   const sidebar = document.querySelector('.sidebar');
   const mainContent = document.querySelector('.main-content');
   const toggleBtn = document.querySelector('.toggle-btn');
   const toggleIcon = toggleBtn.querySelector('i');


   toggleBtn.addEventListener('click', () => {
       sidebar.classList.toggle('collapsed');
       mainContent.classList.toggle('expanded');
      
       if (sidebar.classList.contains('collapsed')) {
           toggleIcon.classList.remove('fa-chevron-left');
           toggleIcon.classList.add('fa-chevron-right');
       } else {
           toggleIcon.classList.remove('fa-chevron-right');
           toggleIcon.classList.add('fa-chevron-left');
       }
   });


   // Signal Animation Class
   class SignalAnimation {
       constructor(containerId) {
           this.container = document.getElementById(containerId);
           this.waveContainer = document.getElementById('waveContainer');
           this.particleContainer = document.getElementById('particleContainer');
           this.init();
       }


       init() {
           this.createWaveLines();
           this.createParticles();
       }


       createWaveLines() {
           for (let i = 0; i < 50; i++) {
               const line = document.createElement('div');
               line.className = 'wave-line';
              
               const wave = document.createElement('div');
               wave.className = 'wave';
               wave.style.animationDelay = `${Math.random() * 2}s`;
              
               line.appendChild(wave);
               this.waveContainer.appendChild(line);
           }
       }


       createParticles() {
           for (let i = 0; i < 30; i++) {
               this.createParticle();
           }
       }


       createParticle() {
           const particle = document.createElement('div');
           particle.className = 'signal-particle';
           this.particleContainer.appendChild(particle);


           const x = Math.random() * 100;
           const y = Math.random() * 100;
           particle.style.left = `${x}%`;
           particle.style.top = `${y}%`;


           this.animateParticle(particle);
       }


       animateParticle(particle) {
           const duration = 2000 + Math.random() * 2000;
           const startX = parseFloat(particle.style.left);
           const startY = parseFloat(particle.style.top);
           const targetX = startX + (Math.random() * 20 - 10);
           const targetY = startY + (Math.random() * 20 - 10);


           particle.animate([
               {
                   left: `${startX}%`,
                   top: `${startY}%`,
                   opacity: 0
               },
               {
                   opacity: 0.8,
                   offset: 0.2
               },
               {
                   opacity: 0.8,
                   offset: 0.8
               },
               {
                   left: `${targetX}%`,
                   top: `${targetY}%`,
                   opacity: 0
               }
           ], {
               duration: duration,
               easing: 'ease-in-out',
               iterations: Infinity
           });
       }
   }


   // Initialize signal animation
   new SignalAnimation('animationContainer');
});


       setInterval(changeAnimation, 5000);