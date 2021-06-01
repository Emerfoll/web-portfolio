/* merge('abc') === 'abc';
merge('abc', '123') === 'a1b2c3';
merge('abc', '123456') === 'a1b2c3456'; */

function merge(string1, string2, ) {
    let result = "";
    let firstStringLength = string1.length; //Length of the string1 variable
    let secondStringLength
    if ( string2 ) {
      secondStringLength = string2.length; //Length of the string2 variable
    } else {
      secondStringLength = 0;
    }

    /*For loop with the terminating condition acquired based on the "conditional expression"*/
    for (let i = 0; i < (firstStringLength >= secondStringLength ? firstStringLength : secondStringLength); i++) {
      //if string1 length is >= string2
      if (firstStringLength >= secondStringLength) {
        if (i <= (secondStringLength - 1)) {
          result += string1.substr(i, 1) + string2.substr(i, 1);
        } else { //To terminate loop rather continue unnecessarily
          result += string1.substr(i); /*Append rest of the string1 Characters*/
          break;
        }

      } else { /* If string2 is > string1*/
        if (i <= (firstStringLength - 1)) {
          result += string1.substr(i, 1) + string2.substr(i, 1);
        } else { //To terminate loop rather continue unnecessarily
          result += string2.substr(i); /*Append rest of the string2 Characters*/
          break;
        }
      }
    }
    return result; //Return merge result;
  
};

console.log(merge('mix this', 'and this'));
console.log(merge('abc')); // === 'abc';
console.log(merge('abc', '123')); // === 'a1b2c3';
console.log(merge('abc', '123456')); // === 'a1b2c3456';
console.log(merge('ti osl o hudb ayt ed', 'hscnoelgsol ees ora')); // === 'this console log should be easy to read';