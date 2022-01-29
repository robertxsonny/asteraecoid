import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from "next/image";

function NavItem({ children, href }) {
  const { pathname } = useRouter();

  const dynamicClasses = (pathname === href) ? (
    'text-emerald-500 border-b-emerald-500'
  ) : (
    'text-neutral-800 border-b-transparent hover:border-b-neutral-800'
  )

  return (
    <Link href={href}>
      <a className={`block h-9 pt-3 text-sm border-b-2 ml-8 transition-colors duration-300 uppercase tracking-wider ${dynamicClasses}`}>
        {children}
      </a>
    </Link>
  )
} 

export default function Header({}) {
  return (
    <div className="h-16">
      <div className="page-container h-full flex justify-between items-center">
        <Link href="/">
          <a className="block relative w-36 h-full">
            <Image src="/images/asteraeco-text-only.png" alt="asteraeco" priority layout="fill" objectFit="contain" />
          </a>
        </Link>
        <nav className="flex">
          <NavItem href="/ecoprint">Ecoprint</NavItem>
          <NavItem href="/urban-farm">Urban Farm</NavItem>
          <NavItem href="/about-us">About Us</NavItem>
        </nav>
      </div>
    </div>
  )
}