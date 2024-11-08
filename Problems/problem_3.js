//3. তুই ঘুড়ি উড়াতে গিয়ে দূরত্ব আর সময় নিয়ে মাপছিলি ঘুড়ির গতি। একটা ফাংশন লিখ যেখানে দূরত্ব আর সময় ইনপুট নিলে ঘুড়ির গতি বের করবে।
// formula : s = vt 
function calculateSpeed(distance, time){
 const speed = distance / time;
 return speed;
}

const distanceTravelled = 120;
const timeTaken = 2;
const speed = calculateSpeed(distanceTravelled, timeTaken);
console.log(speed);
