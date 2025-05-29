let balance = 5.00;

function buyItem(item, price) {
  const messageEl = document.getElementById('message');
  if (balance >= price) {
    balance -= price;
    document.getElementById('balance').innerText = balance.toFixed(2);
    messageEl.textContent = `You bought a ${item}!`;
    messageEl.style.color = 'green';
  } else {
    messageEl.textContent = `Not enough money for ${item}.`;
    messageEl.style.color = 'red';
  }
}
