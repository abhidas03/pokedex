import './globals.css'


export const metadata = {
  title: 'Pokedex',
  description: 'Pokemon Search Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
