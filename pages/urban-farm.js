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
import { event, pageview } from "../utility/ga";

const faqs = [
  {
    question: 'Apa itu hidroponik?',
    answer: 'Hidroponik merupakan sistem tanam yang menggunakan air mengalir sebagai media utamanya. Bisa dengan cara NFT atau DFT.'
  },
  {
    question: 'Apa itu NFT dan DFT dan sistem hidroponik apa yang digunakan oleh kebun asteraeco.id?',
    answer: (
      <>
        Nutrient Film Technique (NFT) adalah sistem yang mengandalkan kemiringan media tanam untuk air terus mengalir membawa nutrisi kepada tanaman.<br /><br />
        Deep Flow Technique (DFT) adalah sistem yang mengandalkan genangan air di dalam media tanam untuk tanaman bisa menyerap nutrisi. Salah satu sistem yang menganut DFT adalah sistem rakit apung.
        Kedua sistem tersebut punya kekurangan dan kelebihan masing-masing tapi punya media utama yang sama yaitu air.<br /><br />
        Kebun asteraeco.id sendiri menggunakan NFT sebagai sistem hidroponik kami. Selain pemanfaatan lahan sempit yang optimal, air dan nutrisi digunakan berulang-ulang setelah melewati tanaman.
        Dengan cara ini air dan nutrisi menjadi lebih hemat.
      </>
    )
  },
  {
    question: 'Mengapa hidropinik harus menggunakan air?',
    answer: `
      Air di sistem hidroponik ini berperan penting, karena berfungsi sebagai media pembawa nutrisi dan oksigen untuk tumbuh kembang tanaman.
      Suhu dan PH air yang digunakan juga harus selalu dijaga dan dicek secara berkala, agar tanaman bisa menyerap dengan optimal nutrisi yang diberikan.
    `
  },
  {
    question: 'Benarkah hidroponik hemat air dan lahan?',
    answer: `
      Sistem hidroponik adalah solusi untuk lahan yang sudah semakin sempit. Tidak butuh lahan yang besar, bahkan tembok dinding pun bisa dijadikan “lahan” media tanam.
      Sistem hidroponik ini hemat dalam penggunaan air, karena tidak ada penyiraman ke tanaman.
      Air hanya bersirkulasi dari tandon air ke media tanam dan berputar selama 24 jam untuk membawa nutrisi yang dibutuhkan tanaman.
    `
  },
  {
    question: 'Apakah sayuran di asteraeco.id ini bebas pestisida?',
    answer: `
      Kebun kami tidak menggunakan pestisida kimia karena bisa merusak kandungan dan manfaat yang baik dalam sayuran/buah serta bahaya untuk kesehatan tubuh manusia.
      Kami menggunakan bawang putih untuk pengendalian hama dengan cara menaruh butiran bawang putih tersebut di sekitar lubang tanam sayur/buah.
      Kami juga memanfaatkan neem oil/minyak nimba yang kami larutkan dalam air lalu disemprotkan di pipa, tembok dan sekitar greenhouse agar bau dari minyak tersebut diharapkan mengusir hama seperti kutu dan tungau (bau neem oil tidak akan menempel di sayuran dan tidak akan memengaruhi rasa sayur/buah yang kami tanam).
      Sedangkan untuk serangga seperti lalat buah kami menggunakan yellow trap sebagai bentuk pestisida alami kami.
    `
  },
  {
    question: 'Apakah sayuran di asteraeco.id ini alami dan bukan rekayasa genetik (GMO)?',
    answer: `
      GMO adalah Genetically Modified Organism atau rekayasa genetik. Sayuran di kebun kami menggunakan benih yang tumbuh sesuai dengan habitatnya dan menggunakan takaran pupuk yang sesuai dengan kebutuhan tanaman.
      Kami tidak melakukan rekayasa genetik dengan memaksakan tanaman bisa tumbuh di luar habitatnya. Seperti contoh selada iceberg yang hanya bisa tumbuh optimal dengan cropping daun bagus di ketinggian 900 meter di atas permukaan laut.
      Maka dari itu, kami pastikan sayuran di asteraeco.id adalah sayuran Non GMO.
    `
  },
  {
    question: 'Apakah ada minimum order jika memesan sayur dari asteraeco.id?',
    answer: `
      TIDAK ADA minimum order jika membeli langsung di kebun kami. 
      Untuk pesanan yang diantar minimum pembelian adalah Rp 10.000
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
      <WhatsAppButton
        className="btn-emerald-primary"
        onClick={() => event('order-vegetable', { name, status: 'Ready stock' })}
        message={`Hai, saya ingin memesan ${name}.`}
      >
        Pesan sekarang
      </WhatsAppButton>
    );
  } else if (isFuture(parseISO(availableFrom))) {
    status = <span className="text-neutral-600">Segera tersedia {format(parseISO(availableFrom), 'd MMMM yyyy', { locale: id })}</span>;
    secondaryCta = (
      <WhatsAppButton
        className="btn-emerald-secondary"
        onClick={() => event('order-vegetable', { name, status: 'Upcoming' })}
        message={`Hai, saya ingin tahu ketersediaan ${name}.`}
      >
        Tanya ketersediaan lebih lanjut
      </WhatsAppButton>
    );
  } else {
    status = <span className="text-red-800">Stok kosong</span>;
    secondaryCta = (
      <WhatsAppButton
        className="btn-emerald-secondary"
        onClick={() => event('order-vegetable', { name, status: 'Unavailable' })}
        message={`Hai, apakah bisa pre-order ${name}?`}
      >
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
    pageview('urban-farm');
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

  const showProductAndTrackEvent = useCallback((product) => {
    const { name, availableFrom, availableUntil } = product || {};

    showProduct(product);

    let status = '';

    if (isPast(parseISO(availableFrom)) && isFuture(parseISO(availableUntil))) {
      status = 'Ready Stock';
    } else if (isFuture(parseISO(availableFrom))) {
      status = 'Upcoming';
    } else {
      status = 'Unavailable';
    }

    event('view-vegetables', { name, status });
  }, [showProduct]);

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
            <BenefitIcon
              iconUrl="https://img.icons8.com/ios-glyphs/96/135440/deadly-spray.png"
              iconAlt="Insecticide icon by Icons8"
              color="emerald"
              title="No Pesticide"
              subtitle="Tanpa bahan kimia yang dapat merusak kandungan nutrisi sayuran."
            />
            <BenefitIcon
              iconUrl="https://img.icons8.com/ios-glyphs/96/135440/seeding.png"
              iconAlt="Seeding icon by Icons8"
              color="emerald"
              title="Non GMO"
              subtitle="Sayuran kami ditanam secara alami sesuai habitatnya."
            />
            <BenefitIcon
              iconUrl="https://img.icons8.com/ios-glyphs/96/135440/water.png"
              iconAlt="Water icon by Icons8"
              color="emerald"
              title="Save Water"
              subtitle="Menggunakan air yang bersirkulasi 24 jam tanpa perlu penyiraman."
            />
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
                      onClick={() => showProductAndTrackEvent(v)}
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
            <div className="flex-1 flex flex-wrap items-stretch justify-center">
              {upcomingVeggies.map((v) => (
                <ProductCard
                  key={v.slug}
                  image={`/images/urbanfarm/products/${v.slug}.jpg`}
                  blurImage={`/images/urbanfarm/products/${v.slug}-blur.jpg`}
                  title={v.name}
                  subtitle={`Tersedia ${format(parseISO(v.availableFrom), 'd MMMM yyyy', { locale: id })}`}
                  onClick={() => showProductAndTrackEvent(v)}
                />
              ))}
            </div>
          </div>
        </section>
      )}
      <section>
        <div className="page-container narrow">
          <h1 className="text-center text-emerald-500 mb-12">Sayuran lainnya di kebun kami</h1>
          <div className="flex-1 flex flex-wrap items-stretch justify-center">
            {veggies.sort((a, b) => (a.name - b.name)).map((v) => (
              <ProductCard
                key={v.slug}
                image={`/images/urbanfarm/products/${v.slug}.jpg`}
                blurImage={`/images/urbanfarm/products/${v.slug}-blur.jpg`}
                title={v.name}
                onClick={() => showProductAndTrackEvent(v)}
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
                <WhatsAppButton
                  onClick={() => event("make-visit-appointment")}
                  className="btn-emerald-secondary darkest-shadow"
                  message="Halo, saya ingin berkunjung ke kebun Asteraeco tanggal ... jam ..."
                >
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
                  <li>Jarak 7-10km. biaya kirim Rp. 8000,00</li>
                  <li>Jarak di atas 10km disarankan menggunakan jasa kurir pengiriman (KGXpress/Gosend/Grabsend)</li>
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
