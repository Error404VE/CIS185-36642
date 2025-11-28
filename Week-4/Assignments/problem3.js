// Problem 3: Grade Calculator
function calculateAverage(scores) {
    if (!scores || scores.length === 0) return 0;
    const sum = scores.reduce((s, v) => s + v, 0);
    return sum / scores.length;
}

function dropLowestScore(scores) {
    if (!scores || scores.length === 0) return [];
    const copy = scores.slice();
    const min = Math.min(...copy);
    // remove only one instance of min
    const idx = copy.indexOf(min);
    if (idx !== -1) copy.splice(idx, 1);
    return copy;
}

function getLetterGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

function curveGrades(scores, curveAmount) {
    return scores.map(s => Math.min(100, s + curveAmount));
}

console.group('Problem 3 Tests');
console.log('calculateAverage([80,90,70]) =>', calculateAverage([80,90,70]));
console.log('calculateAverage([100,50,75]) =>', calculateAverage([100,50,75]));
console.log('calculateAverage([]) =>', calculateAverage([]));
console.log('dropLowestScore([80,90,70,85]) =>', dropLowestScore([80,90,70,85]));
console.log('dropLowestScore([50,50,75,100]) =>', dropLowestScore([50,50,75,100]));
console.log('getLetterGrade(95) =>', getLetterGrade(95));
console.log('getLetterGrade(82) =>', getLetterGrade(82));
console.log('getLetterGrade(58) =>', getLetterGrade(58));
console.log('curveGrades([85,95,70],10) =>', curveGrades([85,95,70],10));
console.log('curveGrades([90,96,80],5) =>', curveGrades([90,96,80],5));
console.groupEnd();
