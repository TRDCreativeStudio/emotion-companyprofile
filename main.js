const logoBase64 = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAowAAAC/CAYAAAB0Qo38AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACjKADAAQAAAABAAAAvwAAAAD7MyjyAABAAElEQVR4Ae2dCXwcZfnH33eOzdEjmzTpkbZQbqFtjhYqoEL9C3KoHGpVBAQREVERuRQBKYqKgBxyeKEcile5FOUStCDIZdskbSg3Bdq0SZPspm2O3Tne/2+SJk3STbNz7szuM59PsrPvvM/7PM93dmaeeU/GaCMCRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQAQiRoBHzF7fzO3cc2GZ1i1NMSS9ghnmbkIyq5nJKznnRcwUxaMVc850LljKYGKrkPlGyTQ3MVntZDzdNmPfqha+fLk+Woa+EwEiQASIABEgAkQgigQKMmBsqV5YyU1jkWmI+ZzxAxkz5zHOpnIh4oJxydWJFMwKFFuYxN9DoPkyym1GmU9Xzy1fTUGkK7IkTASIABEgAkSACOSIQEEEjGLO4uKNPZ0fY4Ifxpl5JAK4/XPAexsTbAXj/FGmyP+s3rhyRQ5sIJVEgAgQASJABIgAEbBNIG8DRtQi7sY07QQQOQZ/H8LfBNt0/BVYjwD274KJp6rjMx/gbzyS8lcdlU4EiAARIAJEgAgQAWcE8ipgFEuXSq233v9Fk/FTGBOLnSHJgRRnnYxJfzeY/tPZbWuacmABqSQCRIAIEAEiQASIwJgE8iJgfLeyvlrl5iWorfs0PJ0+prfROLASTebXqFP1f0xtbt4WDZPJSiJABIgAESACRCCfCUQ6YNw0rWaeKdglaNr9OGoUJ+fViRLsNZOJX3ZNM2+Z29yczivfyBkiQASIABEgAkQgUgQiGTC2TJn/Pq5IFwtTfDFStJ0Zu16S+PXTWstv5oym6nGGkKSIABEgAkSACBABNwQiFTAmd5tf3tPHLsf8iF/DdDUxN45HTlawd5nEzq9ua7ovcraTwUSACBABIkAEiECkCUQiYBSLFysbXu78vCTY9aA9JdLEXRovOHvSFMrZszevfMNlUSROBIgAESACRIAIEIGsCIQ+YNxYWfth1Kz9WAjx/qw8KoBMOGma4PyWSZL040mbVm0uAJfJRSJABIgAESACRCCHBEIbMGLEM980tW6pEOwiDGgpySGjMKteB+O+UL256T9hNpJsIwJEgAgQASJABKJNIJQB48bp9QcIw7gLaLFsH23jEOjGkoY/md6++iqcTDFOXjpMBIgAESACRIAIEAHbBEIXMLZMrTsZy/ddj5rFqba9KWABnMh/M1k6Y8amhnUFjIFcJwJEgAgQASJABHwgIPlQpqMiBVsqbZxas5SZ5m8pWLSPEFWLHxam+e/WqfMOtS9NEkSACBABIkAEiAARGJtAKGoYOyr2npxWSn+HQPG4sU2lI9kQ4IxvEZL51erW1X/IJj/lIQJEgAgQASJABIaED/w9t60wAAAAElFTkErkJggg==`;

document.addEventListener("DOMContentLoaded", () => {
  // Detect active page based on pathname
  const path = window.location.pathname;
  let activeKey = "highlight";
  
  if (path.includes("page-journey.html")) {
    activeKey = "journey";
  } else if (path.includes("page-do.html")) {
    activeKey = "do";
  } else if (path.includes("page-see.html")) {
    activeKey = "see";
  } else if (path.includes("page-hear.html")) {
    activeKey = "hear";
  } else if (path.includes("page-collaborate.html")) {
    activeKey = "collaborate";
  }

  // Inject header navigation
  const nav = document.createElement("nav");
  nav.className = "nav";
  nav.innerHTML = `
    <a href="index.html" class="nav__logo">
      <img src="${logoBase64}" alt="E-Motion Entertainment">
    </a>
    <ul class="nav__links">
      <li><a href="index.html" class="${activeKey === "highlight" ? "active" : ""}">Highlight</a></li>
      <li><a href="page-journey.html" class="${activeKey === "journey" ? "active" : ""}">Journey</a></li>
      <li><a href="page-do.html" class="${activeKey === "do" ? "active" : ""}">Do</a></li>
      <li><a href="page-see.html" class="${activeKey === "see" ? "active" : ""}">See</a></li>
      <li><a href="page-hear.html" class="${activeKey === "hear" ? "active" : ""}">Hear</a></li>
      <li><a href="page-collaborate.html" class="${activeKey === "collaborate" ? "active" : ""}">Collaborate</a></li>
    </ul>
    <div class="nav__right">
      <button class="btn-pill" id="ctaBtn">Dengar Sekarang</button>
      <button class="nav__toggle" id="navToggle" aria-label="Buka menu" aria-expanded="false">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round"/></svg>
      </button>
    </div>
  `;

  // Inject mobile menu
  const mobileMenu = document.createElement("div");
  mobileMenu.className = "mobile-menu";
  mobileMenu.id = "mobileMenu";
  mobileMenu.innerHTML = `
    <a href="index.html" class="${activeKey === "highlight" ? "active" : ""}">Highlight</a>
    <a href="page-journey.html" class="${activeKey === "journey" ? "active" : ""}">Journey</a>
    <a href="page-do.html" class="${activeKey === "do" ? "active" : ""}">Do</a>
    <a href="page-see.html" class="${activeKey === "see" ? "active" : ""}">See</a>
    <a href="page-hear.html" class="${activeKey === "hear" ? "active" : ""}">Hear</a>
    <a href="page-collaborate.html" class="${activeKey === "collaborate" ? "active" : ""}">Collaborate</a>
    <button class="btn-pill">Dengar Sekarang</button>
  `;

  // Place header & mobile menu correctly: after promo banner if it exists, otherwise prepend
  const promo = document.querySelector(".promo");
  if (promo) {
    promo.after(nav);
    nav.after(mobileMenu);
  } else {
    document.body.prepend(mobileMenu);
    document.body.prepend(nav);
  }

  // Inject footer
  const activeLabel = activeKey === "highlight" ? "Highlight" : activeKey.charAt(0).toUpperCase() + activeKey.slice(1);
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div class="foot__grid">
      <div>
        <h4>Office Jakarta</h4>
        <p>Jl. Blora No.5, Menteng<br>Jakarta Pusat 10310</p>
        <p>+62 21 310 2888</p>
      </div>
      <div>
        <h4>Office Bali</h4>
        <p>Jl. Uluwatu 2 No.5, Jimbaran<br>Kuta Selatan, Badung 80361</p>
      </div>
      <div>
        <h4>Collaborate</h4>
        <a href="#">Partnership</a>
        <a href="#">Business Development</a>
        <a href="#">Career</a>
      </div>
      <div>
        <h4>Follow</h4>
        <a href="#">Instagram</a>
        <a href="#">YouTube</a>
        <a href="#">X / Twitter</a>
      </div>
    </div>
    <div class="foot__bottom">
      <span>© 2026 E-Motion Entertainment</span>
      <span>${activeLabel}, page concept</span>
    </div>
  `;
  document.body.appendChild(footer);

  // Setup mobile navigation toggle events
  const navToggle = document.getElementById("navToggle");
  const mMenu = document.getElementById("mobileMenu");
  
  if (navToggle && mMenu) {
    navToggle.addEventListener("click", () => {
      const open = mMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    
    mMenu.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("click", () => {
        mMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});
