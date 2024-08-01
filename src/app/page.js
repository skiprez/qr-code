"use client";
import { useState } from "react";
import { TextField, Button, IconButton, Snackbar, Alert } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import QRCode from "qrcode.react";
import "./globals.css"; // Include global styles for animations

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [showAlert, setShowAlert] = useState(false);

  const handleGenerate = () => {
    if (inputValue.trim() === "") {
      setAlertMessage("Input cannot be empty. Please enter some text or URL.");
      setAlertSeverity("error");
    } else {
      setQrValue(inputValue);
      setAlertMessage("QR Code Generated!");
      setAlertSeverity("success");
    }
    setShowAlert(true);
  };

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className={`flex flex-col items-center justify-center p-6 w-[400px] min-h-[600px] h-auto mt-[200px] rounded-lg shadow-2xl ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-900'} transition-all duration-500`}>
      <div className="relative w-full mb-4">
        <h1 className="text-3xl font-bold mb-2">QR Code Generator</h1>
        <IconButton
          onClick={handleThemeChange}
          className="absolute top-0 right-0"
        >
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </div>
      <TextField
        label="Enter Text or URL"
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        InputLabelProps={{
          style: { color: darkMode ? 'white' : 'inherit' },
        }}
        InputProps={{
          style: { color: darkMode ? 'white' : 'inherit' },
        }}
        className="mb-4"
      />
      <Button variant="contained" color="primary" onClick={handleGenerate}>
        Generate QR Code
      </Button>
      <div className="mt-8 animate-fadeIn">
        {qrValue && (
          <QRCode
            value={qrValue}
            size={256}
            // bgColor={darkMode ? "#333" : "#fff"}
            // fgColor={darkMode ? "#fff" : "#000"}
          />
        )}
      </div>
      <Snackbar
        open={showAlert}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity={alertSeverity}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}