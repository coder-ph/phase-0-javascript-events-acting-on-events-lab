// Your code here
function moveDodgerLeft() {
    const dodgerId = document.getElementById('dodger');
    dodgerId.style.left = '0px';
}
moveDodgerLeft();

function moveDodgerRight(){
    const dodgerRight = document.getElementById('dodger');
    dodgerRight.style.left = '370px';
}
moveDodgerRight();

const dodgerRight = document.getElementById("dodger");
function moveDodgerRight() {
    const rightValue = dodger.style.left.replace('px', '');
    const right = parseInt(rightValue, 10);

    if (right <= 360){
        dodgerRight.style.left = `${right + 1}px`
    }
}

document.addEventListener('keydown', function(e){
    if(e.key === 'ArrowRight') {
        moveDodgerRight()
    }
})

