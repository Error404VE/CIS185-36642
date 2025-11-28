// Problem 2: Fall Leaf Counter
function countLeaves(days) {
    // Each day k has 10 * k leaves
    let total = 0;
    for (let k = 1; k <= days; k++) {
        total += 10 * k;
    }
    return total;
}

function categorizeLeafColors(leaves) {
    const colorCount = {};
    for (const color of leaves) {
        if (colorCount[color]) colorCount[color]++;
        else colorCount[color] = 1;
    }
    return colorCount;
}

console.group('Problem 2 Tests');
console.log('countLeaves(1) =>', countLeaves(1));
console.log('countLeaves(2) =>', countLeaves(2));
console.log('countLeaves(4) =>', countLeaves(4));
console.log('countLeaves(5) =>', countLeaves(5));
console.log('categorizeLeafColors(["red","yellow","red","brown"]) =>', categorizeLeafColors(["red","yellow","red","brown"]));
console.log('categorizeLeafColors(["orange","orange","orange"]) =>', categorizeLeafColors(["orange","orange","orange"]));
console.log('categorizeLeafColors([]) =>', categorizeLeafColors([]));
console.groupEnd();
