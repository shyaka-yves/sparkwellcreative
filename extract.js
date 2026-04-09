const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('public/in Pitch Deck Presentation_unlocked.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('pdf_content.txt', data.text);
    console.log('PDF text extracted successfully');
}).catch(err => {
    console.error('Error extracting PDF:', err);
});
