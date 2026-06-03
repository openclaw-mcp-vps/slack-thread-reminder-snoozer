import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Thread Snoozer — Snooze Slack threads until you can focus",
  description: "Snooze Slack threads and resurface them at scheduled times when you're ready to engage. Stop context switching, stay in flow."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="06cb859a-ee61-4214-a3ed-126993fbbe29"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
