const heroClasses = {
  emerald: {
    headerColor: 'text-emerald-500',
    textBackground: 'bg-emerald-50/50',
    primaryButton: 'btn-emerald-primary',
    secondaryButton: 'btn-emerald-secondary'
  },
  orange: {
    headerColor: 'text-orange-700',
    textBackground: 'bg-orange-50/50',
    primaryButton: 'btn-orange-primary',
    secondaryButton: 'btn-orange-secondary'
  }
}

export default function Hero({
  color, children,
  title, subtitle,
  primaryButtonText, primaryButtonLink,
  secondaryButtonText, secondaryButtonLink
}) {
  return (
    <section>
      <div className="page-container flex items-end my-24">
        <div className="flex-[2]">
          <div className={`mr-8 mb-8`}>
            <h1 className={`text-5xl ${heroClasses[color].headerColor}`}>{title}</h1>
            <p className="my-6">{subtitle}</p>
            <div className="flex">
              <button className={heroClasses[color].primaryButton}>{primaryButtonText}</button>
              {secondaryButtonText && (
                <button className={`${heroClasses[color].secondaryButton} ml-2`}>{secondaryButtonText}</button>
              )}
            </div>
          </div>
        </div>
        <div className="flex-[3]">
          <div className="ml-8 w-full rounded-md aspect-video relative overflow-clip -z-10">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}