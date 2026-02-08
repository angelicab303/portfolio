import { ThemeProvider } from './contexts/ThemeContext';
import './globals.css';

export const metadata = {
  title: 'Angelica Borowy Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@200;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>

        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token":"94244a203b5b4139a603c6a53b49ca2f"}'
        />
      </body>
    </html>
  );
}
