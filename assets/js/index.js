'use strict';
const form = document.getElementById("form");
const arr = [];

form.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log( event.target.reportValidity())
  const { target, target: { elements: { test: { value } } } } = event;
  arr.push(value);
  target.reset();
  const li = document.createElement('li');
  li.innerText = value;
  const del = document.createElement('button');
  del.innerText = "delete";
  del.addEventListener('click', (e) => {
    arr.splice(arr.indexOf(e.target.parentNode.childNodes[0].data), 1);
    console.dir(e.target.parentNode.childNodes[0].data)
    e.target.parentNode.remove()
  })
  li.append(del);
  const ul = document.getElementById('list');
  ul.append(li);
  
})