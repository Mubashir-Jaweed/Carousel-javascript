let index = 1;
function moveslideto(e) {
  showslide((index = e));
}

function arrowcontrol(e) {
  showslide((index += e));
}

function showslide(e) {
  const images = document.querySelectorAll('img')
  const indicator = document.querySelectorAll(".slider-indicators span");
  const content = document.querySelectorAll(".slider-content h3")

  e > images.length ? (index -=images.length) : null
  e < 1 ? (index = images.length) : null

  for(let img of images){
    img.style.opacity = '0'
  }

  for(let ind of indicator){
    ind.style.width = '8px'
    ind.style.background = '#232323'
  }


  for(let con of content){
    con.style.opacity = '0'
    con.style.transitionDelay = '.2s'
  }

  
  images[index -1].style.opacity = '1'
  indicator[index -1].style.width = '20px'
  indicator[index -1].style.background = '#fff'

  content[index -1].style.opacity = '1'
}

showslide()