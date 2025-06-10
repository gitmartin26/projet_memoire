let ciel = document.getElementById("ciel");
let back = document.getElementById("back");
let middleback = document.getElementById("middleback");
let middle = document.getElementById("middle");
let perso = document.getElementById("perso");
let front1 = document.getElementById("front1");
let front2 = document.getElementById("front2");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    ciel.style.top = value *0.5 + 'px';
    back.style.top = value *0.57 + 'px';
    middleback.style.top = value *0.53 + 'px';
    middle.style.top = value *0.5 + 'px';
    perso.style.top = value *0.46 + 'px';
    front1.style.top = value *0.55 + 'px';
    front2.style.top = value *0.55 + 'px';
})



// block scrolls
let sidebar = document.getElementsByClassName("sidebar")[1];
let sidebar_content = document.getElementsByClassName("content-wrapper")[0];

window.onscroll = () => {
    let scrollTop = window.scrollY;
    let viewportHeight = window.innerHeight;
    let contentHeight = sidebar_content.getBoundingClientRect().height;

    if(scrollTop >= contentHeight - viewportHeight) {
        sidebar_content.style.position = "fixed";
    }
    else {
        sidebaar_content.style.position = "";
    }
}


//opacité scroll
window.addEventListener("scroll", function () {
  const gif = document.getElementById("map");
  const img = document.getElementById("decouverte");

  const scrollY = window.scrollY;

  const scrollStart = 2800; // Début du fondu
  const scrollEnd = 4000;   // Fin du fondu

  let progress = (scrollY - scrollStart) / (scrollEnd - scrollStart);
  progress = Math.max(0, Math.min(1, progress)); // Clamp entre 0 et 1

  gif.style.opacity = 1 - progress;
  img.style.opacity = progress;
});