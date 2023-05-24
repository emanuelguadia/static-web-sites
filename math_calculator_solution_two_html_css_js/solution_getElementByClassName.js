let btnsArr2 = document.getElementsByTagName('input');
//let innerOutput = document.getElementsByClassName("innerOutput");
let innerOutput = document.querySelector(".innerOutput");
console.log(innerOutput);
 for (let index = 0; index < btnsArr2.length; index++) {
  btnsArr2[index].addEventListener('click',printButtonText);
}

function printButtonText() {
  switch (this.value) {
    case "C": {
      innerOutput.innerText = "";
      break;
    }
    case "1": {
      console.log(this.value);
      innerOutput.innerText += this.value;
      break;
    }
    case "2": {
      innerOutput.innerText += this.value;
      break;
    }
    case "3": {
      innerOutput.innerText += this.value;
      break;
      
    }
    case "4": {
      innerOutput.innerText += this.value;
      break;
    }
    case "5": {
      innerOutput.innerText += this.value;
      break;
    }
    case "6": {
      innerOutput.innerText += this.value;
      break;
    }
    case "7": {
      innerOutput.innerText += this.value;
      break;
    }
    case "8": {
      innerOutput.innerText += this.value;
      break;
    }
    case "9": {
      innerOutpu.innerText += this.value;
      break;
    }
    case "0": {
      innerOutput.innerText += this.value;
      break;
    }
    case "+": {
      innerOutput.innerText += this.value;
      break;
    }
    case "-": {
      innerOutput.innerText += this.value;
      break;
    }
    case "/": {
      innerOutput.innerText += this.value;
      break;
    }
    case "*": {
      innerOutput.innerText += this.value;
      break;
    }
    case "%": {
      innerOutput.innerText += this.value;
      break;
    }
    case ".": {
      innerOutput.innerText += this.value;
      break;
    }
    case "=": {
      innerOutput.innerText = Number(eval(innerOutput.innerText));
      break;
    }
  }
}
