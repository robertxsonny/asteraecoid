import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import SocialLink from "../assets/SocialLink";
import WhatsAppButton from "../assets/WhatsAppButton";
import { event } from "../utility/ga";

const FooterLink = ({ children, href }) => {
  const { pathname } = useRouter();

  return (
    <Link href={href}>
      <a className={`block h-9 pt-3 text-sm mr-8 transition-colors duration-300 tracking-wider text-neutral-600 hover:text-neutral-800`}>
        {children}
      </a>
    </Link>
  )
} 

const Footer = () => {
  return (
    <section className="bg-yellow-50">
      <div className="page-container lg:pb-0 flex items-stretch">
        <div className="hidden lg:block lg:flex-1 lg:pr-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.5047294385326!2d110.38522891444354!3d-7.736163078823267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59926c0716eb%3A0x72d810f058d68ca!2sasteraeco.id!5e0!3m2!1sen!2sid!4v1643277535367!5m2!1sen!2sid"
            className="border-0 w-full h-[600px] -mt-8 rounded-t-lg drop-shadow-2xl"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left lg:pl-6">
          <Image src="/images/asteraeco-text-only.png" alt="asteraeco" priority width="175" height="56" objectFit="contain" />
          <p className="font-bold my-4">
            Jl. Pusung II, Banteng, Sinduharjo, Sleman Regency, Special Region of Yogyakarta
          </p>
          <p>
            Buka setiap hari (appointment by WA)<br />
            07:00 – 09:00 dan/atau 15:30 – 17:30
          </p>
          <div className="flex justify-center lg:justify-start space-x-2 mt-4">
            <SocialLink
              iconUrl="https://img.icons8.com/ios-glyphs/48/464646/instagram-circle.png"
              iconAlt="Instagram icon by Icons8"
              href="https://www.instagram.com/asteraeco.id/"
            />
            <SocialLink
              iconUrl="https://img.icons8.com/ios-glyphs/48/464646/facebook-new.png"
              iconAlt="Facebook icon by Icons8"
              href="https://www.facebook.com/asteraeco.id/"
            />
          </div>
          <nav className="flex flex-col-mobile my-10">
            <FooterLink href="/ecoprint">Ecoprint</FooterLink>
            <FooterLink href="/urban-farm">Urban Farm</FooterLink>
            <FooterLink href="/about-us">About Us</FooterLink>
          </nav>
          <p className="mb-4">
            Ingin bertanya lebih lanjut, memesan produk, atau mengunjungi kebun kami?
          </p>
          <WhatsAppButton
            message="Halo, saya ingin bertanya mengenai..."
            onClick={() => event("ask-general")}
            className="btn-emerald-primary darker-shadow mb-8"
          >
            Hubungi kami via WhatsApp
          </WhatsAppButton>
          <hr className="border-0 border-t border-neutral-500 text-transparent py-4" />
          <p>
            © {(new Date()).getFullYear()}  asteraeco.id
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer;
