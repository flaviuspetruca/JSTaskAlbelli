//printResults will check if the number that was inputed is valid and will compute the result based on the number

const printResults = () => {
    const outPutText = document.getElementById("outputText");
    const number = document.getElementById("input").value;
    const submitBtn = document.getElementById("submitBtn");
    
    let divisible = new Divisible(outPutText, number, submitBtn);

    if (!divisible.validate()){
        return;
    };
    divisible.emptyOutput();
    divisible.computeResult();

    setError("");
}


//to move to another file
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
    
        if (this.number <= 0 && this.number > 10000){
            setError("Number must be higher then 0 and smaller than 10000");
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
        const text = []
        let i = 1;
        const handleValues = {
            0 : "foo bar",
            2 : "foo",
            3 : "bar",
            5 : "i"
        }
        while (i <= this.number){
            let res = handleValues[(i%2)*2 + (i%3 >= 1)*3];
            text.push(res === "i" ? i : res); 
            i++;
        }
        this.outPutText.append(text);
    }
}

const setError = (err) => {
    const error = document.getElementById("error");
    error.textContent = err;
}