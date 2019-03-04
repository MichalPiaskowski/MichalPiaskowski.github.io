const reverseText = (text) => {
    let splitText = text.split("");
    let reverseArray = splitText.reverse();
    let joinArray = reverseArray.join("");
    console.log(joinArray);
    return joinArray
};

let myText = "Akademia108"
reverseText(myText);