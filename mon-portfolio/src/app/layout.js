import '../styles/globals.css';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
        <div className="relative">
          {/* Background gradient circles for visual interest */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
            <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
          </div>
          
          {/* Main content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Navbar />
            <main className="space-y-24 py-20">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}