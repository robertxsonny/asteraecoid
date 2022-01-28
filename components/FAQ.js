import { Disclosure, Transition } from '@headlessui/react';

const FAQ = ({ color, faqs }) => {
  return (
    <section className="bg-neutral-100">
      <div className="page-container py-24 flex">
        <div className="flex-1">
          <h1 className={`text-left ${color === 'emerald' ? 'text-emerald-500' : 'text-orange-700'}`}>FAQ</h1>
        </div>
        <div className="flex-[2]">
          {(faqs && faqs.length > 0) && faqs.map(({ question, answer }) => (
            <Disclosure>
              <Disclosure.Button className={`text-left ${color === 'emerald' ? 'text-emerald-500' : 'text-orange-700'}`}>
                <h5>{question}</h5>
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
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ;
