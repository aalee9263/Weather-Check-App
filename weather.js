function weatherCheck(event) {
    event.preventDefault();
    let weatherInput = document.querySelector("#weatherInput").value;
    weatherInput = Number(weatherInput)

    console.log(weatherInput);

    let message = "";

 
    if (weatherInput >= 43){
        message = "High temperatures can be life-threatening"
    } else if (weatherInput >= 30){
        message = "Risk of Heat Exhaustion and Heatstroke"
    } else if (weatherInput >= 20){
        message = "Generally comfortable for most people"
    } else if (weatherInput >= 10){
        message = "Comfortable for physical & outdoor activities"
    } else if (weatherInput >= 1){
        message = "To prevent chilling dress warmly"
    } else if (weatherInput >= -1) {
        message = "Risk of Hypothermia and Frostbite"
    } else {
        message = "Danger of frostbite to exposed skin and extremities"
    }

document.querySelector("#resultWindow").innerHTML = message
} 
