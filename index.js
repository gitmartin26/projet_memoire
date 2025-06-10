// let newX = 0, newY = 0, startX = 0, startY = 0;

// const card = document.getElementById('card')

// card.addEventListener('mousedown',mouseDown)

// function mouseDown(e){
//     startX = e.clientX
//     startY = e.clientY

//     document.addEventListener('mousemove', mouseMove)
//     document.addEventListener('mouseup', mouseUp)
// }

// function mouseMove(e){
//     newX = startX - e.clientX
//     newY = startY - e.clientY

//     startX = e.clientX
//     startY = e.clientY

//     card.style.top = (card.offsetTop - newY) + 'px'
//     card.style.left = (card.offsetLeft - newX) + 'px'
// }

// function mouseUp(e){
//     document.removeEventListener('mousemove', mouseMove)
// }










////////////////////////////////////
let newX = 0, newY = 0, startX = 0, startY = 0;

const mask = document.getElementById('img')

mask.addEventListener('mousedown',mouseDown)

function mouseDown(e){
    startX = e.clientX
    startY = e.clientY
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}

function mouseMove(e){
    newX = startX - e.clientX
    newY = startY - e.clientY

    startX = e.clientX
    startY = e.clientY
    var actualPosition = mask.style.maskPosition;
    var pos = actualPosition.split(" ");
    var x =pos[0].replace('px','');
    if(pos[1]==undefined) {
      y=1;
    
       }else{
          var y =pos[1].replace('px','');
       }
 
  


    // mask.style.maskPosition = ( x- newX) + 'px '+(y-newY) + 'px'
    mask.style.maskPosition = ( e.clientX-200) + 'px '+(e.clientY-200) + 'px'
}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
}