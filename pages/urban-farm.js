import { format, isFuture, isPast, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import BenefitIcon from "../components/BenefitIcon";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import veggies from "../urbanfarm-product.json";

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

const UrbanFarmPage = () => {
  const [availableVeggies, setAvailableVeggies] = useState([]);
  const [upcomingVeggies, setUpcomingVeggies] = useState([]);

  useEffect(() => {
    setAvailableVeggies(veggies.filter((v) => isPast(parseISO(v.availableFrom)) && isFuture(parseISO(v.availableUntil))) || []);
    setUpcomingVeggies(veggies.filter((v) => isFuture(parseISO(v.availableFrom))) || []);
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
        primaryButtonText="Cari sayuran di kebun kami"
      >
        <Image src="/images/urbanfarm-hero.jpg" layout="fill" objectFit="cover" />
      </Hero>
      <section>
        <div className="page-container pt-24 pb-52">
          <div className="flex justify-between">
            <BenefitIcon color="emerald" title="100% alami" subtitle="Terbuat dari bahan alami dan ramah lingkungan" />
            <BenefitIcon color="emerald" title="100% alami" subtitle="Terbuat dari bahan alami dan ramah lingkungan" />
            <BenefitIcon color="emerald" title="100% alami" subtitle="Terbuat dari bahan alami dan ramah lingkungan" />
          </div>
        </div>
      </section>
      <section className="bg-emerald-100">
        <div className="page-container py-24 flex">
          <div className="flex-1">
            <h1 className="text-left text-emerald-500 mb-12">Sayuran Tersedia</h1>
          </div>
          <div className="flex-1">
            {(availableVeggies.length > 0) ? (
              <div className="flex flex-wrap items-start content-end -mt-36 -mb-12">
                {availableVeggies.map((v) => {
                  const { priceWhole, price100gr, price150gr, price250gr, price500gr, price1kg } = v;
                  const [firstPrice] = [priceWhole, price100gr, price150gr, price250gr, price500gr, price1kg].filter(Boolean);
                  return (
                    <ProductCard image={`/images/urbanfarm-products/${v.slug}.jpg`} title={v.name} subtitle={`mulai dari Rp ${firstPrice}`} />
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
          <div className="page-container py-24">
            <h1 className="text-center text-emerald-500 mb-12">Segera Tersedia</h1>
            <div className="flex-1 flex flex-wrap items-center justify-center">
              {upcomingVeggies.map((v) => (
                <ProductCard
                  image={`/images/urbanfarm-products/${v.slug}.jpg`}
                  title={v.name}
                  subtitle={`Tersedia ${format(parseISO(v.availableFrom), 'd MMMM yyyy', { locale: id })}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}
      <section>
        <div className="page-container py-24">
          <h1 className="text-center text-emerald-500 mb-12">Sayuran lainnya di kebun kami</h1>
          <div className="flex-1 flex flex-wrap items-center justify-center">
            {veggies.map((v) => (
              <ProductCard
                image={`/images/urbanfarm-products/${v.slug}.jpg`}
                title={v.name}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative h-max">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/urbanfarm-how-to.jpg" objectFit="cover" layout="fill" />
        </div>
        <div className="bg-neutral-800/80 h-max">
          <div className="page-container text-center text-white py-24">
            <p className="mb-24">Bagaimana saya bisa mendapatkan sayuran tersebut</p>
            <div className="flex items-center">
              <div className="flex-1 flex-col items-center">
                <h2 className="text-emerald-100 mb-6">
                  Datang dan petik sendiri dari kebun kami
                </h2>
                <p className="mb-8">
                  Kebun kami buka setiap hari pukul 07:00 – 09:00 dan/atau 15:30 – 17:30.<br />
                  <b>Harap buat janji</b> terlebih dahulu sebelum datang ke kebun
                </p>
                <button className="btn-emerald-secondary">
                  Buat janji kunjungan ke kebun
                </button>
              </div>
              <i className="px-20">atau</i>
              <div className="flex-1 flex-col items-center">
                <h2 className="text-emerald-100 mb-6">
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
    </>
  )
}

export default UrbanFarmPage;
