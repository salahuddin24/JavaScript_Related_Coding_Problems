//12. তোর পরীক্ষার নাম্বারগুলো array আকারে আছে। একটা ফাংশন লিখ যেখানে এই array ইনপুট নিলে গড় নাম্বার বের করবে।

function calculateAverage(Scores){
let sum = 0;
for(let score of Scores ){
  sum += score;
}
const average = sum/Scores.length;
return average;
}  

const examScores = [88, 90, 78, 89, 59, 99];
const averageScore = calculateAverage(examScores);
console.log(averageScore);










