let minVal = 1;
let maxVal = 80;
let numBars = 80;
let heightFactor = 6.5;
let unsortedArray = new Array(numBars);
let randomize = document.getElementById("randomize_button");
let bubbleButton = document.getElementById("bubble_button");
let selectionButton = document.getElementById("selection_button");
let all_bars = document.getElementById("all_bars");


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createRandomArray() {
  for (let i = 0; i < numBars; i++) {
    unsortedArray[i] = randomNumber(minVal, maxVal);
  }
}

document.addEventListener("DOMContentLoaded", function() {
    createRandomArray();
    createBars(unsortedArray);
    console.log(unsortedArray);
});

function createBars(array) {
    for (let i = 0; i < array.length; i++) {
        let bar = document.createElement("div");
        // bar.className = "bar";
        bar.classList.add("bar");
        bar.style.height = array[i] * heightFactor + "px";
        //bar.style.backgroundColor = "black";
        all_bars.appendChild(bar);
    }
}

function refreshPage(){
    window.location.reload();
} 


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort(array){
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i -1; j++) {
            if (array[j] > array[j + 1]) {
                for(let k = 0; k < bars.length; k++){
                    if(k > array.length - i -1){
                        bars[k].style.backgroundColor = "lightgreen";
                    }
                    else if(k !== j && k !== j + 1){
                        bars[k].style.backgroundColor = "white";
                    }
                }
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                bars[j].style.height = array[j] * heightFactor + "px";
                bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
                bars[j].style.backgroundColor = "red";
                bars[j + 1].style.backgroundColor = "red";
                await sleep(20);
            }
            else{
                bars[j].style.backgroundColor = "lightgreen";
                bars[j+1].style.backgroundColor = "lightgreen";
            }
        }
    }
    
    return array;

}

async function selectionSort(array){
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            bars[j].style.backgroundColor = "red";
            if (array[j] < array[min]) {
                min = j;
            }
            await sleep(3);
            bars[j].style.backgroundColor = "white";
            
            
        }
        //await sleep(20);
        if (min !== i) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
            bars[i].style.height = array[i] * heightFactor + "px";
            bars[min].style.height = array[min] * heightFactor + "px";
            bars[i].style.backgroundColor = "red";
            bars[min].style.backgroundColor = "red";
            await sleep(600);
            bars[i].style.backgroundColor = "lightgreen";
            bars[min].style.backgroundColor = "white";
            //await sleep(25);
        }
        else{
            bars[i].style.backgroundColor = "lightgreen";
        }
        await sleep(100);
    }
   
    return array;
}


bubbleButton.addEventListener("click", function() {
  let sortedArray = bubbleSort(unsortedArray);
  console.log(sortedArray);
});
selectionButton.addEventListener("click", function() {
    let sortedArray = selectionSort(unsortedArray);
    console.log(sortedArray);
});