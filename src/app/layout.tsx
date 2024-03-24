import { PageWrapper } from '@/widgets/PageWrapper/PageWrapper';
import '@/shared/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
