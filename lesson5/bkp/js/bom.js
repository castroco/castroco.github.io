const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');
button.addEventListener('click', () => {
  //alert("en la funcion");
  if (input.value != '') {
      let li = document.createElement('li');
      let deletebutton = document.createElement('button');
      li.textContent = input.value;
      deletebutton.textContent = 'x';
      li.append(deletebutton);
      list.append(li);
      input.value = '';
      input.focus();
      deletebutton.onclick = function() {
          list.removeChild(li);
          input.focus();
      }
  }
});

  /*
  let li = document.createElement('____');
  deleteButton.addEventListener('click', function() {
    // this line of code should use the removeChild() (Links to an external site.) method
    // this line of code should move the cursor back to the input box using the focus (Links to an external site.) method. 
  });

  const sect = document.querySelector('section');

  const para = document.createElement('p');
  para.textContent = 'We hope you enjoyed the ride.';

  sect.appendChild(para);

  const text = document.createTextNode(' — the premier source for web development knowledge.');

  const linkPara = document.querySelector('p');
  linkPara.appendChild(text);

  Node.cloneNode()

  sect.removeChild(linkPara);
  linkPara.remove();

  linkPara.parentNode.removeChild(linkPara); /* older browser  */


