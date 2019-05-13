var apiKey = 'fa7d80c48643dfadde2cced1b1be6ca1';

document.getElementById('weatherSubmit').addEventListener('click', function(event) {
  event.preventDefault();
  var request = new XMLHttpRequest();
  var location = document.getElementById('location').value;
  request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + location + ',us&units=imperial&appid=' + apiKey, true);
  request.addEventListener('load', function() {
    if (request.status >= 200 && request.status < 400) {
      var response = JSON.parse(request.responseText);
      document.getElementById('weatherData').textContent = 'Current Temperature: ' + response.main.temp + ' °F';
      console.log(response);
    } else {
      console.log(`An error occurred: ${request.statusText}`)
    }
  });
  request.send(null);
});

document.getElementById('postSubmit').addEventListener('click', function(event) {
  event.preventDefault();
  var request = new XMLHttpRequest();
  var payload = {firstName:null};
  payload.firstName = document.getElementById('firstName').value;
  request.open('POST', 'https://httpbin.org/post', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.addEventListener('load', function() {
    if (request.status >= 200 && request.status < 400) {
      var response = JSON.parse(request.responseText);
      document.getElementById('postData').textContent = 'Response: ' + response.data;
      console.log(response);
    } else {
      console.log(`An error occurred: ${request.statusText}`)
    }
  });
  request.send(JSON.stringify(payload));
});
