/*-----------login form -------------*/

const username = document.getElementById("input-username");
const password = document.getElementById("input-password");
const email = document.getElementById("email");
const phone = document.getElementById("phone");


function loginForm(event) {
    event.preventDefault();
    if (username.value == "") {
        alert("Bạn chưa nhập tài khoản hoặc mật khẩu ");
        return false;
      } else if(password.value == "") {
          alert("Vui lòng nhập mật khẩu");
          return false;
      }else if (username.value.length <= 6) {
          alert("Tài khoản quá ngắn. Vui lòng nhập lớn hơn 6 kí tự");
          return false;
      }else if (password.value.length <= 6) {
          alert("Mật khẩu quá ngắn. Vui lòng nhập lớn hơn 6 kí tự");
          return false;
      }
    alert('hello');
    //   window.location.href = "../dashBoardAdmin.html";
}
// function submitForm() {
//     // var username = document.forms["myLoginForm"]["uname"].value;
//     // var password = document.forms["myLoginForm"]["pw"].value;

// }