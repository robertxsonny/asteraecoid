import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import ResponsiveImage from "../assets/ResponsiveImage";
import BenefitIcon from "../components/BenefitIcon";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useBreakpoints } from "../hooks/breakpoints";
import { event, pageview } from "../utility/ga";

const faqs = [
  // {
  //   question: 'Bagaimana cara memesan produk ecoprint dari asteraeco.id?',
  //   answer: (
  //     <>
  //       Produk-produk kami bisa anda pesan melalui <a href={`https://wa.me?${process.env.NEXT_PUBLIC_WA_NUMBER}`} target="_blank" rel="noopener noreferrer">Whatsapp</a>,
  //       atau langsung mengunjungi halaman toko online kami di <a href="https://www.tokopedia.com/asteraecoid" target="_blank" rel="noopener noreferrer">Tokopedia</a>.
  //     </>
  //   )
  // },
  {
    question: 'Ada produk yang saya inginkan namun sudah sold out, apakah produknya akan restock?',
    answer: `
      Asteraeco.id hanya memiliki satu stock di setiap produknya dan tidak akan ada restock.
      Maka dari itu, kami sarankan untuk segera check out di toko online kami atau langsung menghubungi kami via Whatsapp untuk mengecek stock barang.
    `
  },
  {
    question: 'Bagaimana cara merawat ecoprint yang sudah saya beli?',
    answer: (
      <>
        Terimakasih bagi teman-teman yang sudah memilih dan membeli produk kami.
        Untuk perawatan kain ecoprint yang sudah teman-teman miliki bisa klik di <a href="https://drive.google.com/drive/folders/1mzCD4NwOTr6K7-GFLLWP4Vq1dZbXX2V7?usp=drive_link" target="_blank" rel="noopener noreferrer">link berikut ini</a>.
      </>
    )
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
  {
    question: 'Apakah asteraeco.id menerima mahasiswa yang sedang mencari magang/tempat PKL?',
    answer: 'Untuk saat ini asteraeco.id tidak menerima magang/PKL dari mahasiswa. Terimakasih :)',
  }
]

const EcoPrintCategory = ({ title, description }) => {
  return (
    <div className="w-full lg:w-1/3 m-8 lg:m-0 p-4 text-center lg:text-left">
      <h3 className="text-orange-700 mb-3 px-4">{title}</h3>
      <p className="text-neutral-600 text-sm px-4">{description}</p>
    </div>
  )
}

const EcoPrintGalleryItem = ({ src, alt }) => {
  return (
    <div className="w-1/2 lg:w-1/3 aspect-square relative">
      <ResponsiveImage
        src={src}
        alt={alt}
        layout="fill"
        blur
        objectFit="cover"
      />
    </div>
  )
}

const EcoprintPage = () => {
  const { lgUp } = useBreakpoints();

  useEffect(() => {
    pageview('ecoprint');
  }, [])

  return (
    <>
      <Head>
        <title>Ecoprint | Asteraeco.id</title>
        <meta name="description" content="Ecoprint and Urban Farm in Jogja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="relative h-max">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/ecoprint/ecoprint-top.jpg"
            alt="ecoprint"
            placeholder="blur"
            blurDataURL="/images/ecoprint/ecoprint-home-top.jpg"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="bg-neutral-800/60 h-max">
          <div className="page-container py-36 flex flex-col-mobile items-center lg:items-stretch">
            <div className="flex flex-1 flex-col items-center justify-center px-4 lg:px-12">
              <Image
                src="/images/ecoprint/white-logo-big.png"
                alt="ecoprint"
                width={250}
                height={250}
              />
              <h1 className="text-center text-orange-50 mt-12 mb-6">Cetak Botani dengan Kuas dari Alam</h1>
              <p className="text-center text-white">
                Tampil cantik dan unik tanpa merusak lingkungan
              </p>
            </div>
            <div className="flex-1" />
          </div>
        </div>
      </section>
      <section>
        <div className="page-container flex flex-col-mobile items-stretch lg:items-start py-16 lg:py-24">
          <div className="lg:flex-1 flex flex-col items-center">
            <div className="mt-8 lg:mt-0 lg:ml-8 w-full max-w-lg rounded-md aspect-video relative overflow-clip -z-10">
              <Image
                src="/images/ecoprint/ecoprint-summary.jpg"
                alt="ecoprint"
                layout="fill"
                placeholder="blur"
                blurDataURL="/images/ecoprint/ecoprint-summary-blur.jpg"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="lg:flex-1 lg:max-w-md">
            <div className="lg:ml-12 mb-8 text-center lg:text-left">
              <h1 className="text-orange-700 mb-6">
                Sekilas tentang ecoprint
              </h1>
              <p className="my-6">
                Ecoprint adalah Teknik pewarnaan alami menggunakan daun dan bunga sebagai bahan utamanya.
                Jejak-jejak mereka melekat tak hanya di kain saja, tetapi juga bisa di media lainnya seperti kulit, kertas ataupun keramik.
                Bahan-bahan pendukungnya pun juga ramah lingkungan seperti tawas, tunjung, baking soda, cuka, dan lain sebagainya.
                Yuk, beralih ke ecoprint untuk bahan sandang yang kita gunakan.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100">
        <div className="page-container">
          <h1 className="text-center text-orange-700 mb-12">Mengapa harus beralih ke ecoprint?</h1>
          <div className="flex flex-col-mobile justify-between">
            <BenefitIcon
              iconUrl="https://img.icons8.com/ios-glyphs/96/843800/hand-planting-1.png"
              iconAlt="Hand Planting icon by Icons8"
              color="orange"
              title="Eco-friendly Material"
              subtitle="Menggunakan bahan 100% alami yang tidak merusak lingkungan."
            />
            <BenefitIcon
              iconUrl="https://img.icons8.com/ios-glyphs/96/843800/time-machine--v2.png"
              iconAlt="Time Machine icon by Icons8"
              color="orange"
              title="Everlasting Fashion"
              subtitle="Motif dan gaya produk kami tak akan lekang oleh waktu."
            />
            <BenefitIcon
              iconUrl="https://img.icons8.com/ios-glyphs/96/843800/best-seller.png"
              iconAlt="Best Seller icon by Icons8"
              color="orange"
              title="Handmade &amp; Exclusive"
              subtitle="100% buatan tangan dan motif yang berbeda-beda di setiap produk kami."
            />
          </div>
        </div>
      </section>
      <section>
        <div className="page-container narrow pt-24 pb-40">
          <h1 className="text-center text-orange-700 mb-16">Lini produk kami</h1>
          <div className="flex flex-wrap items-center lg:bg-orange-50">
            <EcoPrintCategory title="Fabric & Scarf" description="Terusan kain, pashmina, maupun scarf dengan berbagai macam ukuran." />
            <EcoPrintGalleryItem src="/images/ecoprint/ecoprint-produk-fabric-1.jpg" alt="fabric" />
            <EcoPrintGalleryItem src="/images/ecoprint/ecoprint-produk-fabric-2.jpg" alt="fabric" />
            {!lgUp && <EcoPrintCategory title="Apparel" description="Tersedia berbagai macam jenis sandang untuk penampilan unikmu seperti tank top, t-shirt, outer, dsb." />}
            <EcoPrintGalleryItem src="/images/ecoprint/ecoprint-produk-apparel-1.jpg" alt="apparel" />
            <EcoPrintGalleryItem src="/images/ecoprint/ecoprint-produk-apparel-2.jpg" alt="apparel" />
            {lgUp && <EcoPrintCategory title="Apparel" description="Tersedia berbagai macam jenis sandang untuk penampilan unikmu seperti tank top, t-shirt, outer, dsb." />}
            <EcoPrintCategory title="Handmade Craft" description="Pernak-pernik manis seperti notebook, bucket, headband, totebag, dsb." />
            <EcoPrintGalleryItem src="/images/ecoprint/ecoprint-produk-craft-1.jpg" alt="craft" />
            <EcoPrintGalleryItem src="/images/ecoprint/ecoprint-produk-craft-2.jpg" alt="craft" />
          </div>
        </div>
      </section>
      <section className="relative h-max">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/ecoprint/ecoprint-online.jpg"
            alt="ecoprint"
            placeholder="blur"
            blurDataURL="/images/ecoprint/ecoprint-online-blur.jpg"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="bg-white/60 h-max text-white text-center">
          <div className="page-container py-24">
            <h2 className="text-orange-700 mb-6">Beli produk kami secara online di...</h2>
            <div className="flex flex-col-mobile items-center lg:items-stretch max-w-md my-0 mx-auto">
              <div className="flex-1 flex-col items-center justify-end px-4 py-12 lg:px-12">
                <a
                  href="https://www.tokopedia.com/asteraecoid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full h-32"
                  onClick={() => event("open-tokopedia", { source: 'page' })}
                >
                  <Image src="/images/ecoprint/tokopedia-logo.png" alt="tokopedia" priority layout="fill" objectFit="contain" />
                </a>
              </div><div className="flex-1 flex-col items-center px-4 py-12 lg:px-12">
                <a
                  href="https://www.shopee.co.id/asteraecoid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full h-32"
                  onClick={() => event("open-shopee", { source: 'page' })}
                >
                  <Image src="/images/ecoprint/shopee-logo.png" alt="shopee" priority layout="fill" objectFit="contain" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100">
        <div className="page-container flex flex-col items-center">
          <h1 className="text-center text-orange-700 mb-12">
            Dan temukan produk kami secara offline di...
          </h1>
          <div className="flex flex-col-mobile items-stretch lg:items-start py-8">
            <div className="flex-1 relative m-4 aspect-square">
              <div className="absolute inset-0 -z-10">
                <Image
                  src="/images/ecoprint/ecoprint-offline-suwatu.jpg"
                  alt="ecoprint"
                  placeholder="blur"
                  blurDataURL="/images/ecoprint/ecoprint-offline-suwatu-blur.jpg"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <div className="bg-neutral-800/60 h-full w-full flex items-center justify-center p-12">
                <h2 className="text-center text-orange-50">
                  Suwatu by Milk & Bay
                </h2>
              </div>
            </div>
            <div className="flex-1 relative m-4 aspect-square">
              <div className="absolute inset-0 -z-10">
                <Image
                  src="/images/ecoprint/ecoprint-offline-artcraft.jpg"
                  alt="ecoprint"
                  placeholder="blur"
                  blurDataURL="/images/ecoprint/ecoprint-offline-artcraft-blur.jpg"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <div className="bg-neutral-800/60 h-full w-full flex items-center justify-center p-12">
                <h2 className="text-center text-orange-50">
                  Art Craft & Flower
                </h2>
              </div>
            </div>
            <div className="flex-1 relative m-4 aspect-square">
              <div className="absolute inset-0 -z-10">
                <Image
                  src="/images/ecoprint/ecoprint-offline-pasaraya.jpg"
                  alt="ecoprint"
                  placeholder="blur"
                  blurDataURL="/images/ecoprint/ecoprint-offline-pasaraya-blur.jpg"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <div className="bg-neutral-800/60 h-full w-full flex items-center justify-center p-12">
                <h2 className="text-center text-orange-50">
                  Jogja Pasaraya
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="page-container">
          <h1 className="text-center text-orange-700 mb-12">Ecoprint Workshop</h1>
          <p className="my-6 text-center">
            Ecoprint memiliki 3 teknik utama dalam proses pembuatannya:
            Steaming (kukus), Boiling (rebus) dan Pounding (ketok).
            Bagi kamu yang penasaran dengan prosesnya, Asteraeco.id dapat memberikan informasi dan fasilitas pelatihan pembuatan ecoprint
            melalui workshop dengan 2 teknik yaitu steaming dan pounding.
            Ada 3 jenis workshop yang bisa kami berikan yaitu Collaboration, Private Offline dan Private Online.
          </p>

          <div className="flex flex-col-mobile items-stretch lg:items-start py-8">
            <div className="flex-1 flex flex-col items-center m-6">
              <div className="w-full relative aspect-square">
                <Image
                  src="/images/ecoprint/ecoprint-workshop-collaboration.jpg"
                  alt="ecoprint"
                  placeholder="blur"
                  blurDataURL="/images/ecoprint/ecoprint-workshop-collaboration-blur.jpg"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <h3 className="text-center text-orange-700 mt-4">
                Collaboration Workshop
              </h3>
              <p className="my-4 text-center">
                Bagi teman-teman yang memiliki usaha cafe/restoran/tempat/acara yang ingin diramaikan dengan workshop kami,
                dapat mengklik tautan berikut.
              </p>
              <a
                role="button"
                href="https://drive.google.com/drive/folders/1jDpBkvH5-VPvswFyj8wJ863uu3g54B0v?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange-primary"
                onClick={() => event("register-collaboration")}
              >
                Daftar di sini
              </a>
            </div>
            <div className="flex-1 flex flex-col items-center m-6">
              <div className="w-full relative aspect-square">
                <Image
                  src="/images/ecoprint/ecoprint-workshop-offline.jpg"
                  alt="ecoprint"
                  placeholder="blur"
                  blurDataURL="/images/ecoprint/ecoprint-workshop-offline-blur.jpg"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <h3 className="text-center text-orange-700 mt-4">
                Private Workshop (Offline)
              </h3>
              <p className="my-4 text-center">
                Sedang berkunjung ke Jogja dan ingin memiliki pengalaman yang anti mainstream?
                Yuk, ikuti workshop kami yang diadakan di studio asteraeco.id yang jauh dari hiruk pikuk perkotaan.
              </p>
              <a
                role="button"
                href="https://forms.gle/eXbpMrA6LvcffEkq7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange-primary"
                onClick={() => event("register-private-offline")}
              >
                Daftar di sini
              </a>
            </div>
            <div className="flex-1 flex flex-col items-center m-6">
              <div className="w-full relative aspect-square">
                <Image
                  src="/images/ecoprint/ecoprint-workshop-online.jpg"
                  alt="ecoprint"
                  placeholder="blur"
                  blurDataURL="/images/ecoprint/ecoprint-workshop-online-blur.jpg"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <h3 className="text-center text-orange-700 mt-4">
                Private Workshop (Online)
              </h3>
              <p className="my-4 text-center">
                Diperuntukkan teman-temin Astera yang belum sempat berkunjung ke Jogja,
                bisa langsung daftar workshop online dengan mengklik tautan dibawah ini.
              </p>
              <a
                role="button"
                href="https://forms.gle/WUq1DwiyfbUWQKRk7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange-primary"
                onClick={() => event("register-private-online")}
              >
                Daftar di sini
              </a>
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
