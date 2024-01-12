document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");
    const correctButton = document.getElementById("correctButton");
    const output = document.getElementById("output");

    correctButton.addEventListener("click", function () {
        const inputText = textInput.value;
        const correctedText = correctText(inputText); // Call the text correction function
        output.innerHTML = `<p>Corrected Text:</p><p>${correctedText}</p>`;
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
                const regex = new RegExp(`\\b${word}\\b`, "gi");
                text = text.replace(regex, replacement);
            }
        }

        return text;
    }
});
