'use strict';
const form = document.getElementById("form");
const arr = [];

form.addEventListener('submit', (event) => {
  event.preventDefault()
  if (!event.target.reportValidity()) return;
  const { target, target: { elements: { test: { value } } } } = event;
  arr.push(value);
  target.reset();
  const li = document.createElement('li');
  const del = document.createElement('button');
  const span = document.createElement('span');
  const ul = document.getElementById('list');
  span.innerText = value;
  del.innerText = "delete";
  del.addEventListener('click', ({target}) => {
    // arr.splice(arr.indexOf(e.target.parentNode.childNodes[0].data), 1);
    arr.splice(arr.indexOf(target.parentNode.childNodes[0].innerText), 1);
    // console.dir(e.target.parentNode.childNodes[0].data)
    // console.dir(e.target.parentNode.childNodes[0].innerText)

    target.parentNode.remove()
  })
  li.append(span, del);

  ul.append(li);

})