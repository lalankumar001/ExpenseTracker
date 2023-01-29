const form = document.querySelector('form');
const ul = document.querySelector('ul');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const description = form.description.value;
    const amount = form.amount.value;
    const li = document.createElement('li');
    li.innerHTML = `<span>Description: ${description}</span>
    <span>Amount: ${amount}</span>`;
    ul.appendChild(li);
});