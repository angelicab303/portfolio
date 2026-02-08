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

        {/* Plausible Analytics */}
        <script
          async
          src="https://plausible.io/js/pa-uJKh-FdOy6XgVB6R-CC3x.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.plausible = window.plausible || function() {
                (plausible.q = plausible.q || []).push(arguments)
              };
              plausible.init = plausible.init || function(i) {
                plausible.o = i || {};
              };
              plausible.init();
            `,
          }}
        />
      </body>
    </html>
  );
}
