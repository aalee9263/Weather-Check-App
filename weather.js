function gradeCheck(event) {
    event.preventDefault();
    let gradeInput = document.querySelector("#gradeInput").value;
    gradeInput = Number(gradeInput)

    console.log(gradeInput);

    let message = "";

 
    if (gradeInput > 100){
        message = "Enter number between 0-100"
    } else if (gradeInput >= 80){
        message = "Your grade is A+"
    } else if (gradeInput >= 70){
        message = "Your grade is A"
    } else if (gradeInput >= 60){
        message = "Your grade is B"
    } else if (gradeInput >= 50){
        message = "Your grade is C"
    } else if (gradeInput >= 0) {
        message = "F"
    } else {
        message = "Enter number between 0-100"
    }

document.querySelector("#resultWindow").innerHTML = message
} 
