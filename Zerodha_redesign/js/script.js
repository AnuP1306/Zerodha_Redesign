const ctx = document.getElementById('myChart');

// Create an animated line chart
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Market Trends',
      data: [10, 15, 14, 20, 18],
      borderColor: '#387ed1',
      borderWidth: 2,
      fill: false,
      tension: 0.4,
      pointBackgroundColor: '#387ed1',
      pointRadius: 4,
    }]
  },
  options: {
    responsive: true,
    animation: {
      duration: 2000,        // 2 seconds
      easing: 'easeInOutQuart', // Smooth animation
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      x: {
        grid: {
          display: false,
        }
      },
      y: {
        grid: {
          color: '#f0f0f0'
        },
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: '#387ed1',
        titleColor: '#fff',
        bodyColor: '#fff',
        cornerRadius: 6
      }
    }
  }
});

let chart = Chart.getChart(ctx);
setInterval(() => {
  chart.data.datasets[0].data.shift();
  chart.data.datasets[0].data.push(Math.floor(Math.random() * 20) + 5);
  chart.update();
}, 2000);

gsap.registerPlugin(ScrollTrigger);

gsap.to(".light-photo", {
  clipPath: "inset(0% 0% 0% 0%)", 
  ease: "none",
  scrollTrigger: {
    trigger: ".about-gallery",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    markers: false
  }
});
const wrapper = document.querySelector('.press-logos-wrapper');
const container = document.querySelector('.press-logos');

let speed = 1; 
let offset = 0;

function animate() {
  offset -= speed;

  // reset when first logo fully leaves
  const firstLogo = container.children[0];
  const firstWidth = firstLogo.offsetWidth + parseInt(getComputedStyle(container).gap);
  if (Math.abs(offset) >= firstWidth) {
    container.appendChild(firstLogo); // move first logo to end
    offset += firstWidth;
  }

  container.style.transform = `translateX(${offset}px)`;
  requestAnimationFrame(animate);
}

animate();

// Slow down on hover
wrapper.addEventListener('mouseenter', () => speed = 0.3);
wrapper.addEventListener('mouseleave', () => speed = 1);

//sign up code

document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const phoneInput = document.getElementById("mobileNumber");
  const number = phoneInput.value.trim();

  if (!/^[6-9]\d{9}$/.test(number)) {
    alert("Please enter a valid 10-digit mobile number!");
    return;
  }

  // Simulate OTP sending
  phoneInput.value = "";
  
  // Create a toast message
  const toast = document.createElement("div");
  toast.textContent = "OTP sent successfully!";
  toast.style.position = "fixed";
  toast.style.bottom = "30px";
  toast.style.right = "30px";
  toast.style.background = "#2563eb";
  toast.style.color = "#fff";
  toast.style.padding = "12px 20px";
  toast.style.borderRadius = "8px";
  toast.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
  toast.style.zIndex = "9999";
  toast.style.fontWeight = "500";
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.faq-toggle-icon');

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    // Close all
    faqItems.forEach(el => {
      el.classList.remove('active');
      el.querySelector('.faq-answer').style.maxHeight = null;
    });

    // Open clicked one if it wasn't already open
    if (!isOpen) {
      item.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});


if (window.AOS) AOS.init({ duration: 700, once: true });

    (function () {
      // Tabs scoped to pricing-section
      const section = document.querySelector('.pricing-section');
      if (!section) return;

      const tabButtons = section.querySelectorAll('.pricing-tab-btn');
      const panels = section.querySelectorAll('.pricing-tabpanel');

      tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const target = btn.dataset.tab;

          tabButtons.forEach(b => {
            b.classList.toggle('pricing-tab-btn--active', b === btn);
            b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
          });

          panels.forEach(p => {
            const show = p.id === target;
            p.classList.toggle('pricing-tabpanel--active', show);
            p.hidden = !show;
          });

          // small nice focus management
          const activePanel = section.querySelector('.pricing-tabpanel--active');
          if (activePanel) activePanel.focus({ preventScroll: true });
        });
      });

     
    })();

    document.addEventListener('DOMContentLoaded', function () {
  const el = document.querySelector('.about-typewriter__text');
  if (!el) return;

  const sentence = "We pioneered the discount broking model in India. Now, we are breaking ground with our technology.";
  const typingSpeed = 40;    
  const pauseAfter = 2400;   
  const restartDelay = 200;  

  let idx = 0;

  function startTyping() {
    // type forward without deleting
    if (idx <= sentence.length) {
      el.textContent = sentence.slice(0, idx);
      idx++;
      setTimeout(startTyping, typingSpeed);
    } else {
      // finished typing: wait then clear and restart
      setTimeout(() => {
        el.textContent = ''; 
        idx = 0;
        setTimeout(startTyping, restartDelay);
      }, pauseAfter);
    }
  }

  // kick off
  startTyping();
});





