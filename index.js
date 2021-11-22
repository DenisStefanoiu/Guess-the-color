generateDivs(6);

function generateDivs(noOfSquares) {
    document.getElementById('congrats').innerHTML = " ";
    removeAllDivs();
    if(noOfSquares == 6){
        document.getElementById('hard').classList.add('action-clicked');
        document.getElementById('easy').classList.remove('action.clicked');
    } else{
        document.getElementById('easy').classList.add('action-clicked');
        document.getElementById('hard').classList.remove('action-clicked');
    }
    for(i=0;i<noOfSquares;i++) {
        let color = randomColor();
        let colorsDiv = document.getElementById('colors');
        let coloredSquare = document.createElement('div');
        coloredSquare.onclick = function(){
            getAnswer(coloredSquare);
        }
        coloredSquare.classList.add('color');
        coloredSquare.style.backgroundColor = 'rgb(' + color[0] + ', ' + color[1] + ', ' + color[2] + ' )';
        colorsDiv.appendChild(coloredSquare);
    }
    generateAnswer(noOfSquares);
}

function getAnswer(coloredSquare){
    let answer = document.getElementById('title').innerHTML;
    if(answer === coloredSquare.style.backgroundColor){
        document.getElementsByTagName('header')[0].style.backgroundColor = answer;
        let allSquares = document.getElementsByClassName('color');
        for(let i = 0;i<=allSquares.length;i++){
            setResult(allSquares[1], answer, "Congrats");
        }
    } else{
        setResult(coloredSquare, "rgb(35,35,35", "try again");
    }

}

function setResult(element, color, title){
    element.style.backgroundColor = color;
    element.style.transition = 'background-color is wave';
    document.getElementById('congrats').innerHTML = title;
}

function generateAnswer(noOfSquares){
    let correctColorIdx = randomNumber(noOfSquares);
    let colors = document.getElementsByClassName('color');
    let correctColor = colors[correctColorIdx].style.backgroundColor;
    document.getElementById('title').innerHTML = correctColor;
}

function removeAllDivs(){
    let colors = document.getElementsByClassName('color');
    while(colors.length > 0){
        colors[0].remove();
    }
}


function randomColor(){
    return [ Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256) ];
}

function randomNumber(max){
    return Math.floor(Math.random() * max);
}
