    const form = document.getElementById("form");
    const fname = document.getElementById("fname")
    const lname = document.getElementById("lname")
    const email = document.getElementById("email")
    const pword = document.getElementById("pword")
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
      const pVal = pword.value;
      const meSg1 = ferr.value;
      const meSg2 = lerr.value;
      const meSg3 = eerr.value;
      const meSg4 = perr.value;

      if (fName === '') {
        fname.classList.add('error');
        ferr.classList.remove('f-er');
      } else {
        fname.classList.remove('error');
        ferr.classList.add('f-er');
      }

      if (lName === '') {
        lname.classList.add('error');
        lerr.classList.remove('l-er');
      } else {
        lname.classList.remove('error');
        lerr.classList.add('l-er');
      }

      if (eVal === '') {
        email.classList.add('error');
        eerr.classList.remove('e-er');
      } else {
        email.classList.remove('error');
        eerr.classList.add('e-er');
      }

      if (pVal === '') {
        pword.classList.add('error');
        perr.classList.remove('p-er');
      } else {
        pword.classList.remove('error');
        perr.classList.add('p-er');
      }

    });



