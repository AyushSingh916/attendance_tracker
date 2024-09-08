const fs = require('fs');
const path = require('path');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf');

// Function to extract text from PDF given its path (file system path)
async function extractTextFromPDF(filePath) {
    const data = new Uint8Array(fs.readFileSync(filePath));

    // Load the PDF document
    const pdf = await pdfjsLib.getDocument({ data }).promise;

    let extractedText = '';

    // Loop through each page of the PDF
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);

        // Get the text content of the page
        const textContent = await page.getTextContent();

        // Extract text from items on the page
        textContent.items.forEach((item) => {
            extractedText += item.str + ' ';
        });
    }

    // Log the extracted text to the console
    console.log(extractedText);
}

// Example usage:
// Provide the file path to your PDF file here
const pdfPath = path.join(__dirname, 'Academic_Calendar_year_234_2024-25.pdf');
extractTextFromPDF(pdfPath).catch(console.error);
