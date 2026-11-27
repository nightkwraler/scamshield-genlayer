const subject = document.getElementById("subject");
const counter = document.getElementById("counter");
const button = document.getElementById("analyze");
const notice = document.getElementById("notice");

subject.addEventListener("input", () => {
  counter.textContent = `${subject.value.length} / 1200 characters`;
});

button.addEventListener("click", () => {
  const value = subject.value.trim();

  if (value.length < 4) {
    notice.textContent = "Please enter a URL or suspicious message first.";
  } else {
    notice.textContent =
      "Input received. Connecting to the GenLayer contract is the next step.";
  }

  notice.style.display = "block";
});
