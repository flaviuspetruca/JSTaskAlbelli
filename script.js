/**
 * The printResults will check, if the number that was inputted is valid and will compute the result based on the number.
 */
const printResults = () => {
    const outPutText = document.getElementById("outputText");
    const number = document.getElementById("input").value;
    const submitBtn = document.getElementById("submitBtn");
    
    let divisible = new Divisible(outPutText, number, submitBtn);

    if (!divisible.validate()){
        return;
    }
    divisible.emptyOutput();
    divisible.computeResult();

    setError("");
}


/**
 * Divisible class.
 * @FIXME: To move to another file.
 */
class Divisible {
    constructor(outPutText, number, submitBtn){
        this.outPutText = outPutText;
        this.number = parseFloat(number);
        this.submitBtn = submitBtn;
    }

    validate(){
        if (this.number === "" || isNaN(this.number)){
            setError("You didn't add a number in!");
            return false;
        }

        if (!Number.isInteger(this.number)){
            setError("Number must be natural!")
            return false;
        }

        const maxValue = 10000;
        if (this.number <= 0 && this.number > maxValue){
            setError(`Number must be higher then 0 and smaller than ${maxValue}`);
            return false;
        }

        return true;
    }

    emptyOutput(){
        while (this.outPutText.firstChild){
            this.outPutText.removeChild(this.outPutText.lastChild);
        }
    }

    computeResult(){
        const text = [];
        let i = 1;
        while (i <= this.number){
            const myOutput = [];
            if (i % 2 === 0) {
                myOutput.push("foo");
            }
            if (i % 3 === 0) {
                myOutput.push("bar");
            }
            text.push(myOutput.length > 0 ? myOutput.join(" ") : i);
            i++;
        }
        this.outPutText.innerHTML = text.join("<br />");
    }
}

/**
 * Writes out errors
 * @param {string} err
 */
const setError = (err) => {
    const error = document.getElementById("error");
    error.textContent = err;
}
