import type { Metadata } from 'next';
import Header from '@/components/Header';
import ReduxProvider from '@/redux/provider';

export const metadata: Metadata = {
  title: 'currency',
  description: 'my task for a job',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main>
          <ReduxProvider>{children}</ReduxProvider>
        </main>
      </body>
    </html>
  );
}
