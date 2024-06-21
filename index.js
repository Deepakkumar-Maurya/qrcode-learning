// Require the package
const QRCode = require("qrcode");

// Creating the data
let data = {
    name: "Hardik",
    age: 32,
    department: "Full stack developer",
    id: "52587yu8j",
};

const name = "Deepak Maurya";

// Converting the data into String format
let stringdata = JSON.stringify(data);

// Print the QR code to terminal
QRCode.toString(stringdata, { type: "terminal" }, function (err, QRcode) {
    if (err) return console.log("error occurred");

    // Printing the generated code
    console.log(QRcode)
});

// Converting the data into base64
QRCode.toDataURL(name, function (err, code) {
    if (err) return console.log("error occurred");

    // Printing the code
    console.log(code);
});
