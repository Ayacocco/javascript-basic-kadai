const textBtn = document.getElementById('btn');

textBtn.addEventListener('click',() => {
  document.getElementById('text').innerHTML = 'ボタンがクリックされました';
});