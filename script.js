let formControl = document.getElementById("formControl");
let button = document.getElementById("getFunc");
let output = document.getElementById("output");
let firstArray = document.getElementById("firstArray");
const amount = [];
let k;
const sortAmount = [];

const getFinalOrder = (k, amount) => {
  while (!amount.every((a) => a <= 0)) {
    /// Döngünün ne kadar döneceğini belirliyor.
    amount.map((i, ind) => {
      if (i <= k && i !== 0 && i > 0) {
        sortAmount.push(ind + 1);
        amount[ind] = i - k;
      } else {
        amount[ind] = i - k;
      }
    });
  }
  console.log(sortAmount);
};
getFinalOrder(k, amount);

formControl.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = {};
  if (amount.length == 0) {
    for (let field of formData) {
      const [key, value] = field;
      amount.push(Number(value));
    }
  }
  k = amount.pop(amount[amount.length - 1]);
  getFinalOrder(k, amount);
  output.innerHTML = `Sıralama : [${sortAmount}]`;
};
