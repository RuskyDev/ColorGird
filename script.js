function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function getRandomShadeColor() {
  const colorTable = [
    { code: "#ff5733", name: "Red" },
    { code: "#ff8c33", name: "Orange" },
    { code: "#33aaff", name: "Blue" },
    { code: "#ffea33", name: "Yellow" },
    { code: "#33ff57", name: "Green" },
    { code: "#ff33a1", name: "Pink" },
    { code: "#7a33ff", name: "Purple" },
  ];

  const randomIndex = Math.floor(Math.random() * colorTable.length);
  return colorTable[randomIndex];
}

function GridGenerator() {
  const colorCount = {};

  for (let i = 1; i <= 1999; i++) {
    const div = document.createElement("div");
    const randomNumber = Math.floor(Math.random() * 1999) + 1;

    const randomColor = getRandomShadeColor();
    const colorCode = randomColor.code;

    // Update the color count
    colorCount[colorCode] = (colorCount[colorCode] || 0) + 1;

    div.style.backgroundColor = colorCode;
    div.title = randomColor.name;
    div.textContent = randomNumber;
    document.body.appendChild(div);
  }

  console.log("Color Count (Before User Input):", colorCount);

  document.addEventListener('keydown', function(event) {
    // Check if the pressed key is 'a'
    if (event.key === 'a') {
      const redCountInput = prompt(`Enter the amount of Reds there are:`);
      const redCount = parseInt(redCountInput) || 0;

      if (colorCount["#ff5733"] === redCount) {
        const redElements = document.querySelectorAll('[style*="background-color: #ff5733"]');
        redElements.forEach(function (redElement) {
          redElement.textContent = 'W';
          redElement.style.color = '#000000'; // Set text color to black
          redElement.style.backgroundColor = 'transparent'; // Make background transparent
        });

        console.log("Reds replaced with 'W'");
      } else {
        console.log("Incorrect count of Reds entered.");
      }
    }
  });

  console.log("Color Count (After User Input):", colorCount);
}

GridGenerator();
