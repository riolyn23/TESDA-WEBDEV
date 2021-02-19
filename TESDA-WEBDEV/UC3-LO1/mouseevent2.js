const clearBtn = document.querySelector('.clear-task');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//Click
// clearBtn.addEventListener('click', runEvent);

//DoubleClick
// clearBtn.addEventListener('dbclick', runEvent);

//MouseDown
// clearBtn.addEventListener('mousedown', runEvent);

//MouseUp
// clearBtn.addEventListener('mouseup', runEvent);

//MouseEnter
// clearBtn.addEventListener('mouseenter', runEvent);

//MouseLeave
// clearBtn.addEventListener('mouseleave', runEvent);

//Mouseover
// clearBtn.addEventListener('mouseover', runEvent);

//Mouseout
// clearBtn.addEventListener('mouseout', runEvent);

//Mousemove
card.addEventListener('mousemove', runEvent);

function runEvent(e){
    console.log(`Event Type: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetY})`
};