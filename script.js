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