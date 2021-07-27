let campo = document.querySelector('#email');
    campo.addEventListener('submit', function (event) {
      let email = document.querySelector('input').value;
      let campo = document.querySelector('#email');
      let resul = email.indexOf('@'); 
      if(resul!= -1) {
        return true;
      } else {
        event.preventDefault();
        campo.style.border = '2px solid hsl(0, 93%, 68%)';
        document.querySelector('#error').style.display = "block";
        document.querySelector('#msgEr').style.display = "block";
      }
      });