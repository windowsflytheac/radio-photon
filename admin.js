let isAdmin = false;

function login() {
  const pass = prompt("Enter admin password:");
  if (pass === "GLaDOS_Override") {
    isAdmin = true;
    alert("Admin access granted! You can toggle stations.");
  } else {
    alert("Access denied!");
  }
}
