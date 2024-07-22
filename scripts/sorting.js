// swap helper function for sorting algorithms
function swap(el1, el2) {    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}

// Disables sorting buttons while sorting animation is running
function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

// Enables sorting buttons after sorting animation is done
function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

// Disables size slider while animation is running
function disableSizeSlider(){
    document.querySelector("#arr-size").disabled = true;
}

// Enables size slider after animation is done
function enableSizeSlider(){
    document.querySelector("#arr-size").disabled = false;
}

// Disables Generate Array button while animation is running
function disableNewArrayBtn(){
    document.querySelector(".arr-btn").disabled = true;
}

// Enables Genrate Array button after animation is done
function enableNewArrayBtn(){
    document.querySelector(".arr-btn").disabled = false;
}


function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

// Size Slider
let arraySize = document.querySelector('#arr-size');

// update the bars
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

// Default input for waitforme function (260ms)
let delay = 260;

// Speed Slider
let delayElement = document.querySelector('#speed_input');

// update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

// Creating new empty array
let array = [];

// Load the array as soon as the page loads
createNewArray();

// create new array
function createNewArray(noOfBars = 50) {
    // calling helper function to delete old bars from dom
    deleteChild();

    // creating an array of random numbers 
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);

    const bars = document.querySelector("#bars");

    // create multiple element div using loop
    for (let i = 0; i < noOfBars; i++) {
        // adding class 'bar col'
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// Helper function to delete all the previous bars
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

// Selecting generate array button from DOM and adding eventlistener
const newArray = document.querySelector(".arr-btn");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});
