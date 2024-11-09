//6. তোকে অ্যাসিডিক আর বেসিক দ্রবণের তুলনা করতে বলল। একটা ফাংশন লিখ যেখানে দুইটা দ্রবণের পিএইচ ইনপুট দিলে কোনটা বেশি অ্যাসিডিক সেটা বলে দিবে।

function comparePH(ph1, ph2){
if(ph1 < ph2){
  return "first solution is acidic from second solution."
}
else if(ph2 < ph1){
  return "second solution is acidic from first solution."
}
else{
  return "both are equal."
}
}

const phSolution1 = 3;
const phSolution2 = 7;
const result = comparePH(phSolution1, phSolution2);
console.log(result);










