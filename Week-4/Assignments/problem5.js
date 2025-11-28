// Problem 5: Array Manipulator
function reverseArray(arr) {
    const out = [];
    for (let i = arr.length - 1; i >= 0; i--) out.push(arr[i]);
    return out;
}

function removeDuplicates(arr) {
    const seen = new Set();
    const out = [];
    for (const item of arr) {
        if (!seen.has(item)) { seen.add(item); out.push(item); }
    }
    return out;
}

function rotateArray(arr, positions) {
    const len = arr.length;
    if (len === 0) return [];
    const pos = ((positions % len) + len) % len; // positive
    if (pos === 0) return arr.slice();
    return arr.slice(len - pos).concat(arr.slice(0, len - pos));
}

function findSecondLargest(numbers) {
    const uniq = Array.from(new Set(numbers));
    if (uniq.length < 2) return null;
    uniq.sort((a,b)=>b-a);
    return uniq[1];
}

console.group('Problem 5 Tests');
console.log('reverseArray([1,2,3,4]) =>', reverseArray([1,2,3,4]));
console.log('reverseArray(["a","b","c"]) =>', reverseArray(["a","b","c"]));
console.log('reverseArray([]) =>', reverseArray([]));
console.log('removeDuplicates([1,2,2,3,1,4]) =>', removeDuplicates([1,2,2,3,1,4]));
console.log('removeDuplicates(["a","b","a","c"]) =>', removeDuplicates(["a","b","a","c"]));
console.log('rotateArray([1,2,3,4],1) =>', rotateArray([1,2,3,4],1));
console.log('rotateArray([1,2,3,4],2) =>', rotateArray([1,2,3,4],2));
console.log('rotateArray([1,2,3],4) =>', rotateArray([1,2,3],4));
console.log('findSecondLargest([10,20,30,40]) =>', findSecondLargest([10,20,30,40]));
console.log('findSecondLargest([5,5,5]) =>', findSecondLargest([5,5,5]));
console.log('findSecondLargest([100,50,100,75]) =>', findSecondLargest([100,50,100,75]));
console.groupEnd();
