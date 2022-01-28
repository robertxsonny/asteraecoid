import { Dialog } from "@headlessui/react"
import Image from "next/image"

const ProductModal = ({ open, title, description, prices, image, status, onClose, primaryCta, secondaryCta }) => {
  return (
    <Dialog open={open} onClose={onClose} className="fixed z-10 inset-0 overflow-y-auto">
      <Dialog.Overlay onClick={onClose} className="fixed inset-0 bg-black opacity-30" />
      <div className="fixed inset-0 px-9 py-16">
        <div className="rounded-lg bg-white p-6 h-max w-full max-w-3xl mx-auto">
          <div className="flex justify-between items-start">
            <Dialog.Title className="mr-4">{title}</Dialog.Title>
            <button onClick={onClose}>X</button>
          </div>
          <div className="flex items-stretch">
            <div className="flex-1">
              <Dialog.Description className="my-4 mr-4 text-neutral-600">{description}</Dialog.Description>
              <p className="text-neutral-800 text-lg font-bold">
                {prices}
              </p>
              <div className="flex flex-col mr-8 mt-6">
                {status}
                {primaryCta}
                {secondaryCta}
              </div>
            </div>
            <div className="flex-1 relative">
              <Image className="w-full h-full rounded-lg overflow-clip" src={image} layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default ProductModal;
