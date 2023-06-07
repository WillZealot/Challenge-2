document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
        
      });
    });
    
    function handleMoreButtonClick() {
        let moreBtnEl = document.getElementById("moreBtn");
        let moreStuffEl = document.getElementById("moreBtnStuff");
      
        // Check if both elements exist
        if (moreBtnEl && moreStuffEl) {
          // Initially hide the "moreStuff" element if the screen size is less than 1024 pixels
        moreStuffEl.style.display = "none";
      
          // Add an event listener to the "moreBtn" element
          moreBtnEl.addEventListener("click", function() {
            // Check if the "moreStuff" element is hidden
            if (moreStuffEl.style.display === "block") {
              // Display the "moreStuff" element
              moreStuffEl.style.display = "none";
            } else {
              // Hide the "moreStuff" element
              moreStuffEl.style.display = "block";
            }
          });
        }
      }

      handleMoreButtonClick();
  });