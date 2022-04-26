// Problem Solving: Evenish vs Oddish

let number = 12345;

let evenishVsOddish = (num) => {
  let sum = 0;
  let arr = num
    .toString()
    .split("")
    .map((num) => {
      return Number(num);
    });

  arr.map((num) => {
    sum += num;
  });

  sum % 2 === 0 ? console.log("Evenish") : console.log("Oddish");

  console.log(sum);
};

evenishVsOddish(number);
