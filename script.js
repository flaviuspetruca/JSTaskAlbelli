/**
 * The printResults will check, if the number that was inputted is valid and will compute the result based on the number.
 */
import Divisible from "./divisibleClass.js";

export const printResults = () => {
    const outPutText = document.getElementById("outputText");
    const number = document.getElementById("input").value;
    
    let divisible = new Divisible(outPutText, number);

    if (!divisible.validate()){
        return;
    }
    divisible.emptyOutput();
    divisible.computeResult();
}

document.getElementById("submitBtn").addEventListener("click", function(event){
    event.preventDefault();
    printResults();
});

