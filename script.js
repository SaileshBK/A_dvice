// GET Advice that are supported by the API

document.getElementById("showButton").addEventListener("click", myFunction);
async function fetchData() {
    
    const options = {
        method: 'GET'
    };
    
    const response = await fetch('https://api.adviceslip.com/advice', options)

    const data = await response.json();
    document.getElementById('incomingAdvice').innerHTML = data.slip.advice;

}

function myFunction(){
    fetchData();
    document.getElementById("showButton").disabled = true; // setting show button to disable itself for 2 seconds.
    setTimeout(function(){document.getElementById("showButton").disabled = false;},2000);

}

