const printResults = () => {
    const outPutText = document.getElementById("outputText");
    const number = document.getElementById("input").value;
    const submitBtn = document.getElementById("submitBtn");
    
    let divisible = new Divisible(outPutText, number, submitBtn);

    divisible.validate();
    divisible.computeResult();

    setError("");
}

const setError = (err) => {
    const error = document.getElementById("error");
    error.textContent = err;
}

class Divisible {
    constructor(outPutText, number, submitBtn){
        this.outPutText = outPutText;
        this.number = number;
        this.submitBtn = submitBtn;
    }

    validate(){
        if (this.number === "" || isNaN(this.number)){
            setError("You didn't add a this.number in!");
            return;
        }
        
        if (!Number.isInteger(this.number)){
            setError("Number must be natural!")
            return;
        }
    
        if (this.number <= 0 && this.number > 10000){
            setError("Number must be higher then 0 and smaller than 10000");
            return;
        }
    }

    computeResult(){
        const text = []
        let i = 1 ;
        while (i <= this.number){
            if (i % 2 === 0 && i % 3 === 0){
                text.push("foo bar");
            } else if (i % 2 === 0){
                text.push("foo");
            } else if (i % 3 === 0){
                text.push("bar");
            } else {
                text.push(i);
            }
            i++;
        }
        this.outPutText.append(text);
    }
}