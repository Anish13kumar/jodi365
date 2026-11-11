import type { Metadata } from "next";
import "./globals.css";
import VersionSwitcher from "./version-switcher";

export const metadata: Metadata = {
  title: "S. Anil Kumar — The Person Behind the Connection | Jodi365",
  description: "Researcher, entrepreneur, investor, and the founder of Jodi365. Meet S. Anil Kumar and discover the human belief behind meaningful connections.",
  openGraph: {
    title: "S. Anil Kumar — Founder & CEO of Jodi365",
    description: "The person, the purpose, and the story behind Jodi365.",
    images: [{ url: "/images/anil-founder-portrait-v4.jpg", width: 1122, height: 1402 }],
    type: "profile",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "S. Anil Kumar",
          jobTitle: "Founder & CEO",
          url: "https://www.anil-kumar.com/",
          worksFor: { "@type": "Organization", name: "Jodi365", url: "https://www.jodi365.com/" },
          alumniOf: ["Indian Institute of Technology Madras", "University of Iowa", "University of Michigan", "University of Chicago Booth School of Business"].map(name => ({ "@type": "CollegeOrUniversity", name })),
          sameAs: ["https://www.linkedin.com/in/sakumar/", "https://www.instagram.com/aktxm/", "https://www.youtube.com/@s-anil-kumar"],
        }) }} />
        {children}
        <VersionSwitcher />
      </body>
    </html>
  );
}
