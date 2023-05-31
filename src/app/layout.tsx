import './globals.css';

export const metadata = {
  title: 'Password Generator',
  description: 'Password generator app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
