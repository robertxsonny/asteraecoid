import Image from "next/image";
import BenefitIcon from "../components/BenefitIcon";
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
      <section>
        <div className="page-container pt-24 pb-48"> 
          <div className="flex justify-between">
            <BenefitIcon color="emerald" title="100% alami" subtitle="Terbuat dari bahan alami dan ramah lingkungan" />
            <BenefitIcon color="emerald" title="100% alami" subtitle="Terbuat dari bahan alami dan ramah lingkungan" />
            <BenefitIcon color="emerald" title="100% alami" subtitle="Terbuat dari bahan alami dan ramah lingkungan" />
          </div>
        </div>
      </section>
    </>
  )
}

export default UrbanFarmPage;
