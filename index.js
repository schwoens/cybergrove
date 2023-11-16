fillFlags();
fillLineNumbers();

// update line numbers on window resize
onresize = () => {
  fillLineNumbers(); 
};

function fillFlags() {
  let html = "";
  for (let i = 0; i < 6; i++) {
    html += '<span class="wave">';
    for (let j = 0; j < 16; j++) {
      html += '<span>#</span>';
    }
    html += '</span>';
  }

  let elements = document.querySelectorAll('.flag');
  elements.forEach.call(elements, function(element) {
    element.innerHTML = html;
  }); 

}

function fillLineNumbers() {
  const DEFAULT_LINE_SPACING = 1.2;
  const LI_HEIGHT = 28;
  let html = "";
  let lineNumbers = document.querySelector('#line-numbers'); 
  let main = document.querySelector('main'); 

  let contentHeight = main.offsetHeight;

  let lineNumberAmount = Math.round(contentHeight / (LI_HEIGHT + DEFAULT_LINE_SPACING));

  console.log(lineNumberAmount);
  while (lineNumberAmount > 0) {
    html += '<li></li>'; 
    lineNumberAmount--;
  }
  lineNumbers.innerHTML = html;
}
