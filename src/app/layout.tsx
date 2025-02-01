import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Task List App',
  description: 'Task project',
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer theme='colored' position='top-center'/>

        <main className="container mx-auto p-10">
         
         {children}
        </main>
      </body>
    </html>
  )
}