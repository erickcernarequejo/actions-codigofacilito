const counter = document.querySelector('#counter');
const buildInfo = document.querySelector('#build-info');
let value = 0;

function renderCounter() { counter.textContent = value; }
document.querySelector('#decrement').addEventListener('click', () => { value -= 1; renderCounter(); });
document.querySelector('#increment').addEventListener('click', () => { value += 1; renderCounter(); });
document.querySelector('#reset').addEventListener('click', () => { value = 0; renderCounter(); });

fetch('./build-info.json')
  .then((response) => {
    if (!response.ok) throw new Error('Sin información de build');
    return response.json();
  })
  .then(({ commit, run }) => { buildInfo.textContent = `Build #${run} · ${commit}`; })
  .catch(() => { buildInfo.textContent = 'Entorno local'; });
