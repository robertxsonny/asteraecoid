import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import useBreakpoints from "../hooks/breakpoints";

const classes = {
  emerald: {
    background: 'bg-emerald-50/70',
    button: 'btn-emerald-primary'
  },
  orange: {
    background: 'bg-orange-50/70',
    button: 'btn-orange-primary'
  }
}

const HomepageCard = ({
  image, blurImage,
  title, subtitle,
  color, link
}) => {
  const { lgUp } = useBreakpoints();
  const [active, setActive] = useState(false);

  const placeholderProps = blurImage ? {
    placeholder: 'blur',
    blurDataURL: blurImage
  } : {};

  const content = (
    <>
      <Image src={image} alt={title} objectFit="cover" layout="fill" {...placeholderProps} />
      <div
        className={`transition-all duration-500 absolute flex flex-col inset-0 p-8 ${active ? classes[color].background : 'bg-neutral-800/70'}`}
      >
        <div className="flex-1" />
        <h1 className={`text-center text-[1.75rem] ${active ? 'text-neutral-800' : 'text-yellow-50'} uppercase my-2 transition-all duration-500`}>
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
    </>
  )

  return lgUp ? (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="flex-1 relative"
    >
      {content}
    </div>
  ) : (
    <Link passHref href={link}>
      <div className="flex-1 relative">
        {content}
      </div>
    </Link>
  )
};

export default HomepageCard;