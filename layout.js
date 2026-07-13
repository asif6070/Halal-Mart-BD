export const metadata = {
  title: 'Halal Mart BD',
  description: 'Your trusted shop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
