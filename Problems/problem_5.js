//5. তোরা মুভিতে গেছিস, আর বয়সের ভিত্তিতে টিকিটের দাম নির্ধারণ হবে। একটা ফাংশন লিখ যেখানে বয়স ইনপুট দিলে টিকিটের দাম দেখাবে।

function getTicketPrice(age){
  if(age<12){
    return "Ticket price is : 10 taka"
  }
  else if(age < 18){
    return "Ticket price is : 20 taka";
  }
  else{return "Ticket price is : 30 taka"}
}

const age = 15 ;
const ticketPrice = getTicketPrice(age);
console.log(ticketPrice);


// output: Ticket price is : 20 taka








