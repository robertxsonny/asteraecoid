import Image from "next/image";

const benefitClasses = {
  emerald: {
    iconBg: 'bg-emerald-50',
    title: 'text-emerald-500'
  },
  orange: {
    iconBg: 'bg-orange-50',
    title: 'text-orange-700'
  }
}

const BenefitIcon = ({ color, title, subtitle, iconUrl, iconAlt }) => {
  return (
    <div className="flex-1 lg:shrink-0 flex flex-col items-center m-4">
      <div className={`rounded-full w-28 h-28 p-8 ${benefitClasses[color].iconBg}`}>
        {iconUrl && (
          <div className="w-full h-full relative">
            <Image src={iconUrl} alt={iconAlt} layout="fill" objectFit="contain" priority />
          </div>
        )}
      </div>
      <h3 className={`text-center mt-4 mb-2 ${benefitClasses[color].title}`}>{title}</h3>
      <p className="text-center">{subtitle}</p>
    </div>
  )
}

export default BenefitIcon;