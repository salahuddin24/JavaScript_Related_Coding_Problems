//4. তোর জন্ম সাল আর বর্তমান সাল জানা আছে। একটা ফাংশন লিখ যেখানে এই দুইটা ইনপুট নিলে তোর বর্তমান বয়স বের করবে।

function calculateAge(currentYear , birthYear){
const age = currentYear - birthYear;
return age;
} 
const age = calculateAge(2024, 2002);
console.log("you are ",age, "years old.");

// output : you are 22 years old.