import { Noto_Sans_JP, Roboto } from 'next/font/google';
import './globals.css'
import Navbar from '@/components/ui/customComponents/Navbar';


// const roboto = Roboto({
//    subsets: ['latin'],
//    weight: [100 | 300 |400 | 500 | 700 | 900],
//    style:'normal'
//  });
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
// const monospace = Mono
// const noto_sans_sp = Noto_Sans_JP({
//   style: ['normal'],
//   subsets: ['latin'],
// });

export const metadata = {
  title: 'My Portfolio',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={roboto.className}>
        <Navbar />
         <div className='bg-c_bg_dark '>
          <div className="max-w-screen-xl mx-auto ">
             {children}
          </div>
        </div>
      </body>
    </html>
  )
}