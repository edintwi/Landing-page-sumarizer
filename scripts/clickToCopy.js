const outputTextArea = document.querySelector("#output-textarea");
const inputTextArea = document.querySelector("#input-textarea");
const copyButton = document.querySelector("#copy-btn");
const dowloadButton = document.querySelector("#download-btn");
const resumeButton = document.querySelector("#resume-btn");

function textTransform() {
  var text = inputTextArea.value;
  outputTextArea.value = text;
  console.log(text);
}

function dowloadText() {}
function clickToCopy() {
  outputTextArea.select();
  outputTextArea.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(outputTextArea.value);

  alert("Texto copiado.");
}
copyButton.addEventListener("click", clickToCopy);
resumeButton.addEventListener("click", textTransform);
