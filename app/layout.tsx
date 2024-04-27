// ./app/layout.js

// app/layout.tsx


export const metadata = {
  title: 'Kjærs Boligudlejning',
  description: 'Boligudlejning',
}


// app/layout.tsx
import { fonts } from './fonts'
import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en' className={fonts.rubik.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

