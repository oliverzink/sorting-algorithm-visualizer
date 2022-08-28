let minVal = 1;
let maxVal = 75;
let numBars = 75;
let heightFactor = 6.5;
let unsortedArray = new Array(numBars);
let randomize = document.getElementById("randomize_button");
let bubbleButton = document.getElementById("bubble_button");
let selectionButton = document.getElementById("selection_button");
let insertionButton = document.getElementById("insertion_button");
// let mergeButton = document.getElementById("merge_button");
let quickButton = document.getElementById("quick_button");
let heapButton = document.getElementById("heap_button");
let all_bars = document.getElementById("all_bars");
let speed = document.getElementById("speed");
let speedFactor = 10;


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

speed.addEventListener("change", (e) =>{
    speedFactor = parseInt(e.target.value);
} );

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


function hideButtons() {
    document.getElementById('bubble_button').disabled = true;
    document.getElementById('selection_button').disabled = true;
    document.getElementById('insertion_button').disabled = true;
    document.getElementById('quick_button').disabled = true;
    document.getElementById('heap_button').disabled = true;
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
                await sleep(2*speedFactor);
            }
            else{
                bars[j].style.backgroundColor = "lightgreen";
                bars[j+1].style.backgroundColor = "lightgreen";
            }
        }
        for(let z = 0; z < bars.length; z++){
            bars[z].style.backgroundColor = "lightgreen";
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
            await sleep(.3*speedFactor);
            bars[j].style.backgroundColor = "white";
            
            
        }
        if (min !== i) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
            bars[i].style.backgroundColor = "red";
            bars[min].style.backgroundColor = "red";
            await sleep(12*speedFactor);
            bars[i].style.height = array[i] * heightFactor + "px";
            bars[min].style.height = array[min] * heightFactor + "px";
            
            await sleep(60*speedFactor);
            bars[i].style.backgroundColor = "lightgreen";
            bars[min].style.backgroundColor = "white";
        }
        else{
            bars[i].style.backgroundColor = "lightgreen";
        }
        await sleep(10*speedFactor);
    }
   
    return array;
}

async function insertionSort(array){
    let bars = document.getElementsByClassName("bar");
    for (let i = 1; i < array.length; i++) {
        let j = i;
        if(array[i-1] < array[i]){
            bars[i-1].style.backgroundColor = "lightgreen";
        }
        else{
            while (j > 0 && array[j-1] > array[i]) {
                j -=1;
        
            }
            let temp = array[j]
            array[j] = array[i];
            bars[j].style.backgroundColor = "red";
            bars[i].style.height = 0 + "px";
            await sleep(10*speedFactor);
            bars[i].style.backgroundColor = "red";
            bars[j].style.height = array[j] * heightFactor + "px";
           
            j+=1;
            await sleep(10*speedFactor);
            while (j <= i){
                let temp1 = array[j]
                array[j] = temp;
                temp = temp1;
                bars[j].style.height = array[j] * heightFactor + "px";
                await sleep(2*speedFactor);
                bars[j].style.backgroundColor = "lightgreen";
                j +=1;
            }
            

        }
        await sleep(30*speedFactor);
        for(let k = 0; k < bars.length; k++){
            bars[k].style.backgroundColor = "white";
        }
        
    }
    for(let z = 0; z < bars.length; z++){
        bars[z].style.backgroundColor = "lightgreen";
    }
    return array;
}

// function wait(ms) {
//     var start = Date.now(),
//         now = start;
//     while (now - start < ms) {
//       now = Date.now();
//     }
// }

// merge sort is working (it returns the sorted array), however, I am not able to get it to visualize correctly


// function merge(left, right, bars) {
//     let mergedArray = [], leftIdx = 0, rightIdx = 0;
//     while (leftIdx < left.length && rightIdx < right.length){
//         if (left[leftIdx] < right[rightIdx]) {
//             mergedArray.push(left[leftIdx]);
//             bars[leftIdx].style.height = mergedArray[leftIdx] * heightFactor + "px";
//             leftIdx++;
//             wait(5)
//         }
//         else{
//             mergedArray.push(right[rightIdx]);
//             bars[rightIdx].style.height = mergedArray[rightIdx] * heightFactor + "px";
//             rightIdx++;
//             wait(5);
//         }
//     }
//     return mergedArray
//           .concat(left.slice(leftIdx))
//           .concat(right.slice(rightIdx));

