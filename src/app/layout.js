import FloatingButtons from "@/components/FloatingButtons";
import "./globals.css";
export const metadata = {
  title: "Ghorpade Classes",
  description: "Coaching Classes in Pune",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
        <FloatingButtons/>
      </body>
    </html>
  );
}