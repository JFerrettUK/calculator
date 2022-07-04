// Create 16x16 DIV boxes

let container = document.getElementById("container");
let colorStatus = 'grey';

function makeGrid(userNum) {
    for (x = 0; x < userNum; x++) {
        let divBox = document.createElement("div");
        divBox.className = "divBox";
        document.getElementById("container").appendChild(divBox);
    }
    const boxSel = document.getElementsByClassName("divBox");
    for (let i = 0, len = boxSel.length; i < len; i++) {
        boxSel[i].id = "box" + i;
    }
    for (let i = 0, len = boxSel.length; i < len; i++) {
        let targetBox = document.getElementById("box" + i);
        targetBox.addEventListener("mouseover", function( event ) {
            event.target.style.backgroundColor = 'salmon';
        });
    }  
}

makeGrid(10000)

function showAlert() {
    let boxes = document.querySelectorAll('.divBox');

    boxes.forEach(box => {
        box.remove();
    });
    
    makeGrid(10000)

    let userNum = prompt("How many squares per side in your Etch-a-Sketch? Choose between 1 and 100.");
    if (userNum > 100) {
        alert("That number is too high!")
    } else if (userNum < 0) {
        alert("You can't have a negative number of squares.") 
    } else if (userNum > 0 && userNum < 101) {
        document.getElementById("container").style.gridTemplateColumns = `repeat(${userNum},1fr)`;
        document.getElementById("container").style.gridTemplateRows = `repeat(${userNum},1fr)`;
    } else {
        alert("Please retry using the number keys!")
    }
}

function makeRbgGrid(userNum) {
    for (x = 0; x < userNum; x++) {
        let divBox = document.createElement("div");
        divBox.className = "divBox";
        document.getElementById("container").appendChild(divBox);
    }
    const boxSel = document.getElementsByClassName("divBox");
    for (let i = 0, len = boxSel.length; i < len; i++) {
        boxSel[i].id = "box" + i;
    }
    for (let i = 0, len = boxSel.length; i < len; i++) {
        let targetBox = document.getElementById("box" + i);
        targetBox.addEventListener("mouseover", function(event) {
            function getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                    }   
                return color;
            }
            getRandomColor()  
            event.target.style.backgroundColor = getRandomColor();         
        });
    }  
}

function showRbgAlert() {
    let boxes = document.querySelectorAll('.divBox');
    boxes.forEach(box => {
        box.remove();
    });
    makeRbgGrid(10000)
}


function resetGrid () {
    let boxes = document.querySelectorAll('.divBox');
    boxes.forEach(box => {
        box.remove();
    });
    makeGrid(10000);
}
