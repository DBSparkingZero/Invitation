const inviteBtn = document.getElementById('inviteBtn');
const message = document.getElementById('message');
const year = document.getElementById('year');

inviteBtn.addEventListener('click', () => {
  message.classList.remove('hidden');
  setTimeout(() => message.classList.add('visible'), 10);
  inviteBtn.disabled = true;
});

year.textContent = new Date().getFullYear();
