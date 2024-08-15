const converttemp=() => {
    const tempvalue = document.getElementById("deginput").value;
    const typeselected = document.getElementById("typeinput").value;
    const celtofah = (cel) => {
        let fahrenheit = ((cel*9/5)+32).toFixed(1);
        return fahrenheit;
    }
    const fahtocel = (fah) => {
        let celsius = ((fah-32)*5/9).toFixed(1);
        return celsius;
    }
    if(typeselected=='cel'){
        document.getElementById('result').innerHTML = celtofah(tempvalue) + "&#176; Fahrenheit";
    } else{
        document.getElementById('result').innerHTML = fahtocel(tempvalue) + "&#176; Celsius";
    }
}