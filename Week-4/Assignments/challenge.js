// Challenge: Number System Converter (Extra Credit)
function decimalToBinary(decimal) {
    if (decimal === 0) return '0';
    let n = Math.floor(decimal);
    let bits = '';
    while (n > 0) {
        bits = (n % 2) + bits;
        n = Math.floor(n / 2);
    }
    return bits;
}

function binaryToDecimal(binary) {
    // assume binary is a string of '0' and '1'
    if (binary === '0') return 0;
    let result = 0;
    for (let i = 0; i < binary.length; i++) {
        const ch = binary[i];
        result = result * 2 + (ch === '1' ? 1 : 0);
    }
    return result;
}

function decimalToHexadecimal(decimal) {
    if (decimal === 0) return '0';
    const digits = '0123456789ABCDEF';
    let n = Math.floor(decimal);
    let hex = '';
    while (n > 0) {
        const rem = n % 16;
        hex = digits[rem] + hex;
        n = Math.floor(n / 16);
    }
    return hex;
}

console.group('Challenge Tests');
console.log('decimalToBinary(10) =>', decimalToBinary(10));
console.log('decimalToBinary(25) =>', decimalToBinary(25));
console.log('decimalToBinary(0) =>', decimalToBinary(0));
console.log('binaryToDecimal("1010") =>', binaryToDecimal('1010'));
console.log('binaryToDecimal("11111") =>', binaryToDecimal('11111'));
console.log('binaryToDecimal("0") =>', binaryToDecimal('0'));
console.log('decimalToHexadecimal(255) =>', decimalToHexadecimal(255));
console.log('decimalToHexadecimal(26) =>', decimalToHexadecimal(26));
console.log('decimalToHexadecimal(16) =>', decimalToHexadecimal(16));
console.groupEnd();
