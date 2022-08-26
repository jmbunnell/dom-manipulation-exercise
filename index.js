const body = document.body;

const para = document.createElement('p');
para.textContent = "Hey I'm red!";
para.style.color = 'red'; 
body.appendChild(para);

const head = document.createElement('h3');
head.textContent = "I'm a blue h3!";
head.style.color = 'blue';
body.appendChild(head);

const div = document.createElement('div');
div.setAttribute('style', 'border: solid; border-color: black; background: pink');
body.appendChild(div);

const header = document.createElement('h1');
header.textContent = "I'm in a div";
div.appendChild(header);

const paraTwo = document.createElement('p');
paraTwo.textContent = "ME TOO!";
div.appendChild(paraTwo, header);