const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circleNum');

let currentActive = 1;

next.addEventListener('click', () => {
  if (currentActive < circles.length) {
    currentActive++;
    update();
  } else {
    currentActive = circles.length;
  }
});

prev.addEventListener('click', () => {
  if (currentActive <= 1) {
    currentActive = 1;
  } else {
    currentActive--;
    update();
  }
});

function update() {
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
    // circles(object)와 circle(parameter)을 구분해야
    // const actives = document.querySelectorAll('.active');
    // progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    const actives = document.querySelectorAll('.active');
    // (active circle 수 / 전체 circle 수)
    console.log(actives.length, circles.length);
    progress.style.width = `${
      ((actives.length - 1) / (circles.length - 1)) * 90
    }%`;
  });

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === 4) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
