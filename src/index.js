import _ from 'lodash';
import './style.css';
import Img from './img.png';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  const myImage = new Image();

  element.innerHTML = _.join(['-->', ''], ' ');
  element.classList.add('template');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  myImage.src = Img;

  element.appendChild(btn);
  element.appendChild(myImage);
  
  return element;
}

document.body.appendChild(component());