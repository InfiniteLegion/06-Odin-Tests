export function caesarCipher(str, shift) {
    let result = '';
    const alphaLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const alphaUpper = alphaLower.map(letter => letter.toUpperCase());
    const strArr = str.split('');

    for (let i = 0; i < strArr.length; i++) {
        if (alphaLower.includes(strArr[i])) {
            let index = alphaLower.indexOf(strArr[i]);

            result += makeShift(alphaLower, index, shift);
        } else if (alphaUpper.includes(strArr[i])) {
            let index = alphaUpper.indexOf(strArr[i]);

            result += makeShift(alphaUpper, index, shift);
        } else {
            result += strArr[i];
        }
    }

    return result;
}

function makeShift(arr, index, shift) {
    if (index + shift >= 26) {
        index = index + shift - 26;
        return arr[index];
    } else {
        return arr[index + shift];
    }
}