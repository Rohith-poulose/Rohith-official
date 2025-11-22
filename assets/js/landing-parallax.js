// Lightweight parallax for landing blobs
// Uses data-speed attribute on .blob elements to move them subtly on scroll.
(function(){
  const blobs = Array.from(document.querySelectorAll('.blob'));
  if(!blobs.length) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  function onScroll(){
    lastScrollY = window.scrollY;
    requestTick();
  }

  function requestTick(){
    if(!ticking){
      requestAnimationFrame(update);
    }
    ticking = true;
  }

  function update(){
    const sc = lastScrollY;
    // get header top offset to make effect strongest in header area
    const header = document.getElementById('header');
    const headerRect = header ? header.getBoundingClientRect() : null;

    blobs.forEach(b => {
      const speed = parseFloat(b.getAttribute('data-speed')) || 0.08;
      // move a small amount scaled by speed; invert so blobs move slower than scroll
      const translateY = Math.round(sc * speed * -1);
      b.style.transform = `translate3d(0, ${translateY}px, 0)`;
    });

    ticking = false;
  }

  // initial update
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
