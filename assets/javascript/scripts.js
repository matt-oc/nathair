var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://node-storage-api.herokuapp.com/leaderboard', true)

request.onload = function () {
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach((entry) => {
      console.log(entry.name, entry.score)
    })
  } else {
    console.log('error')
  }
}
var data = {"name": "Mat", "score": 10}
var body = JSON.stringify(data)


// Send request
request.send()

request.open('POST', 'https://node-storage-api.herokuapp.com/addscore', true);
request.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
request.onload = function () {
    console.log(this.responseText);
};
request.send(body);

var contactModal = document.getElementById('contactUs')
var leaderboardModal = document.getElementById('leaderboard')

contactModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

leaderboardModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})


var form = document.getElementById("contact");

    // Success and Error functions for after the form is submitted

    function success() {
      form.reset();
      alert( "Success! we will be in touch shortly.");
      document.getElementById("closeContactModal").click(); // Close the modal on success

    }

    function error() {
      alert( "Oops! There was a problem.");
    }

    // handle the form submission event from formspree.io

    form.addEventListener("submit", function(ev) {
      ev.preventDefault(); // stop the standard form POST submit so we can stay on our page and display a response to the user.
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });


  // helper function for sending an AJAX request from formspree.io

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }



$(document).ready(function() {
  setTimeout(() => { $(".loader").hide();
  $(".content").fadeIn();$(".footer").fadeIn(); $(".header").fadeIn(); }, 2000);

});