// }


// function mergeSort(array){
//     let bars = document.getElementsByClassName("bar");
//     if (array.length <= 1) {
//         return array;
//     }
//     let mid = Math.floor(array.length / 2);
//     let left = mergeSort(array.slice(0, mid));
//     let right = mergeSort(array.slice(mid, array.length));
    
//     return merge(left, right, bars);
// }

async function swap(array, leftIndex, rightIndex, bars){
    // let bars = document.getElementsByClassName("bar");
    var temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
    bars[leftIndex].style.height = array[leftIndex] * heightFactor + "px";
    bars[rightIndex].style.height = array[rightIndex] * heightFactor + "px";
    bars[leftIndex].style.backgroundColor = "lightgreen";
    bars[rightIndex].style.backgroundColor = "lightgreen";
    await sleep(10*speedFactor);
    bars[leftIndex].style.backgroundColor = "white";
    bars[rightIndex].style.backgroundColor = "white";
}

async function partition(array, left, right) {
    let bars = document.getElementsByClassName("bar");
    let pIdx = Math.floor((right + left) / 2);
    let pivot = array[pIdx];
    bars[pIdx].style.backgroundColor = "red";
    for(let i = left; i < right; i++){
        if(i !== pIdx){
            bars[i].style.backgroundColor = "white";
        }
    }

    i = left, j = right;
    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            await swap(array, i, j, bars);
            i++;
            j--;
        }
    }
    return i;
}

async function quickSort(array, left, right) {
    var index;
    let bars = document.getElementsByClassName("bar");
    if (array.length > 1){
        index = await partition(array, left, right);
        if (left < index - 1){
            await quickSort(array, left, index - 1);
        }
        if (index < right){
            await quickSort(array, index, right);
        }
    }
    for (let i = left; i < right +1; i++){
        bars[i].style.backgroundColor = "lightgreen";
    }
    return array;
}

async function heapSort(array){
    let bars = document.getElementsByClassName("bar");
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        await maxHeapify(array, array.length, i);
    }
    for (let i = array.length - 1; i >= 0; i--) {
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        bars[0].style.height = array[0] * heightFactor + "px";
        bars[i].style.height = array[i] * heightFactor + "px";
        await sleep(6*speedFactor);
        bars[0].style.backgroundColor = "lightgreen";
        bars[i].style.backgroundColor = "lightgreen";
        
        await maxHeapify(array, i, 0);
    }
    return array;
}

async function maxHeapify(array, n, i){
    let bars = document.getElementsByClassName("bar");
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    if (l < n && array[l] > array[largest]){
        largest = l;
    }
    if (r < n && array[r] > array[largest]){
        largest = r;
    }
    if (largest !== i){
        let temp = array[i];
        array[i] = array[largest];
        array[largest] = temp;
        bars[i].style.height = array[i] * heightFactor + "px";
        bars[largest].style.height = array[largest] * heightFactor + "px";
        bars[i].style.backgroundColor = "red";
        bars[largest].style.backgroundColor = "red";
        await sleep(6*speedFactor);
        await maxHeapify(array, n, largest);

        for (let j = 0; j < n; j++){
            bars[j].style.backgroundColor = "white";
        }
    }
}


bubbleButton.addEventListener("click", function() {
    hideButtons();
    let sortedArray = bubbleSort(unsortedArray);
    console.log(sortedArray);
});
selectionButton.addEventListener("click", function() {
    hideButtons();
    let sortedArray = selectionSort(unsortedArray);
    console.log(sortedArray);
});

insertionButton.addEventListener("click", function() {
    hideButtons();
    let sortedArray = insertionSort(unsortedArray);
    console.log(sortedArray);
    
});

// mergeButton.addEventListener("click", function() {
//     let sortedArray = mergeSort(unsortedArray);
//     console.log(sortedArray);
// });

quickButton.addEventListener("click", function() {
    hideButtons();
    let sortedArray = quickSort(unsortedArray, 0, unsortedArray.length - 1);
    console.log(sortedArray);
});

heapButton.addEventListener("click", function() {
    hideButtons();
    let sortedArray = heapSort(unsortedArray);
    console.log(sortedArray);
    
});