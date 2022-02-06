import { format, isFuture, isPast, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import WhatsAppButton from "../assets/WhatsAppButton";
import BenefitIcon from "../components/BenefitIcon";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import veggies from "../urbanfarm-product.json";

const faqs = [
  {
    question: 'Apa itu hidroponik?',
    answer: (
      <>
        Hidroponik adalah system tanam yang menggunakan air mengalir sebagai media utamanya. Bisa dengan cara NFT atau DFT.<br /><br />
        NFT (Nutrient film technique) adalah system yang mengandalkan kemiringan media tanam untuk air terus mengalir membawa nutrisi kepada tanaman.
        DFT (Deep flow technique) adalah system yang mengandalkan genangan air didalam media tanam untuk tanaman bisa menyerap nutrisi.
        Kedua system tersebut punya kekurangan dan kelebihan masing-masing tapi punya media utama yang sama yaitu air.
      </>
    )
  },
  {
    question: 'Mengapa hidropinik harus menggunakan air?',
    answer: `
      Air di sistem hidroponik ini berperan penting karena berfungsi sebagai media pembawa nutrisi dan oksigen untuk tumbuh kembang tanaman.
      Air di sini juga harus dijaga suhu dan PH air nya untuk tanaman bisa menyerap dengan optimal nutrisi yang diberikan.
    `
  },
  {
    question: 'Benarkah hidroponik hemat air dan lahan?',
    answer: `
      Sistem hidroponik adalah solusi untuk lahan yang sudah semakin sepit. Tidak butuh lahan yang besar, bahkan tembok dinding pun bisa dijadikan media tanam.
      Sistem hidroponik ini pun hemat dalam pengunaan air karena tidak ada penyiraman ketanaman dan air hanya bersikulasi dari tandon air ke media tanam berputar selama 24 jam membawa nutrisi yang dibutuhkan tanaman.
    `
  },
  {
    question: 'Apakah sayuran di asteraeco.id ini bebas pestisida?',
    answer: `
      Kebun kami tidak menggunakan pestisida kimia karna bisa merusak kandungan dan manfaat yang baik dalam sayur/buah dan juga tidak baik untuk tubuh manusia.
      Kami menggunakan bawang putih untuk mengendalian hama dengan cara menaruh bawang putih tersebut disekitar sayur/buah. Dan juga menggunakan yellow trap untuk serangga.
    `
  },
  {
    question: 'Apakah sayuran di asteraeco.id ini alami dan bukan rekayasa genetik (GMO)?',
    answer: `
      Sayuran di kebun kami menggunakan benih yang tumbuh sesuai dengan habitatnya dan menggunakan takaran pupuk yang sesuai dengan kebutuhan tanaman
      Kami tidak melakukan rekayasa genetik dengan memaksakan tanaman bisa tumbuh di luar habitatnya. Seperti contoh selada iceberg yang hanya bisa tumbuh optimal dengan cropping daun bagus diketinggian 900meter diatas permukaan laut.
    `
  }
]

const UrbanFarmProductModal = ({ product, onClose }) => {
  const { name, description, slug, priceWhole, price100gr, price150gr, price250gr, price500gr, price1kg, availableFrom, availableUntil } = product || {};

  const prices = [
    priceWhole && `Rp ${priceWhole} / bonggol`,
    price100gr && `Rp ${price100gr} / 100gr`,
    price150gr && `Rp ${price150gr} / 150gr`,
    price250gr && `Rp ${price250gr} / 250gr`,
    price500gr && `Rp ${price500gr} / 500gr`,
    price1kg && `Rp ${price1kg} / 1kg`,
  ].filter(Boolean)

  let status;
  let primaryCta;
  let secondaryCta;
  if (isPast(parseISO(availableFrom)) && isFuture(parseISO(availableUntil))) {
    status = <span className="text-emerald-500">Stok masih tersedia</span>;
    primaryCta = (
      <WhatsAppButton className="btn-emerald-primary" message={`Hai, saya ingin memesan ${name}.`}>
        Pesan sekarang
      </WhatsAppButton>
    );
  } else if (isFuture(parseISO(availableFrom))) {
    status = <span className="text-neutral-600">Segera tersedia {format(parseISO(availableFrom), 'd MMMM yyyy', { locale: id })}</span>;
    secondaryCta = (
      <WhatsAppButton className="btn-emerald-secondary" message={`Hai, saya ingin tahu ketersediaan ${name}.`}>
        Tanya ketersediaan lebih lanjut
      </WhatsAppButton>
    );
  } else {
    status = <span className="text-red-800">Stok kosong</span>;
    secondaryCta = (
      <WhatsAppButton className="btn-emerald-secondary" message={`Hai, apakah bisa pre-order ${name}?`}>
        Pesan untuk pre-order
      </WhatsAppButton>
    );
  }

  return (
    <ProductModal
      open={!!product}
      onClose={onClose}
      title={name}
      titleColor="text-emerald-500"
      description={description}
      image={`/images/urbanfarm/products/${slug}.jpg`}
      blurImage={`/images/urbanfarm/products/${slug}-blur.jpg`}
      prices={prices.length > 1 ? prices.map((price) => <>{price}<br /></>) : prices}
      status={status}
      primaryCta={primaryCta}
      secondaryCta={secondaryCta}
    />
  )
}

const UrbanFarmPage = () => {
  const [availableVeggies, setAvailableVeggies] = useState([]);
  const [upcomingVeggies, setUpcomingVeggies] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);

  useEffect(() => {
    setAvailableVeggies(veggies.filter((v) => isPast(parseISO(v.availableFrom)) && isFuture(parseISO(v.availableUntil))) || []);
    setUpcomingVeggies(veggies.filter((v) => isFuture(parseISO(v.availableFrom))) || []);
  }, [])

  const showProduct = useCallback((product) => setActiveProduct(product), []);

  const hideProduct = useCallback(() => setActiveProduct(null), []);

  const scrollToAvailableVeggies = useCallback(() => {
    const elem = document.querySelector('#sayur-tersedia');
    const rect = elem.getBoundingClientRect();
    window.scrollTo({
      top: rect.top - 64,
      behavior: 'smooth'
    })
  }, [])

  return (
    <>
      <Head>
        <title>Urban Farm | Asteraeco.id</title>
        <meta name="description" content="Ecoprint and Urban Farm in Jogja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero
        color="emerald"
        title="Sayur segar setiap hari"
        subtitle="Dapatkan sayuran hidroponik yang segar di kebun kami."
        primaryButton={(
          <button className="btn-emerald-primary" onClick={scrollToAvailableVeggies}>
            Cari sayuran di kebun kami
          </button>
        )}
      >
        <Image
          src="/images/urbanfarm/urbanfarm-hero.jpg"
          alt="urban farm"
          placeholder="blur"
          blurDataURL="/images/urbanfarm/urbanfarm-hero-blur.jpg"
          layout="fill"
          objectFit="cover"
        />
      </Hero>
      <section>
        <div className="page-container lg:pb-52">
          <div className="flex flex-col-mobile justify-center">
            <BenefitIcon color="emerald" title="100% alami" subtitle="Terbuat dari bahan alami dan ramah lingkungan" />
            <BenefitIcon color="emerald" title="100% alami" subtitle="Terbuat dari bahan alami dan ramah lingkungan" />
            <BenefitIcon color="emerald" title="100% alami" subtitle="Terbuat dari bahan alami dan ramah lingkungan" />
          </div>
        </div>
      </section>
      <section id="sayur-tersedia" className="bg-emerald-50">
        <div className="page-container flex-col-mobile flex">
          <div className="flex-1">
            <h1 className="text-center lg:text-left text-emerald-500 mb-12">Sayuran Tersedia</h1>
          </div>
          <div className="flex-1">
            {(availableVeggies.length > 0) ? (
              <div className="flex flex-wrap items-stretch justify-center lg:justify-end -mx-4 lg:mx-0 lg:-mt-36 -mb-12">
                {availableVeggies.map((v) => {
                  const { priceWhole, price100gr, price150gr, price250gr, price500gr, price1kg } = v;
                  const [firstPrice] = [priceWhole, price100gr, price150gr, price250gr, price500gr, price1kg].filter(Boolean);
                  return (
                    <ProductCard
                      key={v.slug}
                      image={`/images/urbanfarm/products/${v.slug}.jpg`}
                      blurImage={`/images/urbanfarm/products/${v.slug}-blur.jpg`}
                      title={v.name}
                      subtitle={`mulai dari Rp ${firstPrice}`}
                      onClick={() => showProduct(v)}
                    />
                  )
                })}
              </div>
            ) : (
              <span className="text-neutral-600">Belum ada sayur tersedia</span>
            )}
          </div>
        </div>
      </section>
      {(upcomingVeggies.length > 0) && (
        <section className="bg-neutral-100">
          <div className="page-container">
            <h1 className="text-center text-emerald-500 mb-12">Segera Tersedia</h1>
            <div className="flex-1 flex flex-wrap items-center justify-center">
              {upcomingVeggies.map((v) => (
                <ProductCard
                  key={v.slug}
                  image={`/images/urbanfarm/products/${v.slug}.jpg`}
                  blurImage={`/images/urbanfarm/products/${v.slug}-blur.jpg`}
                  title={v.name}
                  subtitle={`Tersedia ${format(parseISO(v.availableFrom), 'd MMMM yyyy', { locale: id })}`}
                  onClick={() => showProduct(v)}
                />
              ))}
            </div>
          </div>
        </section>
      )}
      <section>
        <div className="page-container narrow">
          <h1 className="text-center text-emerald-500 mb-12">Sayuran lainnya di kebun kami</h1>
          <div className="flex-1 flex flex-wrap items-center justify-center">
            {veggies.map((v) => (
              <ProductCard
                key={v.slug}
                image={`/images/urbanfarm/products/${v.slug}.jpg`}
                blurImage={`/images/urbanfarm/products/${v.slug}-blur.jpg`}
                title={v.name}
                onClick={() => showProduct(v)}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative h-max">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/urbanfarm/urbanfarm-how-to.jpg"
            alt="urban farm"
            placeholder="blur"
            blurDataURL="/images/urbanfarm/urbanfarm-how-to-blur.jpg"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="bg-neutral-800/80 h-max">
          <div className="page-container text-center text-white">
            <p className="mb-12 lg:mb-24">Bagaimana saya bisa mendapatkan sayuran tersebut?</p>
            <div className="flex flex-col-mobile items-center">
              <div className="flex-1 flex-col items-center">
                <h2 className="text-emerald-50 mb-6">
                  Datang dan petik sendiri dari kebun kami
                </h2>
                <p className="mb-8">
                  Kebun kami buka setiap hari pukul 07:00 – 09:00 dan/atau 15:30 – 17:30.<br />
                  <b>Harap buat janji</b> terlebih dahulu sebelum datang ke kebun
                </p>
                <WhatsAppButton className="btn-emerald-secondary darkest-shadow" message="Halo, saya ingin berkunjung ke kebun Asteraeco tanggal ... jam ...">
                  Buat janji kunjungan ke kebun
                </WhatsAppButton>
              </div>
              <i className="p-16">...atau...</i>
              <div className="flex-1 flex-col items-center">
                <h2 className="text-emerald-50 mb-6">
                  Kami antar GRATIS* ke rumah kamu
                </h2>
                <p>*hanya berlaku untuk jarak pengantaran 5km dari kebun.</p>
                <ul className="text-left list-disc mx-8 mt-8">
                  <li>Jarak 5-7km, biaya kirim Rp. 5000,00</li>
                  <li>Jarak 7-10km. biaya kirim Rp. 7000,00</li>
                  <li>Jarak di atas 10km disarankan menggunakan jasa kurir pengiriman</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQ color="emerald" faqs={faqs} />
      <Footer />
      <UrbanFarmProductModal product={activeProduct} onClose={() => hideProduct()} />
    </>
  )
}

export default UrbanFarmPage;
