    const form = document.getElementById("form");
    const fname = document.getElementById("fname")
    const lname = document.getElementById("lname")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const submit = document.getElementById("submit")


    function validateEmail(email) {
      var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fName = fname.value;
      const lName = lname.value;
      const eVal = email.value;
      const pVal = password.value;


      if (fName === '') {
        fname.classList.add('error');
        ferr.classList.remove('f-er');
        errf.classList.remove('icon');
      } else {
        fname.classList.remove('error');
        ferr.classList.add('f-er');
        errf.classList.add('icon');
      }

      if (lName === '') {
        lname.classList.add('error');
        lerr.classList.remove('l-er');
        errl.classList.remove('icon');
      } else {
        lname.classList.remove('error');
        lerr.classList.add('l-er');
        errl.classList.remove('icon');
      }

      if (eVal === '') {
        email.classList.add('error');
        eerr.classList.remove('e-er');
        erre.classList.remove('icon');
      } else {
        email.classList.remove('error');
        eerr.classList.add('e-er');
        erre.classList.remove('icon');
      }

      if (pVal === '') {
        password.classList.add('error');
        perr.classList.remove('p-er');
        errp.classList.remove('icon');
      } else {
        password.classList.remove('error');
        perr.classList.add('p-er');
        errp.classList.remove('icon');
      }

    });



