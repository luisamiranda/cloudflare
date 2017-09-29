'use strict'

const login = {
  validateEmail: function (e) {
    const input = e.value;
    const regexRFC = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (regexRFC.test(input) === false) {
      document.getElementById("email").style.borderColor = "#E54F55";
      document.getElementById("submit").setAttribute("disabled", "true");
    } else {
      document.getElementById("email").style.borderColor = "#96C958";
    }
  },
  validatePassword: function (e) {
    const input = e.value;
    if (input.length < 6) {
      document.getElementById("password").style.borderColor = "#E54F55";
      document.getElementById("submit").setAttribute("disabled", "true");
    } else {
      document.getElementById("password").style.borderColor = "#96C958";
      document.getElementById("submit").setAttribute("disabled", "false");
    }
  }
};

const appnav = {
  showActive: function (id) {
    const link = document.getElementById(id);
    link.setAttribute("active", "true")
  }
};

const table = {
   highlightRow: function (id) {
     const row = document.getElementById(id);
     console.log(row);
     if (row.classList.contains("highlight")) {
       row.classList.remove("highlight");
     } else {
       row.className = "highlight"
     }
   }
};
