function countDown(start, end, callback) {
    if (start >= end) {
      document.getElementById("countdown").innerHTML = start;
      setTimeout(function() {
        countDown(start - 1, end, function() {
          if (start === end + 1) {
            callback();
          }
        });
      }, 1000);
    }
  }
  
  function showMessage() {
    document.getElementById("countdown").innerHTML = "Happy Independence Day!";
  }
  
  countDown(10, 1, showMessage);
  