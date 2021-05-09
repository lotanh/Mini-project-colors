let sideDiv = document.getElementById('side-bar')
let mainDiv = document.getElementById('main')
let colors = ['red' , 'orange' , 'yellow' , 'green', 'white', 'gray', 'blue', 'lightpink', 'lightgray', 'cyan' , 'lightgreen', 'yellowgreen', 'black', 'indigo', 'darkblue']
let btn = document.getElementById('btn')
let currentColor
let isDrawing = false;


for (let i = 0; i < colors.length; i++) {
    let divColor = document.createElement('div');
    let nameColor = colors[i];
    divColor.classList.add(nameColor);
    sideDiv.appendChild(divColor);
    divColor.style.backgroundColor = nameColor;
    divColor.style.padding = "1vh" ;
    divColor.style.border = "1px solid black";
    divColor.addEventListener('click', function(){
        currentColor = nameColor
        console.log(currentColor)
        return currentColor
    })    
}


for (let i = 0; i < 1000; i++) {
    let divWhite = document.createElement('div');
    divWhite.classList.add('white');
    divWhite.style.backgroundColor = 'white';
    divWhite.style.width = "50px";
    divWhite.style.padding = "1vh"; 
    divWhite.style.border = "1px solid lightgrey"; 
    mainDiv.appendChild(divWhite);

    divWhite.addEventListener('mousedown', function() {
        isDrawing = true;
    }); 
    divWhite.addEventListener('mousemove', function() {
    if (isDrawing === true) {
        divWhite.style.backgroundColor = currentColor
    }
    });
    window.addEventListener('mouseup', function() {
        if (isDrawing === true) {
            divWhite.style.backgroundColor = " "
          isDrawing = false;
        }
      });
    
}
btn.addEventListener('click' , function() {
    let array = mainDiv.children
    console.log(array)
    for (let i = 0; i < array.length; i++) {
        array[i].style.backgroundColor = "white";  
    }
})


    // divWhite.addEventListener('mousedown' , function() {
    //     divWhite.style.backgroundColor = currentColor
    // }   if (mousedown === false) {
    //     divWhite.style.backgroundColor = " " 
    // }
// })
    // divWhite.addEventListener('mouseup' , function() {
    //     if (mousedown === false) {
    //         divWhite.style.backgroundColor = " " 
    //     }
    // })
    // divWhite.addEventListener('mouseover' , function() {
    //     if (mousedown === true) {
    //         divWhite.style.backgroundColor = currentColor 
    //     }
    // })