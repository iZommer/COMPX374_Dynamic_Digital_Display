import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kei Hea a Nic? | Academic Portal",
  description: "Manage office availability, calendar, and contact details.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
