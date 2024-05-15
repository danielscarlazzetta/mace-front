/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/cZUmDg2gWV6
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"

export function Navbar() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-[#0077b6] text-white px-6 py-6 md:px-8 lg:px-10 transition-all duration-300 ease-in-out">
        <div className="flex items-center gap-4">
          <Link className="font-bold text-xl flex items-center" href="#">
            <img
              alt="Mace Logo"
              height={40}
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width={40}
            />
          </Link>
          <span className="font-bold text-xl">Mace</span>
        </div>
        <div className="flex-1 flex justify-center" />
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <Link className="relative group hover:text-gray-300 transition-colors" href="#">
              <span className="relative z-10 text-lg font-medium">Productos</span>
            </Link>
          </div>
          <div className="relative group">
            <Link className="relative group hover:text-gray-300 transition-colors" href="#">
              <span className="relative z-10 text-lg font-medium">Quiénes Somos</span>
            </Link>
          </div>
          <div className="relative group">
            <Link className="flex items-center gap-2 relative group hover:text-gray-300 transition-colors" href="#">
              <ShoppingCartIcon className="h-5 w-5" />
              <span className="relative z-10 text-lg font-medium">Carrito</span>
            </Link>
          </div>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="text-white" size="icon" variant="ghost">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[80vw] bg-[#0077b6] bg-opacity-80 backdrop-blur-md text-white p-6" side="right">
              <div className="grid gap-6">
                <div className="relative group">
                  <Link className="text-xl font-medium relative group hover:text-gray-300 transition-colors" href="#">
                    <span className="relative z-10">Productos</span>
                  </Link>
                </div>
                <div className="relative group">
                  <Link className="text-xl font-medium relative group hover:text-gray-300 transition-colors" href="#">
                    <span className="relative z-10">Quiénes Somos</span>
                  </Link>
                </div>
                <div className="relative group">
                  <Link
                    className="flex items-center gap-2 text-xl font-medium relative group hover:text-gray-300 transition-colors"
                    href="#"
                  >
                    <ShoppingCartIcon className="h-5 w-5" />
                    <span className="relative z-10">Carrito</span>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="pt-24" />
    </>
  )
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}
