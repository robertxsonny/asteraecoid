import Head from "next/head";
import Image from "next/image";
import WhatsAppButton from "../assets/WhatsAppButton";
import BenefitIcon from "../components/BenefitIcon";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import useBreakpoints from "../hooks/breakpoints";

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
  const { lgUp } = useBreakpoints();

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
        title="Ecoprint unik untuk semua"
        subtitle="Tampil cantik dan unik tanpa merusak lingkungan."
        primaryButton={(
          <a role="button" href="https://www.tokopedia.com/asteraecoid" target="_blank" rel="noopener noreferrer" className="btn-orange-primary">
            Cari produk tersedia
          </a>
        )}
        secondaryButton={(
          <WhatsAppButton className="btn-orange-secondary" message="Hai, bisa memesan custom order ecoprint?">
            Buat produkmu sendiri
          </WhatsAppButton>
        )}
      >
        <Image
          src="/images/ecoprint/ecoprint-hero.jpg"
          alt="ecoprint"
          layout="fill"
          placeholder="blur"
          blurDataURL="/images/ecoprint/ecoprint-hero-blur.jpg"
          objectFit="cover"
        />
      </Hero>
      <section className="relative h-max">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/ecoprint/ecoprint-summary.jpg"
            alt="ecoprint"
            placeholder="blur"
            blurDataURL="/images/ecoprint/ecoprint-summary-blur.jpg"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="bg-neutral-800/60 h-max">
          <div className="page-container narrow !py-36 lg:py-48">
            <h1 className="text-center text-orange-50 mb-6">Sekilas tentang ecoprint</h1>
            <p className="text-center text-white">
              Ecoprint adalah Teknik pewarnaan alami menggunakan daun dan bunga sebagai bahan utamanya.
              Jejak-jejak mereka melekat tak hanya di kain saja, tetapi juga bisa di media lainnya seperti kulit, kertas ataupun keramik.
              Bahan-bahan pendukungnya pun juga ramah lingkungan seperti tawas, tunjung, baking soda, cuka, dan lain sebagainya.
              Yuk, beralih ke ecoprint untuk bahan sandang yang kita gunakan.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100">
        <div className="page-container">
          <h1 className="text-center text-orange-700 mb-12">Mengapa harus beralih ke ecoprint?</h1>
          <div className="flex flex-col-mobile justify-between">
            <BenefitIcon color="orange" title="100% alami" subtitle="Terbuat dari bahan alami dan ramah lingkungan" />
            <BenefitIcon color="orange" title="100% alami" subtitle="Terbuat dari bahan alami dan ramah lingkungan" />
            <BenefitIcon color="orange" title="100% alami" subtitle="Terbuat dari bahan alami dan ramah lingkungan" />
          </div>
        </div>
      </section>
      <section>
        <div className="page-container narrow pt-24 pb-40">
          <h1 className="text-center text-orange-700 mb-16">Lini produk kami</h1>
          <div className="flex flex-wrap items-center lg:bg-orange-50">
            <div className="w-full lg:w-1/3 m-8 lg:m-0 p-4 text-center lg:text-left">
              <h3 className="text-orange-700 mb-3 px-4">Apparel</h3>
              <p className="text-neutral-600 text-sm px-4">
                Atasan, bawahan, outer, dan aksesoris wanita.
              </p>
            </div>
            <div className="w-1/2 lg:w-1/3 aspect-square relative">
              <Image
                src="/images/ecoprint/ecoprint-apparel-1.jpg"
                alt="apparel"
                layout="fill"
                placeholder="blur"
                blurDataURL="/images/ecoprint/ecoprint-apparel-1-blur.jpg"
                objectFit="cover"
              />
            </div>
            <div className="w-1/2 lg:w-1/3 aspect-square relative">
              <Image
                src="/images/ecoprint/ecoprint-apparel-2.jpg"
                alt="apparel"
                layout="fill"
                placeholder="blur"
                blurDataURL="/images/ecoprint/ecoprint-apparel-2-blur.jpg"
                objectFit="cover"
              />
            </div>
            {!lgUp && (
              <div className="w-full lg:w-1/3 m-8 lg:m-0 p-4 text-center lg:text-left">
                <h3 className="text-orange-700 mb-3 px-4">Fabric</h3>
                <p className="text-neutral-600 text-sm px-4">
                  Tersedia kain ecoprint utuh maupun kain ecoprint untuk hijab &amp; pashmina
                </p>
              </div>
            )}
            <div className="w-1/2 lg:w-1/3 aspect-square relative">
              <Image
                src="/images/ecoprint/ecoprint-fabric-1.jpg"
                alt="fabric"
                layout="fill"
                placeholder="blur"
                blurDataURL="/images/ecoprint/ecoprint-fabric-1-blur.jpg"
                objectFit="cover"
              />
            </div>
            <div className="w-1/2 lg:w-1/3 aspect-square relative">
              <Image
                src="/images/ecoprint/ecoprint-fabric-2.jpg"
                alt="fabric"
                layout="fill"
                placeholder="blur"
                blurDataURL="/images/ecoprint/ecoprint-fabric-2-blur.jpg"
                objectFit="cover"
              />
            </div>
            {lgUp && (
              <div className=" w-full lg:w-1/3 m-8 lg:m-0 p-4 text-center lg:text-left">
                <h3 className="text-orange-700 mb-3 px-4">Fabric</h3>
                <p className="text-neutral-600 text-sm px-4">
                  Tersedia kain ecoprint utuh maupun kain ecoprint untuk hijab &amp; pashmina
                </p>
              </div>
            )}
            <div className="w-full lg:w-1/3 p-4 m-8 lg:m-0 text-center lg:text-left">
              <h3 className="text-orange-700 mb-3 px-4">Home Decor</h3>
              <p className="text-neutral-600 text-sm px-4">
                Gelas, mini bag, pigura, gantungan kunci, dan pernak pernik lainnya.
              </p>
            </div>
            <div className="w-1/2 lg:w-1/3 aspect-square relative">
              <Image
                src="/images/ecoprint/ecoprint-home-decor-1.jpg"
                alt="home decor"
                layout="fill"
                placeholder="blur"
                blurDataURL="/images/ecoprint/ecoprint-home-decor-1-blur.jpg"
                objectFit="cover"
              />
            </div>
            <div className="w-1/2 lg:w-1/3 aspect-square relative">
              <Image
                src="/images/ecoprint/ecoprint-home-decor-2.jpg"
                alt="home decor"
                layout="fill"
                placeholder="blur"
                blurDataURL="/images/ecoprint/ecoprint-home-decor-2-blur.jpg"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative h-max">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/ecoprint/ecoprint-summary.jpg"
            alt="ecoprint"
            placeholder="blur"
            blurDataURL="/images/ecoprint/ecoprint-summary-blur.jpg"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="bg-neutral-800/60 h-max text-white text-center">
          <div className="page-container py-48 flex flex-col-mobile items-center lg:items-stretch">
            <div className="flex-1 flex-col items-center px-4 py-12 lg:px-12 border-b lg:border-b-0 lg:border-r border-orange-50">
              <h2 className="text-orange-50 mb-6">
                Ingin membeli produk jadi?
              </h2>
              <p className="mb-8">
                Kunjungi etalase lengkap produk asteraeco.id di
              </p>
              <a href="https://www.tokopedia.com/asteraecoid" target="_blank" rel="noopener noreferrer" className="block relative w-full h-10">
                <Image src="/images/tokopedia.png" alt="tokopedia" priority layout="fill" objectFit="contain" />
              </a>
            </div>
            <div className="flex-1 flex-col items-center px-4 py-12 lg:px-12">
              <h2 className="text-orange-50 mb-6">
                Ingin buat produkmu sendiri?
              </h2>
              <p className="mb-8">
                Kamu bisa memesan produk asteraeco.id secara custom
              </p>
              <WhatsAppButton className="btn-orange-secondary" message="Hai, bisa memesan custom order ecoprint?">
                Hubungi kami untuk custom order
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>
      <FAQ color="orange" faqs={faqs} />
      <Footer />
    </>
  )
}

export default EcoprintPage;
