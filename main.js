import {createItems, createWastefulLoop, createConservativeLoop} from './algorithms.js';
import {rotate} from './anim.js';

const square = document.getElementById('spinner');
rotate(square);


const items = createItems(10000000);


const conservative = createConservativeLoop(items);

document.getElementById('conservative')
    .addEventListener('click', conservative);


const wasteful = createWastefulLoop(items);

document.getElementById('wasteful')
    .addEventListener('click', wasteful);
