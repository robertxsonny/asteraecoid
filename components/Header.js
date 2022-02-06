import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from "next/image";
import { useBreakpoints } from '../hooks/breakpoints';
import { Menu, Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/solid';

function NavItem({ children, href }) {
  const { pathname } = useRouter();

  const dynamicClasses = (pathname === href) ? (
    'text-emerald-500 border-b-emerald-500'
  ) : (
    'text-neutral-800 border-b-transparent hover:border-b-neutral-800'
  )

  return (
    <Link href={href}>
      <a className={`block h-9 pt-3 text-sm border-b-2 md:ml-8 hover:!no-underline uppercase tracking-wider ${dynamicClasses}`}>
        {children}
      </a>
    </Link>
  )
}

export default function Header({ }) {
  const { mdUp } = useBreakpoints();

  return (
    <div className="h-16 ">
      <div className="page-container bg-white z-30 relative !py-0 h-full flex justify-start md:justify-between items-center">
        {!mdUp && (
          <Menu>
            <Menu.Button className="!shadow-none">
              <MenuIcon className="text-emerald-500 h-6 w-6" />
            </Menu.Button>
            <div className="absolute top-16 pb-4 left-0 right-0 overflow-clip">
              <Transition
                className="w-full"
                enter="transition ease-out duration-200"
                enterFrom="transform -translate-y-[120%] opacity-0"
                enterTo="transform translate-y-0 opacity-1"
                leave="transition ease-in duration-200"
                leaveFrom="transform translate-y-0 opacity-1"
                leaveTo="transform -translate-y-[120%] opacity-0"
              >
                <Menu.Items as="nav" className="bg-white drop-shadow-lg p-6 w-full z-20">
                  <Menu.Item className="px-4 py-2"><NavItem href="/ecoprint">Ecoprint</NavItem></Menu.Item>
                  <Menu.Item className="px-4 py-2"><NavItem href="/urban-farm">Urban Farm</NavItem></Menu.Item>
                  <Menu.Item className="px-4 py-2"><NavItem href="/about-us">About Us</NavItem></Menu.Item>
                </Menu.Items>
              </Transition>
            </div>
          </Menu>
        )}
        <Link href="/">
          <a className="block relative w-36 h-full">
            <Image src="/images/asteraeco-text-only.png" alt="asteraeco" priority layout="fill" objectFit="contain" />
          </a>
        </Link>
        {mdUp && (
          <nav className="flex">
            <NavItem href="/ecoprint">Ecoprint</NavItem>
            <NavItem href="/urban-farm">Urban Farm</NavItem>
            <NavItem href="/about-us">About Us</NavItem>
          </nav>
        )}
      </div>
    </div>
  )
}