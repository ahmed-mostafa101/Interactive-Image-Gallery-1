const gallery = document.querySelector('.gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');

next.addEventListener('click', () => {
  let items = document.querySelectorAll('.item');
  document.querySelector('.gallery').appendChild(items[0]);
});

prev.addEventListener('click', () => {
  let items = document.querySelectorAll('.item');
  document.querySelector('.gallery').prepend(items[items.length - 1]);
});

function openModal(src) {
  modalImage.src = src;
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}



