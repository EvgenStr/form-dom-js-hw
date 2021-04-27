'use strict';
const form = document.getElementById("form");
const arr = [];

form.addEventListener('submit', (event) => {
  event.preventDefault()
  if (!event.target.reportValidity()) return;
  const { target, target:
    { elements: {
      test: { value }
    }
    } } = event;
  arr.push(value);
  target.reset();
  const li = document.createElement('li');
  const del = document.createElement('button');
  const span = document.createElement('span');
  const ul = document.getElementById('list');
  span.innerText = value;
  del.innerText = "delete";
  del.addEventListener('click', deleteParent)
  li.append(span, del);
  ul.append(li);
})
function deleteParent({ target: { parentNode } }) {
  arr.splice(arr.indexOf(parentNode.childNodes[0].innerText), 1);
  parentNode.remove();
};