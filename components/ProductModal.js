import { Dialog } from "@headlessui/react"
import Image from "next/image"

const ProductModal = ({ open, title, titleColor, description, prices, image, blurImage, status, onClose, primaryCta, secondaryCta }) => {
  const placeholderProps = blurImage ? {
    placeholder: 'blur',
    blurDataURL: blurImage
  } : {};

  return (
    <Dialog open={open} onClose={onClose} className="fixed z-10 inset-0 overflow-y-auto">
      <Dialog.Overlay onClick={onClose} className="fixed inset-0 bg-neutral-800 opacity-70" />
      <div className="fixed inset-0 px-9 py-16">
        <div className="rounded-lg bg-white p-8 h-max w-full max-w-3xl mx-auto">
          <div className="flex justify-between items-start">
            <Dialog.Title className={`mr-4 ${titleColor || 'text-neutral-800'}`}>{title}</Dialog.Title>
            <button className="p-2 -mt-2 text-xs" onClick={onClose}>X</button>
          </div>
          <div className="flex items-stretch">
            <div className="flex-1">
              <Dialog.Description className="mr-4 mt-4 text-neutral-600">{description}</Dialog.Description>
              <p className="text-neutral-800 my-8 text-base font-bold">
                {prices}
              </p>
              <div className="flex flex-col space-y-2 mr-8">
                {status}
                {primaryCta}
                {secondaryCta}
              </div>
            </div>
            <div className="flex-1 relative">
              <Image className="w-full h-full rounded-lg overflow-clip" src={image} layout="fill" objectFit="cover" {...placeholderProps} />
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default ProductModal;
