import Image from "next/image";

const SocialLink = ({ iconUrl, iconAlt, href, className, ...otherProps }) => {
  return (
    <a
      role="button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-8 h-8 relative !shadow-none ${className || ''}`}
      {...otherProps}
    >
      <Image
        src={iconUrl}
        alt={iconAlt}
        layout="fill"
        objectFit="contain"
        priority
      />
    </a>
  )
}
export default SocialLink;
