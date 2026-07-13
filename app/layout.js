export const metadata = {
  title: 'Halal Mart BD',
  description: 'Official e-commerce website for Halal Mart BD',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
