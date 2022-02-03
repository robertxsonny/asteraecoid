const WhatsAppButton = ({ message, ...otherProps }) => {
  return (
    <a
      role="button"
      href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}/?text=${encodeURI(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      {...otherProps}
    />
  )
}
export default WhatsAppButton;
