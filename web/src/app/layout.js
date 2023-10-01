import './styles/globals.css'

export const metadata = {
  title: 'Beholdr',
  description: 'DnD SRD viewer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
