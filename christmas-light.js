let currentLight = 0;
let middleLight = 4;
let interval = 1000;
const lights = document.querySelectorAll('.light');
const toggleButton = document.querySelector('#toggleButton');
const intervalInput = document.querySelector('#intervalInput');

toggleButton.addEventListener('click', () => {
  if(interval) {
    clearInterval(interval);
    interval = null;
    toggleButton.textContent = '開始';
    lights.forEach(light => light.style.opacity = '1');
  } else {
    changeLightIntensity();
    const intervalTime = intervalInput.value ? parseInt(intervalInput.value) : 100; 
    interval = setInterval(changeLightIntensity, intervalTime);
    toggleButton.textContent = '停止';
  }
});

function changeLightIntensity() {
  lights[currentLight].style.opacity = '0.5';
  lights[middleLight].style.opacity = '0.5'; 
  currentLight = (currentLight + 1) % lights.length;
  middleLight = (middleLight + 1) % lights.length;
  lights[currentLight].style.opacity = '1';
  lights[middleLight].style.opacity = '1'; 
}




