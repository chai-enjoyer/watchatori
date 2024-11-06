function login() {
    const username = document.getElementById("username").value;
    if (username) {
      localStorage.setItem("user", username);
      document.getElementById("loginModal").modal('hide');
      showUser(username);
    }
  }
  
  function logout() {
    localStorage.removeItem("user");
    // Update the UI for logged-out state
  }
  
  function checkLoginStatus() {
    const user = localStorage.getItem("user");
    if (user) {
      showUser(user);
    } else {
      // Show login button
    }
  }
  
  document.addEventListener("DOMContentLoaded", checkLoginStatus);
  