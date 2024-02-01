function showButton() {
    const scrollPosition = window.scrollY;
    const button = document.getElementById("scrollButton");
  
    if (button) {
      if (scrollPosition > 500) {
        button.style.visibility = "visible";
      } else {
        button.style.visibility = "hidden";
      }
    } else {
      console.warn("Elementul cu id-ul 'scrollButton' nu a fost găsit.");
    }
  }
  
  export default function ScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  document.addEventListener("scroll", showButton);
  