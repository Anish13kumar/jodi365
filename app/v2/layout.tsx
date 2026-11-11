import type { Metadata } from "next";
import "./v2.css";

export const metadata: Metadata = {
  title: "S. Anil Kumar — Founder of Jodi365 (v2 preview)",
  description: "Researcher, entrepreneur, investor and occasional actor. Meet S. Anil Kumar, the founder of Jodi365.",
  robots: { index: false, follow: false },
};

export default function V2Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
