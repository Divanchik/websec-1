function Calc() {
    let val1, val2, operator, result
    val1 = document.getElementById("input1").value;
    val2 = document.getElementById("input2").value;
    operator = document.getElementById("select1").value;
    let t1, t2, t3
    t1 = document.getElementById("text1")
    t2 = document.getElementById("text2")
    t3 = document.getElementById("text3")
    
    if (!val1.match(/^\d+\.*\d*$/) || !val2.match(/^\d+\.*\d*$/))
    {
        result = "ERROR";
    }
    else
    {
        switch (operator) {
            case "plus":
                result = parseFloat(val1) + parseFloat(val2);
                result = val1 + " + " + val2 + " = " + result.toPrecision(3);
                break;
            case "minus":
                result = parseFloat(val1) - parseFloat(val2);
                result = val1 + " - " + val2 + " = " + result.toPrecision(3);
                break;
            case "multiply":
                result = parseFloat(val1) * parseFloat(val2);
                result = val1 + " * " + val2 + " = " + result.toPrecision(3);
                break;
            case "divide":
                result = parseFloat(val1) / parseFloat(val2);
                result = val1 + " / " + val2 + " = " + result.toPrecision(3);
                break;
            default:
                break;
        }
    }
    t1.innerText = t2.innerText;
    t2.innerText = t3.innerText;
    t3.innerText = result
    
}