const students = [
    {name: "a", score: 10},
    {name: "b", score: 5},
    {name: "c", score: 2}
];

const highestScore = document.getElementById('highestScore')
function highestScore() {
    let max = 0;
    let topStudent=null;

    for (let i = 0; i < students.length; i++) {
        if (students[i].score > max) {
            max = students[i].score;
            topStudent = students[i];
        }
    }

    return topStudent;
}

function examPasser() {
    let pass=0;
    for (let i=0; i<students.length; i++){
        if (students[i].score >= 5) {
            pass++;
        }
    }
    return pass;
}

function underThree() {
    let underThree=false;
    for (let i=0; i<students.length; i++) {
        if (students[i].score < 3) {
            underThree = true;
        }
    }
    return underThree;
}