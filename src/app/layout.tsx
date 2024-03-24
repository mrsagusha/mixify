import { PageWrapper } from '@/widgets/PageWrapper/PageWrapper';

import { StoreProvider } from '@/app/store/ReduxProvider';

import '@/shared/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <PageWrapper>{children}</PageWrapper>
        </StoreProvider>
      </body>
    </html>
  );
}
