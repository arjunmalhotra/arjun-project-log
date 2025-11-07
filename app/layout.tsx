import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Arjun's Project Log",
  description: "A collection of projects and build logs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <header className="bg-white border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-6 py-8">
              <Link href="/" className="hover:opacity-70 transition-opacity">
                <h1 className="text-2xl font-semibold text-gray-900">Arjun's Project Log</h1>
                <p className="text-gray-600 mt-1">Building with Claude Code and more</p>
              </Link>
            </div>
          </header>

          {/* Main Content */}
          <main className="max-w-4xl mx-auto px-6 py-12">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-gray-200 bg-white mt-20">
            <div className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
              © 2025 Arjun Malhotra
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
