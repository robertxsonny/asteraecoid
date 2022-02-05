import Image from "next/image";

const ProductCard = ({ image, blurImage, title, subtitle, onClick }) => {
  const placeholderProps = blurImage ? {
    placeholder: 'blur',
    blurDataURL: blurImage
  } : {};

  return (
    <div className="w-48 max-w-[50%]">
      <div onClick={onClick} className="bg-white drop-shadow-lg hover:drop-shadow-xl cursor-pointer rounded-lg overflow-clip m-2 lg:m-4">
        <div className="aspect-[4/3] w-full relative">
          <Image src={image} alt={title} layout="fill" objectFit="cover" {...placeholderProps} />
        </div>
        <div className="p-2 w-full flex-col flex text-center items-center">
          <h6>{title}</h6>
          {subtitle && <span className="text-xs text-neutral-400 my-1">{subtitle}</span>}
        </div>
      </div>
    </div>
  )
}

export default ProductCard;