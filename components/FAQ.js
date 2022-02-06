import { Disclosure, Transition } from '@headlessui/react';
import { PlusCircleIcon } from '@heroicons/react/outline';
import { MinusCircleIcon } from '@heroicons/react/solid';

const FAQItem = ({ color, question, answer, open }) => {
  const Icon = open ? MinusCircleIcon : PlusCircleIcon
  return (
    <>
      <Disclosure.Button className={`text-left ${color === 'emerald' ? 'text-emerald-500' : 'text-orange-700'} flex w-full justify-between shadow-none hover:shadow-none`}>
        <h5>{question}</h5>
        <Icon className="shrink-0 w-6 h-6" />
      </Disclosure.Button>
      <Transition
        className="overflow-clip"
        enter="transition-all duration-300 ease-in"
        enterFrom="max-h-0"
        enterTo="max-h-52"
        leave="transition-all duration-300 ease-out"
        leaveFrom="max-h-52"
        leaveTo="max-h-0"
      >
        <Disclosure.Panel className="px-4 pb-3">{answer}</Disclosure.Panel>
      </Transition>
      <hr />
    </>
  )
}

const FAQ = ({ color, faqs }) => {
  return (
    <section className="bg-neutral-100">
      <div className="page-container flex flex-col-mobile">
        <div className="flex-1">
          <h1 className={`text-center mb-4 lg:text-left ${color === 'emerald' ? 'text-emerald-500' : 'text-orange-700'}`}>FAQ</h1>
        </div>
        <div className="flex-[2]">
          {(faqs && faqs.length > 0) && faqs.map(({ question, answer }, index) => (
            <Disclosure key={`${index}-${question}`}>
              {({ open }) => <FAQItem color={color} question={question} answer={answer} open={open} />}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ;
