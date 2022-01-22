import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";

const UrbanFarmPage = () => {
  return (
    <>
      <Header />
      <Hero
        color="emerald"
        title="Sayur segar setiap hari"
        subtitle="Dapatkan sayuran hidroponik yang segar di kebun kami."
        primaryButtonText="Cari sayuran di kebun kami"
      >
        <Image src="/images/urbanfarm-hero.jpg" layout="fill" objectFit="cover" />
      </Hero>
    </>
  )
}

export default UrbanFarmPage;
