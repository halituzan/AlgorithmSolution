const getFinalOrder = (k, amount) => {
  let sortAmount = [];
while (!amount.every((a) => a <= 0)) {
  amount.map((i, ind) => {
    if (i <= k && i !== 0 && i > 0) {
      sortAmount.push(ind + 1);
      amount[ind] = i - k;
    } else {
      amount[ind] = i - k;
    }
  });
}
return sortAmount;
};

console.log("k=5, amount=[12,16,14,6,5,8]\n\nSort:" + getFinalOrder(5, [12, 16, 14, 6, 5, 8]));
console.log("k=6, amount=[12,16,24,6,5,8,12]\n\nSort:" + getFinalOrder(6,[12,16,24,6,5,8,12]));
console.log("k=3, amount=[7,5,12,11,2,4,7,12]\n\nSort:" + getFinalOrder(3, [7,5,12,11,2,4,7,12]));
console.log("k=30, amount=[70,95,212,110,90,114,150,120]\n\nSort:" + getFinalOrder(30, [70,95,212,110,90,114,150,120]));
console.log("k=300, amount=[1095,2125,1210,990,980,1110,2150,1920,690,855]\n\nSort:" + getFinalOrder(300, [1095,2125,1210,990,980,1110,2150,1920,690,855]));

