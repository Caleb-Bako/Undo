document.addEventListener("DOMContentLoaded", () => {
    const myButton = document.getElementById("btn");
    let textarea = document.getElementById("myTextarea");
    let prev = []; 
    let currentText = ""; 

    textarea.addEventListener("input", () => {
        if (textarea.value !== currentText) { 
            prev.push(currentText); 
            currentText = textarea.value; 
        }
        console.log("History:", prev); 
    });
    function undo() {
        if (prev.length > 0) {
            currentText = prev.pop();
            textarea.value = currentText; 
        }
        console.log("After Undo:", prev);
    }

    myButton.addEventListener("click", (event) => {
        event.preventDefault();
        undo()
      });
      
    textarea.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.code === 'KeyZ') {
            event.preventDefault();
            undo()
        }
      });      
  });
  