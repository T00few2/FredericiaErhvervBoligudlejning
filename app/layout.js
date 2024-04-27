// ./app/layout.js

export const metadata = {
  title: 'Kjærs Boligudlejning',
  description: 'Boligudlejning',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
