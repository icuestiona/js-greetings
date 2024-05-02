function displayGreeting() {
  const nameInput = document.getElementById("nameInput");
  const userName = nameInput.value.trim();

  if (userName) {
    alert(`Hello, ${userName}, have a wonderful day!`);
  } else {
    alert("Please enter your name.");
  }
}
