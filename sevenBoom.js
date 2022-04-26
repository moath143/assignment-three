// Problem Solving : Seven Boom;

let arrNumber = [1, 3, 5, 8, 4];

let sevenBoom = (arr) => {
  let result = arr.includes(7);
  result
    ? console.log("boom!")
    : arr.join(" ").includes("7")
    ? console.log("boom!")
    : console.log("none");
};

sevenBoom(arrNumber);
