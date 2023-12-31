import { Inter } from 'next/font/google'
import './globals.css'
import {MdMenu, MdShoppingCart} from "react-icons/md";
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='mx-auto md:p-2'>
            <div className='flex bg-[#25293C] justify-between p-2 md:rounded-md'>
                <MdMenu className='text-2xl md:text-[30px] text-white'/>
                <div className='flex gap-1'>
                    <MdShoppingCart className='text-2xl md:text-[30px] text-white' />
                    <Image
                        className='rounded-full w-6 h-6 md:w-[30px] md:h-[30px]'
                        src='/images/profile.png'
                        alt='profile image'
                        width={24}
                        height={24}
                    >
                    </Image>
                </div>
            </div>
        </header>
        <main className='p-2'>
            {children}
        </main>
      </body>
    </html>
  )
}
