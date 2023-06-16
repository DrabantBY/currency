import type { Metadata } from 'next';
import Header from '@/components/Header';
import ReduxProvider from '@/redux/provider';
import './global.scss';

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
        <div id='root'>
          <Header />
          <main>
            <ReduxProvider>{children}</ReduxProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
