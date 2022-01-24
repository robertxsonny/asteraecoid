import Image from "next/image";
import BenefitIcon from "../components/BenefitIcon";
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
      <section className="relative h-max">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/ecoprint-summary.jpg" objectFit="cover" layout="fill" />
        </div>
        <div className="bg-neutral-800/60 h-max">
          <div className="page-container narrow py-48">
            <h1 className="text-center text-orange-100 mb-6">Sekilas tentang ecoprint</h1>
            <p className="text-center text-white">
              Ecoprint adalah Teknik pewarnaan alami menggunakan daun dan bunga sebagai bahan utamanya.
              Jejak-jejak mereka melekat tak hanya di kain saja, tetapi juga bisa di media lainnya seperti kulit, kertas ataupun keramik.
              Bahan-bahan pendukungnya pun juga ramah lingkungan seperti tawas, tunjung, baking soda, cuka, dan lain sebagainya.
              Yuk, beralih ke ecoprint untuk bahan sandang yang kita gunakan.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="page-container py-48"> 
          <h1 className="text-center text-orange-700 mb-12">Mengapa harus beralih ke ecoprint?</h1>
          <div className="flex justify-between">
            <BenefitIcon color="orange" title="100% alami" subtitle="Terbuat dari bahan alami dan ramah lingkungan" />
            <BenefitIcon color="orange" title="100% alami" subtitle="Terbuat dari bahan alami dan ramah lingkungan" />
            <BenefitIcon color="orange" title="100% alami" subtitle="Terbuat dari bahan alami dan ramah lingkungan" />
          </div>
        </div>
      </section>
    </>
  )
}

export default EcoprintPage;
