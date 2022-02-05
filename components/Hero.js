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
  primaryButton, secondaryButton
}) {
  return (
    <section>
      <div className="page-container flex flex-col-mobile items-stretch lg:items-end py-16 lg:py-24">
        <div className="lg:flex-1 lg:max-w-md">
          <div className="lg:mr-8 mb-8 text-center lg:text-left">
            <h1 className={`text-4xl sm:text-5xl ${heroClasses[color].headerColor}`}>{title}</h1>
            <p className="my-6">{subtitle}</p>
            <div className="flex flex-col md:flex-row justify-center lg:justify-start space-y-2 md:space-y-0 md:space-x-2">
              {primaryButton}
              {secondaryButton}
            </div>
          </div>
        </div>
        <div className="lg:flex-1 flex flex-col items-center">
          <div className="mt-8 lg:mt-0 lg:ml-8 w-full max-w-lg rounded-md aspect-video relative overflow-clip -z-10">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}