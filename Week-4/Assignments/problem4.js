// Problem 4: Pattern Generator
function createPyramid(height) {
    const lines = [];
    for (let row = 0; row < height; row++) {
        const spaces = ' '.repeat(height - row - 1);
        const stars = '*'.repeat(2 * row + 1);
        lines.push(spaces + stars);
    }
    return lines.join('\n');
}

function createNumberStaircase(steps) {
    const lines = [];
    for (let i = 1; i <= steps; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) line += j.toString();
        lines.push(line);
    }
    return lines.join('\n');
}

function createCheckerboard(size) {
    const lines = [];
    for (let r = 0; r < size; r++) {
        let line = '';
        for (let c = 0; c < size; c++) {
            const even = (r + c) % 2 === 0;
            line += even ? 'X' : 'O';
        }
        lines.push(line);
    }
    return lines.join('\n');
}

console.group('Problem 4 Tests');
console.log('createPyramid(3) ->\n' + createPyramid(3));
console.log('createPyramid(4) ->\n' + createPyramid(4));
console.log('createNumberStaircase(5) ->\n' + createNumberStaircase(5));
console.log('createCheckerboard(4) ->\n' + createCheckerboard(4));
console.groupEnd();
