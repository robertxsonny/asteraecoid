import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';

const classes = {
  emerald: {
    background: 'bg-emerald-200/70',
    button: 'btn-emerald-primary'
  },
  orange: {
    background: 'bg-orange-100/70',
    button: 'btn-orange-primary'
  }
}

const HomepageCard = ({
  image, color,
  title, subtitle,
  buttonColor, link
}) => {
  const [active, setActive] = useState(false);

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="flex-1 relative"
    >
      <Image src={image} objectFit="cover" layout="fill" />
      <div
        className={`transition-all duration-500 absolute flex flex-col inset-0 p-8 ${active ? classes[color].background : 'bg-neutral-800/70'}`}
      >
        <div className="flex-1" />
        <h1 className={`text-center text-[1.75rem] ${active ? 'text-neutral-800' : 'text-yellow-100'} uppercase my-2 transition-all duration-500`}>
          {title}
        </h1>
        <div className="flex-1">
          <div className={`flex flex-col items-center transition-all duration-500 overflow-hidden ${active ? 'max-h-full' : 'max-h-0'}`}>
            <p className="text-center mb-4 max-w-sm">{subtitle}</p>
            <Link passHref href={link}>
              <button className={classes[color].button}>Lihat selengkapnya</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HomepageCard;