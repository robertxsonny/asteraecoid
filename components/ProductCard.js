import Image from "next/image";

const ProductCard = ({ image, blurImage, title, subtitle, onClick }) => {
  const placeholderProps = blurImage ? {
    placeholder: 'blur',
    blurDataURL: blurImage
  } : {};

  return (
    <div onClick={onClick} className="bg-white drop-shadow-lg hover:drop-shadow-xl cursor-pointer rounded-lg overflow-clip w-40 m-4">
      <Image src={image} alt={title} width={160} height={120} objectFit="cover" {...placeholderProps} />
      <div className="p-2 w-full flex-col flex items-center">
        <h6>{title}</h6>
        {subtitle && <span className="text-xs text-neutral-400 my-1">{subtitle}</span>}
      </div>
    </div>
  )
}

export default ProductCard;