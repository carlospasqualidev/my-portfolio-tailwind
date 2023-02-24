import { Header } from '@/components';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[rgb(36,36,36)] text-white">
        <Header />
        <div className="h-full px-6 overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
