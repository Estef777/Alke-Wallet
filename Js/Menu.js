const balances = {
    USD: 1000,
    EUR: 500,
    GBP: 2000
};

const depositModal = document.getElementById('deposit-modal');
const withdrawModal = document.getElementById('withdraw-modal');

const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');

const depositForm = document.getElementById('deposit-form');
const withdrawForm = document.getElementById('withdraw-form');

const usdBalance = document.getElementById('usd-balance');
const eurBalance = document.getElementById('eur-balance');
const gbpBalance = document.getElementById('gbp-balance');

const updateBalances = () => {
    usdBalance.textContent = balances.USD.toFixed(2);
    eurBalance.textContent = balances.EUR.toFixed(2);
    gbpBalance.textContent = balances.GBP.toFixed(2);
};

depositBtn.addEventListener('click', () => {
    depositModal.style.display = 'block';
});

withdrawBtn.addEventListener('click', () => {
    withdrawModal.style.display = 'block';
});

depositForm.addEventListener


