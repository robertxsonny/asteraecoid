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

const BenefitIcon = ({ color, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`rounded-full w-32 h-32 ${benefitClasses[color].iconBg}`}>
  
      </div>
      <h3 className={`text-center mt-4 mb-2 ${benefitClasses[color].title}`}>{title}</h3>
      <p className="text-center">{subtitle}</p>
    </div>
  )
}

export default BenefitIcon;