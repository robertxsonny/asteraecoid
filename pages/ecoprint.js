import Head from "next/head";
import Image from "next/image";
import BenefitIcon from "../components/BenefitIcon";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const faqs = [
  {
    question: 'Apakah sayuran di asteraeco.id termasuk sayur organik?',
    answer: 'Sayuran kami termasuk sayur organik'
  },
  {
    question: 'Apakah sayuran di asteraeco.id termasuk sayur organik?',
    answer: 'Sayuran kami termasuk sayur organik'
  },
  {
    question: 'Apakah sayuran di asteraeco.id termasuk sayur organik?',
    answer: 'Sayuran kami termasuk sayur organik'
  }
]

const EcoprintPage = () => {
  return (
    <>
      <Head>
        <title>Ecoprint | Asteraeco.id</title>
        <meta name="description" content="Ecoprint and Urban Farm in Jogja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <FAQ color="orange" faqs={faqs} />
      <Footer />
    </>
  )
}

export default EcoprintPage;
