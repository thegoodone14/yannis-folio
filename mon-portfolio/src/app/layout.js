import '../styles/globals.css';
import Navbar from '../components/Navbar'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0d1b2a] text-white ">
        <div className="max-w-[90%] xl:max-w-[1223px] w-full mx-auto  px-8 py-10">
          <Navbar />
          <main className="space-y-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
