function summ(num1, num2) {
    let result = "";
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;
    while (i >= 0 || j >= 0 || carry > 0) {
      let sum = carry;
      if (i >= 0) {
        sum += parseInt(num1[i--]);
      }
      if (j >= 0) {
        sum += parseInt(num2[j--]);
      }
      carry = Math.floor(sum / 10);
      result = (sum % 10).toString() + result;
    }
    return result;
};
  
function diff(num1, num2) {
    let result = "";
    let borrow = 0;
    if (num2.length > num1.length) {
      [num1, num2] = [num2, num1];
    }
    num2 = num2.padStart(num1.length, "0");
    for (let i = num1.length - 1; i >= 0; i--) {
      let digit1 = parseInt(num1.charAt(i));
      let digit2 = parseInt(num2.charAt(i));
      let subtractedDigit = digit1 - digit2 - borrow;
      if (subtractedDigit < 0) {
        subtractedDigit += 10;
        borrow = 1;
      } else {
        borrow = 0;
      }
      result = subtractedDigit.toString() + result;
    }
    while (result.charAt(0) === "0" && result.length > 1) {
      result = result.slice(1);
    }
    return result;
};

function multiply(num1, num2) {
    const len1 = num1.length;
    const len2 = num2.length;
    const result = new Array(len1 + len2).fill(0);
  
    for (let i = len1 - 1; i >= 0; i--) {
      for (let j = len2 - 1; j >= 0; j--) {
        const product = parseInt(num1[i]) * parseInt(num2[j]);
        const pos1 = i + j;
        const pos2 = i + j + 1;
        const sum = product + result[pos2];
        result[pos1] += Math.floor(sum / 10);
        result[pos2] = sum % 10;
      }
    }
    while (result.length > 1 && result[0] === 0) {
      result.shift();
    }
    return result.join('');
};

function divide(num1, num2) {
    function subtractStrings(num1, num2) {
        let result = "";
        let borrow = 0;
        if (num2.length > num1.length) {
          [num1, num2] = [num2, num1];
        }
        num2 = num2.padStart(num1.length, "0");
        for (let i = num1.length - 1; i >= 0; i--) {
          let digit1 = parseInt(num1.charAt(i));
          let digit2 = parseInt(num2.charAt(i));
          let subtractedDigit = digit1 - digit2 - borrow;
          if (subtractedDigit < 0) {
            subtractedDigit += 10;
            borrow = 1;
          } else {
            borrow = 0;
          }
          result = subtractedDigit.toString() + result;
        }
        while (result.charAt(0) === "0" && result.length > 1) {
          result = result.slice(1);
        }
        return result;
    }
}
let num1 = '12221324324';
let num2 = '12223423423';

console.log(diff(num1, num2));
console.log(summ(num1, num2));
console.log(multiply(num1, num2));
console.log(divide(num1, num2));

