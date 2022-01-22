import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";

const EcoprintPage = () => {
  return (
    <>
      <Header />
      <Hero
        color="orange"
        title="Ecoprint di mana saja"
        subtitle="Tampil cantik dan unik tanpa merusak lingkungan."
        primaryButtonText="Cari produk tersedia"
        secondaryButtonText="Buat produk sendiri"
      >
        <Image src="/images/ecoprint-hero.jpg" layout="fill" objectFit="cover" />
      </Hero>
    </>
  )
}

export default EcoprintPage;
