import { Dialog } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import useBreakpoints from "../hooks/breakpoints";

const ProductModal = ({ open, title, titleColor, description, prices, image, blurImage, status, onClose, primaryCta, secondaryCta }) => {
  const { mdUp } = useBreakpoints();

  const placeholderProps = blurImage ? {
    placeholder: 'blur',
    blurDataURL: blurImage
  } : {};

  const statusAndCtas = (
    <div className="flex flex-col space-y-2 mt-8 md:mt-0 md:mr-8">
      {status}
      {primaryCta}
      {secondaryCta}
    </div>
  )

  return (
    <Dialog open={open} onClose={onClose} className="fixed z-10 inset-0 overflow-y-auto">
      <Dialog.Overlay onClick={onClose} className="fixed inset-0 bg-neutral-800 opacity-70" />
      <div className="fixed inset-0 p-8 lg:p-10">
        <div className="rounded-lg bg-white p-8 h-max max-h-full w-full max-w-3xl mx-auto flex flex-col">
          <div className="flex justify-between items-start">
            <Dialog.Title className={`mr-4 ${titleColor || 'text-neutral-800'}`}>{title}</Dialog.Title>
            <button className="p-2 rounded-full -mt-2 text-xs bg-transparent hover:bg-gray-50" onClick={onClose}>
              <XIcon className="text-neutral-600 h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 md:flex md:flex-row-reverse md:items-stretch mt-4 overflow-scroll">
            <div className="md:flex-1 relative aspect-[4/3] md:aspect-square">
              <Image alt={title} className="w-full h-full rounded-lg overflow-clip" src={image} layout="fill" objectFit="cover" {...placeholderProps} />
            </div>
            <div className="md:flex-1">
              <p className="text-neutral-800 text-base font-bold">
                {prices}
              </p>
              <Dialog.Description className="mr-4 my-6 text-neutral-600">{description}</Dialog.Description>
              {mdUp && statusAndCtas}
            </div>
          </div>
          {!mdUp && statusAndCtas}
        </div>
      </div>
    </Dialog>
  )
}

export default ProductModal;
