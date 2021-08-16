console.log("Hello from JavaScript");

// var usernanme = prompt('Give me your username');
// alert("This script works " + usernanme);

let btn = document.querySelector('#btn');
console.log(btn);

let txtInput = document.querySelector('#text-area');
console.log(txtInput);

let outputDiv = document.querySelector('#output');
console.log(outputDiv);

// https://funtranslations.com/api/minion
let serverURL = "https://api.funtranslations.com/translate/minion.json"

// wire fetch call in app
function getTranslationURL(text) {

    return serverURL + "?" + "text=" + text;
}

// error handling
function errorHandler(error) {

    console.log("Error occured: ", error);
    alert("Some Error Occurred");
}

// clickHandler function
function clickEventHandler() {

    console.log("Clicked");

    // Read the value of the textarea
    let textInputValue = txtInput.value;
    console.log(textInputValue);

    // Output that value of textarea to the output div ==> write to this div dynamically when button click happens
    // outputDiv.innerText = textInputValue;

    // Understand innerText vs innerHTML ????


    //calling server for processing
    fetch(getTranslationURL(textInputValue))
        .then(response => response.json())
        .then(json => {
            console.log(json.contents.translated);
            let translatedText = json.contents.translated;

            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler);
}



// Imp ==> Using OnClick is not a good practice, always use addEventListner
btn.addEventListener("click", clickEventHandler);


/*
// Imp ==> Using OnClick is not a good practice, always use addEventListner
btn.addEventListener("click", function clickEventHandler() {

    console.log("Clicked");

    // Read the value of the textarea
    let textInputValue = txtInput.value;
    console.log(textInputValue);

    // Output that value of textarea to the output div ==> write to this div dynamically when button click happens
    // outputDiv.innerText = textInputValue;

    // Understand innerText vs innerHTML ????


    //calling server for processing
    fetch(getTranslationURL(textInputValue))
        .then(response => response.json())
        .then(json => {
            console.log(json.contents.translated);
            let translatedText = json.contents.translated;

            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler);
});

*/