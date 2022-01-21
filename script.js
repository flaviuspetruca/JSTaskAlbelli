const printResults = () => {

    const outPutText    = document.getElementById("outputText");
    const number        = document.getElementById("input").value;
    const submitBtn     = document.getElementById("submitBtn");

    if(number == "" || isNaN(number)){
        setError("You didn't add a number in!");
        return;
    }

    if(number <= 0){
        setError("Number must be higher then 0");
        return;
    }

    if(submitBtn.value){
        while (outPutText.firstChild){
            outPutText.removeChild(outPutText.lastChild);
        }
    }

    for(let i = 1 ; i <= number ; i++){
        const text = document.createElement("h3");
        if(i % 2 == 0 && i % 3 == 0){
            text.append("foo bar");
        } else if(i % 2 == 0){
            text.append("foo");
        } else if(i % 3 == 0){
            text.append("bar");
        } else {
            text.append(i);
        }
        outPutText.append(text);
    }

    submitBtn.setAttribute("value", 1);
    setError("");
}

const setError = (err) => {
    const error         = document.getElementById("error");
    error.textContent   = err;
}