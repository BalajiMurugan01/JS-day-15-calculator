const Calculator = document.querySelector(".calContainer");
Calculator.innerHTML += `
<h1>Calculator</h1>
<div class ="input">
    <input type="text" id="result" disabled >
</div>
<div class = "buttonDiv">
<div class="row">
<button onclick = "clearDisplay()" class = "btn" id = "Clearbtn">C</button>
<button onclick = "backspace()" class = "btn">←</button>
<button onclick = "appendToDisplay('.')" class = "btn">.</button>
<button onclick = "appendToDisplay('X')" class = "btn">X</button>
</div>
<div class="row">
<button onclick = "appendToDisplay('7')" class = "btn">7</button>
<button onclick = "appendToDisplay('8')" class = "btn">8</button>
<button onclick = "appendToDisplay('9')" class = "btn">9</button>
<button onclick = "appendToDisplay('/')" class = "btn">/</button>
</div>
<div class="row">
<button onclick = "appendToDisplay('4')" class = "btn">4</button>
<button onclick = "appendToDisplay('5')" class = "btn">5</button>
<button onclick = "appendToDisplay('6')" class = "btn">6</button>
<button onclick = "appendToDisplay('-')" class = "btn">-</button>
</div>
<div class="row">
<button onclick = "appendToDisplay('1')" class = "btn">1</button>
<button onclick = "appendToDisplay('2')" class = "btn">2</button>
<button onclick = "appendToDisplay('3')" class = "btn">3</button>
<button onclick = "appendToDisplay('+')" class = "btn">+</button>
</div>
<div class="row">
<button onclick = "appendToDisplay('0')" class = "btn">0</button>
<button onclick = "appendToDisplay('00')" class = "btn">00</button>
<button onclick = "calculate()" class = "btn" id = "equaltobtn">=</button>
</div>
</div>`;


    function appendToDisplay(value) {
        document.getElementById('result').value += value;
    }

    function clearDisplay() {
        document.getElementById('result').value = '';
    }

    function backspace() {
        var currentValue = document.getElementById('result').value;
        if (currentValue.length > 0) {
            var newValue = currentValue.slice(0, -1);
            document.getElementById('result').value = newValue;
        }
    }

    function calculate() {
        var expression = document.getElementById('result').value;
        try {
            var result = eval(expression);
            document.getElementById('result').value = result;
        } catch (error) {
            document.getElementById('result').value = 'Error';
        }
    }
    document.getElementById('result').addEventListener('keypress', function(event) {
        // Get the pressed key
        var key = event.key;
    
        // Check if the pressed key is not a number key (0-9)
        if (isNaN(key) || key === ' ') {
            // Display an alert warning
            alert('Only numbers are allowed');
            // Prevent the default behavior of the keypress event
            event.preventDefault();
        }
    });
    