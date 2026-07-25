import './globals.css';

export const metadata = {
  title: 'Empowered STEM Youth',
  description: 'Empowering the next generation of innovators.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}