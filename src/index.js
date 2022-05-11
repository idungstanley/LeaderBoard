import './style.css';
import UI from '../modules/UI.js';

const formInput = document.getElementById('form');
formInput.addEventListener('submit', (event) => UI.showScore(event));
