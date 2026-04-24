import FloatingButtons from "@/components/FloatingButtons";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Best Coaching Classes in Wadaki (Saswad Rd) | Ghorpade Classes",
  description:
    "Top coaching classes near Wadaki, Saswad Rd (Pune). Expert teachers for Math & Science. Visit Ghorpade Classes, Datta Colony.",
  keywords: [
    "coaching classes in Wadaki",
    "classes near Saswad Road Pune",
    "tuition classes Wadaki Pune",
    "math classes Wadaki",
    "coaching classes Datta Colony Wadaki"
  ],
  metadataBase: new URL("https://ghorpade-classes-landing-page.vercel.app"),
  alternates: {
    canonical: "/",
  },
  
  openGraph: {
    title: "Best Coaching Classes in Wadaki Pune",
    description: "Top classes near Saswad Rd with expert teachers.",
    url: "https://ghorpade-classes-landing-page.vercel.app",
    siteName: "Ghorpade Classes",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="4VWYTrqsITb2Qh3iWh0fdPtYqR5Tyz24DPb5_x6GKZs" />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "Ghorpade Classes",
      url: "https://ghorpade-classes-landing-page.vercel.app",
      telephone: "+91XXXXXXXXXX",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "1262, Saswad Rd, Datta Colony, Pimpalmala, Wadaki",
        addressLocality: "Wadaki",
        addressRegion: "Maharashtra",
        postalCode: "412308",
        addressCountry: "IN",
      },
      areaServed: ["Wadaki", "Saswad Road", "Pune"],
    }),
  }}
/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}