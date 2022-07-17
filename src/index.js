module.exports = function toReadable (number) {
    const oneArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
     const twoArr = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) {
        return oneArr[number];
    }
  
    if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
           return twoArr[number / 10 - 1]
        } else {
           let decimals = Math.trunc(number / 10);
           let units = number - decimals * 10;
        return [twoArr[decimals - 1] + ' ' + oneArr[units]].join('');
        }
    }
  
    if (number >= 100 && number < 1000) {
        if (number % 100 === 0) {
              return `${oneArr[number / 100]} hundred`
            } else {
             let hundreds = Math.trunc(number / 100);
             let decimals = number - hundreds * 100;
            if (decimals % 10 === 0) {
                 return `${oneArr[hundreds]} hundred ${twoArr[decimals / 10 - 1]}`
            } else if (decimals <= 19) {
                 return `${oneArr[hundreds]} hundred ${oneArr[decimals]}`
            } else {
                  let decimals = Math.trunc((number - hundreds * 100) / 10);
                  let units = number - hundreds * 100 - decimals * 10;
                  return [`${oneArr[hundreds]} hundred ${twoArr[decimals - 1]} ${oneArr[units]}`].join('');
            }
        }
    }
}