//Created by Brandon Oyer, August 2016

function updateDisplay(displayText) {
  document.getElementById('display').textContent = displayText;
}

function getUSDPrice(callback) {
    var url = 'https://blockchain.info/ticker'
    var x = new XMLHttpRequest();
    x.open('GET', url);
    x.responseType = 'json';
    x.onload = function() {
      var response = x.response;
      callback(response.USD.last);
    }
    x.send();
}

document.addEventListener('DOMContentLoaded', function() {
    getUSDPrice(function(price) {
      updateDisplay(price);
    });
});
