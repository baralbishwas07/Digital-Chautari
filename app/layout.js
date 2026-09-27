import "./globals.css";

export const metadata = {
  title: "Digital Chautari",
  description: "A creative technology company in Kathmandu, Nepal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
