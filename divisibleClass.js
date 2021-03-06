/**
 * Divisible class.
 * @FIXME: To move to another file.
 */
export default class Divisible {
    constructor(outPutText, number){
        this.outPutText = outPutText;
        this.number = parseFloat(number);
    }

    validate(){
        this.setError("");
        if (this.number === "" || isNaN(this.number)){
            this.setError("You didn't add a number in!");
            return false;
        }

        if (!Number.isInteger(this.number)){
            this.setError("Number must be natural!")
            return false;
        }

        const maxValue = 10000;
        if (this.number <= 0 || this.number > maxValue){
            this.setError(`Number must be higher then 0 and smaller than ${maxValue}`);
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
        let text = [];
        this.recursive(1,text, this.number);
        this.outPutText.innerHTML = text.join("<br />");
    }

    recursive = (i,text, number) =>{
        if (i === number + 1){
            return;
        }
            
        const myOutput = [];
        if (i % 2 === 0) {
            myOutput.push("foo");
        }
        if (i % 3 === 0) {
            myOutput.push("bar");
        }
        text.push(myOutput.length > 0 ? myOutput.join(" ") : i);
        this.recursive(i + 1, text, number);
    }

    /**
     * Writes out errors
     * @param {string} err
     */
    setError = (err) => {
        const error = document.getElementById("error");
        error.textContent = err;
    }
}
