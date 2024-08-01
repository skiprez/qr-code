import "./globals.css";

export const metadata = {
  title: "QR Code Generator - skiprez",
  description: "QR Code Generator made by skiprez!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-900 flex flex-col items-center justify-center">
        {children}
      </body>
    </html>
  );
}