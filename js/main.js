//This technique is KISS- Keep it short and simple.
var timesclicked = 1;
function toggle() {
  timesclicked++;
  // For Annual Rates
  if (timesclicked % 2 == 0) {
    document.getElementById("basic_digits").innerHTML = "199.99";
    document.getElementById("professional_digits").innerHTML = "249.99";
    document.getElementById("master_digits").innerHTML = "399.99";
  }
  //   For Monthly Rates
  else {
    document.getElementById("basic_digits").innerHTML = "19.99";
    document.getElementById("professional_digits").innerHTML = "24.99";
    document.getElementById("master_digits").innerHTML = "39.99";
  }
}
