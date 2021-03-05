var trySubmit = function () {
  var add = document.getElementById("input-address").value;
  var amt = document.getElementById("input-amount").value;
  var otp = document.getElementById("input-otp").value;
  var letterNumber = /^[0-9a-zA-Z]+$/;
  var success = document.getElementById("alert-submit");
  var failure = document.getElementById("alert-cannot-submit");
  if (add.length >= 26 && add.length <= 35 && add.match(letterNumber)) {
    if (amt < 9999999) {
      if (otp.length == 6) {
        success.classList.remove("hide");
        failure.classList.add("hide");
        setTimeout(() => {
          location.reload();
        }, 8000);
      } else {
        if (failure.classList.contains("hide")) {
          failure.classList.remove("hide");
        }
      }
    } else {
      if (failure.classList.contains("hide")) {
        failure.classList.remove("hide");
      }
    }
  } else {
    if (failure.classList.contains("hide")) {
      failure.classList.remove("hide");
    }
  }
};

var checkAdd = function () {
  var add = document.getElementById("input-address").value;
  var alertAdd = document.getElementById("alert-address");
  var letterNumber = /^[0-9a-zA-Z]+$/;
  if (add.length >= 26 && add.length <= 35 && add.match(letterNumber)) {
    if (!alertAdd.classList.contains("hide")) {
      alertAdd.classList.add("hide");
    }
  } else {
    if (alertAdd.classList.contains("hide")) {
      alertAdd.classList.remove("hide");
    }
  }
};

var checkAmt = function () {
  var alertAmount = document.getElementById("alert-amount");
  var amt = document.getElementById("input-amount").value;
  if (amt < 9999999) {
    if (!alertAmount.classList.contains("hide")) {
      alertAmount.classList.add("hide");
    }
  } else {
    if (alertAmount.classList.contains("hide")) {
      alertAmount.classList.remove("hide");
    }
  }
};

var checkOTP = function () {
  var alertOTP = document.getElementById("alert-otp");
  var otp = document.getElementById("input-otp").value;
  if (otp.length == 6) {
    if (!alertOTP.classList.contains("hide")) {
      alertOTP.classList.add("hide");
    }
  } else {
    if (alertOTP.classList.contains("hide")) {
      alertOTP.classList.remove("hide");
    }
  }
};
