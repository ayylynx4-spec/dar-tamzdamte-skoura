import "./globals.css";

export const metadata = {
  title: "Dar Tamzdamte Skoura",
  description:
    "Dar Tamzdamte is a warm guesthouse in the heart of Skoura Oasis, offering calm stays, local food, and slow living.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
