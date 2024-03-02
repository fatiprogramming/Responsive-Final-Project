const title = document.querySelector('.title');
const text = document.querySelector('.text');
const option1 = document.querySelector('.option-1');
const option2 = document.querySelector('.option-2');
const option3 = document.querySelector('.option-3');
const options = document.querySelector('.options');
const restart = document.querySelector('.restart');

function changeText(event) {
  if (event.target.value === 'option1') {
    title.innerHTML = 'Amazing!';
    text.innerHTML = `<em>Congrats!</em> You found a rare treasure. Maybe you can go back to Earth and make history`;
    options.style.display = 'none';
    restart.style.display = 'block';
  }
  if (event.target.value === 'option2') {
    title.innerHTML = 'An alien!';
    text.innerHTML = `You found an alien`;
    setTimeout(function () {
      restart.disabled = true;
      for (let i = 0; i < 3; i++) {
        setTimeout(function () {
          text.innerHTML += '.';
        }, (i + 1) * 500);
      }
      setTimeout(function () {
        text.innerHTML += ` It seems he wants to kill you, <strong>RUN!</strong>`;
        restart.disabled = false;
      }, 2000);
    }, 250);

    options.style.display = 'none';
    restart.style.display = 'block';
  }
  if (event.target.value === 'option3') {
    title.innerHTML = 'You died!';
    text.innerHTML = `<strong>You died of boredom</strong>`;
    options.style.display = 'none';
    restart.style.display = 'block';
  }
}
option1.addEventListener('click', changeText);
option2.addEventListener('click', changeText);
option3.addEventListener('click', changeText);
restart.addEventListener('click', function () {
  restart.style.display = 'none';
  title.innerHTML = 'You landed!';
  text.innerHTML = ` It seems you have discovered a new planet. You see a shadow on
              each of your sides. <br /><strong>What should you do?</strong>`;
  options.style.display = 'block';
});
