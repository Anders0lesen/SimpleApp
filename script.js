document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");
    const correctButton = document.getElementById("correctButton");
    const output = document.getElementById("output");
    const showCodeButton = document.getElementById("showCodeButton");
    const codeView = document.getElementById("codeView");
    const codeContent = document.getElementById("codeContent");

    correctButton.addEventListener("click", function () {
        const inputText = textInput.value;
        const correctedText = correctText(inputText); // Call the text correction function
        output.innerHTML = `<p>Corrected Text:</p><p>${correctedText}</p>`;
    });

    showCodeButton.addEventListener("click", function () {
        // Toggle the visibility of the code view
        codeView.classList.toggle("hidden");

        // Populate the <pre> element with the contents of script.js
        if (!codeView.classList.contains("hidden")) {
            codeContent.textContent = `document.addEventListener("DOMContentLoaded", function () {\n${document.getElementById("scriptJS").textContent}\n});`;
        }
    });

    function correctText(text) {
        // Define the replacement schema
        const replacements = {
            Heineken: "HEINEKEN®",
            Desperados: "DESPERADOS®",
            Amstel: "AMSTEL®",
            Tiger: "TIGER®"
        };

        // Use a regular expression to find and replace the words
        for (const word in replacements) {
            if (replacements.hasOwnProperty(word)) {
                const replacement = replacements[word];
                const regex = new RegExp(`\\b${word}\\b`, "gi"); // "gi" for global and case-insensitive replacement
                text = text.replace(regex, replacement);
            }
        }

        return text;
    }
});
