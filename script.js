//logs time when page loads
var startTime = new Date().getTime();
var timeArray = [];
var bestTime = Infinity;
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeShapeAppear() {
    //calc random number size pixels
    var top = Math.random() * 400;
    var left = Math.random() * 400;
    var side = Math.random() * 250 + 50;
    Math.random() > 0.5 ? document.getElementById("shape").style.borderRadius = "50%" : document.getElementById("shape").style.borderRadius = "0"; 
    document.getElementById("shape").style.backgroundColor = getRandomColor();
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.width = side + "px";
    document.getElementById("shape").style.height = side + "px";

    document.getElementById("shape").style.display = "block";

    //logs time when function runs
    startTime = new Date().getTime();
}

//creates random delay that then runs makeShapeAppear
function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() * 2000);
}

function calculateAverage(array) {
    return array.reduce(function(sum, currentTime){
        return sum += currentTime;
    })/array.length;
}

appearAfterDelay();

document.getElementById("shape").onclick = function () {
    //makes square 'disappear'
    document.getElementById("shape").style.display = "none";
    //logs time when click event occurs
    var endTime = new Date().getTime();
    //time taken in seconds
    var timeTaken = (endTime - startTime) / 1000;
    timeArray.push(timeTaken);

    var averageTime = Number(calculateAverage(timeArray).toFixed(3));
    timeTaken < bestTime ? bestTime = timeTaken : bestTime = bestTime;

    document.getElementById("timeTaken").innerHTML = " " + timeTaken  + "s";
    document.getElementById("averageTime").innerHTML = " " + averageTime  + "s";
    document.getElementById("timeToBeat").innerHTML = " " + bestTime  + "s";
    console.log(timeArray);
    appearAfterDelay();
}
