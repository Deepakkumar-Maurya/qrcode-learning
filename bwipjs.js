const fs = require("fs").promises; // Import promises-based file system methods
const bwip = require("bwip-js");

async function generateBarcode(
    text = "Hello World",
    filename = "barcode.jpeg"
) {
    try {
        const buffer = await bwip.toBuffer({
            bcid: "azteccode",
            text,
            scale: 3,
            // height: 10,
            // width: 10,
            barcolor: "#000000",
            includetext: true,
            bordercolor: "#ff0000",
            borderwidth: 5,
            backgroundcolor: "#ffffff",
        });
        await fs.writeFile(filename, buffer); // Write buffer to a file
        console.log(`QR code generated and saved as: ${filename}`);
    } catch (error) {
        console.error("Error generating or saving barcode:", error);
    }
}

generateBarcode(); // Call the function to generate the QR code
