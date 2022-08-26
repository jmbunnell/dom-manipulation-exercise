const body = document.body;

const para = document.createElement('p');
para.textContent = "Hey I'm red!";
body.appendChild(para);
para.style.color = 'red'; 

const header = document.createElement('h3');
header.textContent = "I'm a blue h3!";
body.appendChild(header);
header.style.color = 'blue';