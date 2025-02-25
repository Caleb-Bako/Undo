document.addEventListener("DOMContentLoaded", () => {
    let textarea = document.getElementById("myTextarea");
    let output = []; 
    const myButton = document.getElementById("btn");
    
    textarea.addEventListener("input", () => {
      output = textarea.value.trim().split(/\s+/);
      if (textarea.value.trim() === "") {
        output = [];
      }
      
      console.log("Current value:", textarea.value);
    });

    function undo(){
        output.pop()
        textarea.value = output.join(" ");
        console.log("Output array:", output);
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
  