//7. তুই ক্যালোরি হিসাব করতে চাস, যেখানে প্রোটিন, ফ্যাট আর কার্বোহাইড্রেটের মান নিলে ক্যালোরি বের করবে। একটা ফাংশন লিখ যা এই মানগুলো ইনপুট নেবে।

function calculateCalories(protein, fat, carbs){
  const proteinCalories = protein*4;
  const fatCalories = fat*9;
  const carbCalories = carbs*4;
  const totalCalories = proteinCalories + fatCalories + carbCalories;
  return totalCalories;
}

const proteinAmount = 50; // gram
const fatAmount = 20; // gram
const carbAmount = 60; // gram
const calories = calculateCalories(proteinAmount, fatAmount, carbAmount);
console.log(`Total calories is :${calories}`);

















