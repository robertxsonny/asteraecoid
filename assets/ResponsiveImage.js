import Image from "next/image";

const ResponsiveImage = ({ src, alt, blur, ...otherProps }) => {
  const blurProps = blur ? {
    placeholder: 'blur',
    blurDataURL: src.replace(/(\.(gif|jpe?g|tiff?|png|webp|bmp)$)/g, '-blur$1')
  } : {};

  return <Image {...otherProps} src={src} alt={alt} {...blurProps} />
}

export default ResponsiveImage;