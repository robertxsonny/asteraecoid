import { format, isFuture, isPast, parseISO } from "date-fns";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import WhatsAppButton from "../assets/WhatsAppButton";
import BenefitIcon from "../components/BenefitIcon";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
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
  },
  {
    question: 'Saya ada projek kampus nih kak, apakah bisa menjadikan asteraeco.id sebagai objek penelitian/projek saya?',
    answer: (
      <>
        Bagi teman-teman yang sedang mengerjakan tugas kuliah dan membutuhkan objek penelitian
        boleh sekali menjadikan asteraeco.id sebagai bahan penelitian teman-teman.
        Namun ada beberapa ketentuan yah, bisa langsung bertanya di <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}`} target="_blank" rel="noopener noreferrer">WhatsApp kami</a>.
      </>
    )
  },
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
    />
  )
}

const UrbanFarmPage = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  useEffect(() => {
    pageview('urban-farm');
  }, [])

  const showProduct = useCallback((product) => setActiveProduct(product), []);

  const hideProduct = useCallback(() => setActiveProduct(null), []);

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
      <section className="relative h-max">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/urbanfarm/urbanfarm-hero.jpg"
            alt="urbanfarm"
            placeholder="blur"
            blurDataURL="/images/urbanfarm/urbanfarm-hero.jpg"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="bg-white/50 h-max">
          <div className="page-container py-36 flex flex-col items-center">
            <Image
              src="/images/urbanfarm/green-logo-big.png"
              alt="ecoprint"
              width={250}
              height={250}
            />
            <h1 className="text-center text-emerald-500 mt-12 mb-6">From Farm to Fork</h1>
            <p className="text-center">
              Sayuran Segar, Renyah dan Higenis untukmu dan Keluarga
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="page-container lg:pb-52">
          <h1 className="text-center text-emerald-500 mb-12">Kelebihan dari berkebun dengan cara hidroponik</h1>
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
      <section className="bg-emerald-50">
        <div className="page-container flex-col-mobile flex">
          <div className="lg:flex-1 flex flex-col items-center">
            <div className="mt-8 lg:mt-0 lg:mr-12 w-full max-w-lg rounded-md aspect-video relative overflow-clip">
              <Image
                src="/images/urbanfarm/urbanfarm-summary.jpg"
                alt="urbanfarm"
                layout="fill"
                placeholder="blur"
                blurDataURL="/images/urbanfarm/urbanfarm-summary-blur.jpg"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="lg:flex-1">
            <h1 className="text-center lg:text-left text-emerald-500">Tentang &quot;Panen Sendiri Sayuranmu&quot;</h1>
            <p className="text-center lg:text-left my-6">
              Slogan &quot;Panen Sendiri Sayuranmu&quot; merupakan ajakan untuk para pelanggan kami untuk datang, memilih dan memetik sayur langsung di kebun kami.
              Tujuan utama kami adalah para pelanggan yang telah membeli sayuran di kebun kami dapat menyajikan dan menyantap sayuran yang masih renyah, segar serta bersih untuk diri sendiri maupun keluarga.
              Selain menjadi pengalaman tersendiri, kami juga ingin memberikan edukasi dan informasi mengenai seputar sayuran yang selama ini kita konsumsi.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="page-container narrow">
          <h1 className="text-center text-emerald-500 mb-12">List Sayur Mayur di Kebun Kami</h1>
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
      <section className="bg-emerald-50">
        <div className="page-container">
          <h1 className="text-center text-emerald-500 mb-12">Portofolio</h1>
          <div className=" flex-col-mobile flex">
            <div className="lg:flex-1 lg:pr-6 lg:border-r lg:border-r-emerald-100">
              <div className="lg:flex-1 flex flex-row items-center">
                <div className="mr-2 flex-1 rounded-md aspect-[9/16] relative overflow-clip">
                  <Image
                    src="/images/urbanfarm/urbanfarm-portfolio-kompas-1.jpg"
                    alt="urbanfarm"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL="/images/urbanfarm/urbanfarm-portfolio-kompas-1-blur.jpg"
                    objectFit="cover"
                  />
                </div>
                <div className="ml-2 flex-1 rounded-md aspect-[9/16] relative overflow-clip">
                  <Image
                    src="/images/urbanfarm/urbanfarm-portfolio-kompas-2.jpg"
                    alt="urbanfarm"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL="/images/urbanfarm/urbanfarm-portfolio-kompas-2-blur.jpg"
                    objectFit="cover"
                  />
                </div>
              </div>
              <p className="text-center lg:text-left my-6">
                Kami mendapatkan sebuah kesempatan untuk menjadi salah satu narasumber di salah satu segmen di surat kabar Kompas, 28 Juni 2022.
                Untuk artikelnya dapat pula dibaca secara daring di <a href="https://www.kompas.id/baca/gaya-hidup/2022/06/19/kebiasaan-baik-yang-menyehatkan-usus" target="_blank" rel="noopener noreferrer">link berikut ini</a>.
              </p>
            </div>
            <div className="lg:flex-1 lg:pl-6">
              <div className="lg:flex-1 flex flex-row items-center">
                <div className="mr-2 flex-1 rounded-md aspect-[9/16] relative overflow-clip">
                  <Image
                    src="/images/urbanfarm/urbanfarm-portfolio-csr-1.jpg"
                    alt="urbanfarm"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL="/images/urbanfarm/urbanfarm-portfolio-csr-1-blur.jpg"
                    objectFit="cover"
                  />
                </div>
                <div className="ml-2 flex-1 rounded-md aspect-[9/16] relative overflow-clip">
                  <Image
                    src="/images/urbanfarm/urbanfarm-portfolio-csr-2.jpg"
                    alt="urbanfarm"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL="/images/urbanfarm/urbanfarm-portfolio-csr-2-blur.jpg"
                    objectFit="cover"
                  />
                </div>
              </div>
              <p className="text-center lg:text-left my-6">
                Kami mendapatkan kesempatan sebagai mentor dalam rangka program CSR Permata Hati dari Permata Bank dengan tajuk PANENKU Pelatihan Hidroponik untuk Insan Berkemampuan Khusus #berdayadenganhati.
                Selama 9 pertemuan online dan 2 kali pertemuan secara offline di bulan Sept-Nov 2022 kemarin untuk teman-teman istimewa kami yang berlokasi di Jabodetabek
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="page-container flex-col-mobile flex">
          <div className="flex flex-col-mobile">
            <h1 className="lg:flex-1 text-emerald-500 lg:pr-10">Instansi yang Berkunjung ke Kebun Kami</h1>
            <div className="lg:flex-1 flex flex-col">
              <div className="m-2 w-full rounded-md aspect-video relative overflow-clip">
                <Image
                  src="/images/urbanfarm/urbanfarm-visit-dharmakarini.jpg"
                  alt="urbanfarm"
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="/images/urbanfarm/urbanfarm-visit-dharmakarini-blur.jpg"
                  objectFit="cover"
                />
              </div>
              <div className="m-2 w-full rounded-md aspect-video relative overflow-clip">
                <Image
                  src="/images/urbanfarm/urbanfarm-visit-imagro.jpg"
                  alt="urbanfarm"
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="/images/urbanfarm/urbanfarm-visit-imagro-blur.jpg"
                  objectFit="cover"
                />
              </div>
              <div className="m-2 w-full rounded-md aspect-video relative overflow-clip">
                <Image
                  src="/images/urbanfarm/urbanfarm-visit-faperta.jpg"
                  alt="urbanfarm"
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="/images/urbanfarm/urbanfarm-visit-faperta-blur.jpg"
                  objectFit="cover"
                />
              </div>
              <div className="m-2 w-full rounded-md aspect-video relative overflow-clip">
                <Image
                  src="/images/urbanfarm/urbanfarm-visit-fbeuajy.jpg"
                  alt="urbanfarm"
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="/images/urbanfarm/urbanfarm-visit-fbeuajy-blur.jpg"
                  objectFit="cover"
                />
              </div>
              <div className="m-2 w-full rounded-md aspect-video relative overflow-clip">
                <Image
                  src="/images/urbanfarm/urbanfarm-visit-lpp.jpg"
                  alt="urbanfarm"
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="/images/urbanfarm/urbanfarm-visit-lpp-blur.jpg"
                  objectFit="cover"
                />
              </div>
            </div>
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
                  Kami antar ke rumah kamu
                </h2>
                <ul className="text-left list-disc mx-8 mt-8">
                  <li>Jarak 0-2.5km, biaya kirim GRATIS</li>
                  <li>Jarak 2.6-4km, biaya kirim Rp. 5000,00</li>
                  <li>Jarak 4.1-6km, biaya kirim Rp. 7000,00</li>
                  <li>Jarak 6.1-8km, biaya kirim Rp. 10000,00</li>
                  <li>Jarak 8.1-10km. biaya kirim Rp. 12000,00</li>
                  <li>Jarak 10.1-12km. biaya kirim Rp. 15000,00</li>
                  <li>Jarak di atas 12km disarankan menggunakan jasa kurir pengiriman (KGXpress/Gosend/Grabsend)</li>
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
