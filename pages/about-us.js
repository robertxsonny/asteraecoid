import Head from "next/head";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useBreakpoints from "../hooks/breakpoints";

const AboutUsPage = () => {
  const { smUp } = useBreakpoints();

  const aboutUsContent = (
    <>
      <div className="flex items-center">
        <h1 className="text-emerald-500 mr-4">Tentang</h1>
        <Image src="/images/asteraeco-text-only.png" alt="asteraeco" priority width="175" height="48" objectFit="contain" />
      </div>
      <p className="pt-6">
        Memiliki kebun hidroponik merupakan cita-cita kami setelah menikah.
        Keinginan kami adalah resign dari tempat kerja sebelumnya setelah umur kami menginjak usia 30 tahun dan pindah ke Jogja.
        Ternyata tempat kami bekerja sebelumnya “mengabulkannya” 1 tahun lebih cepat dari rencana.
      </p>
      <p className="pt-6">
        Nama brand sendiri pun belum ada, sampai akhirnya salah satu dari kami mengide untuk membuat sesuatu yang sama-sama berasal dari tetumbuhan.
        Voila, muncullah produk lainnya yaitu ecoprint, seni kreasi kain yang menggunakan daun dan bunga sekitar yang dipelajari dari bulan Maret 2021.
        Dari situlah nama asteraeco.id lahir. Asteraeco.id sendiri diambil dari nama latin suku kenikir-kenikiran “Asteraceae” yang mana bunga-bunga di dalam suku tersebut kerap kali kami gunakan dalam produk-produk ecoprint kami.
      </p>
      <p className="pt-6">
        Percobaan kecil-kecilan hidroponik sendiri sudah kami lakukan sejak tahun 2020, Ketika kami masih di Jakarta.
        Keyakinan kami semakin kuat untuk memperkenalkan “anak-anak hijau” kami ke masyakarat.
        Akhirnya, kami putuskan untuk membuka kebun di Jalan Damai, Sleman dengan konsep “Petik Sendiri Sayuranmu” pada bulan Agustus 2021.
      </p>
      <p className="pt-6">
        Makan sehat dan tampil modis nan natural tak perlu mahal bersama kami, karena kami memberi solusi dengan harga yang terjangkau namun berkualitas.
        Bangga menggunakan produk lokal Indonesia bersama kami 😊
      </p>
    </>
  )

  return (
    <>
      <Head>
        <title>Urban Farm | Asteraeco.id</title>
        <meta name="description" content="Ecoprint and Urban Farm in Jogja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section>
        <div className="page-container pt-12 pb-24 flex">
          <div className="flex-1">
            <div className="aspect-square sm:aspect-[3/4] relative overflow-clip rounded-t-full rounded-b-lg">
              <Image
                src="/images/about-us/about-us-main.jpg"
                placeholder="blur"
                alt="About Us"
                blurDataURL="/images/about-us/about-us-main-blur.jpg"
                layout="fill"
                objectFit="cover"
              />
            </div>
            {!smUp && (
              <div className="w-full -my-6">
                <div className="rounded-lg bg-orange-50 -mx-6 py-12 px-8">
                  {aboutUsContent}
                </div>
              </div>
            )}
            <div className="flex mt-3 space-x-3">
              <div className="flex-1 aspect-square relative overflow-clip rounded-lg">
                <Image
                  src="/images/about-us/about-us-1.jpg"
                  placeholder="blur"
                  alt="About Us"
                  blurDataURL="/images/about-us/about-us-1-blur.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex-1 aspect-square relative overflow-clip rounded-lg">
                <Image
                  src="/images/about-us/about-us-2.jpg"
                  placeholder="blur"
                  alt="About Us"
                  blurDataURL="/images/about-us/about-us-2-blur.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="flex mt-3 space-x-3">
              <div className="flex-1 aspect-square relative overflow-clip rounded-lg">
                <Image
                  src="/images/about-us/about-us-3.jpg"
                  placeholder="blur"
                  alt="About Us"
                  blurDataURL="/images/about-us/about-us-3-blur.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex-1 aspect-square relative overflow-clip rounded-lg">
                <Image
                  src="/images/about-us/about-us-4.jpg"
                  alt="About Us"
                  placeholder="blur"
                  blurDataURL="/images/about-us/about-us-4-blur.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          {smUp && (
            <div className="flex-1 lg:flex-[2]">
              <div className="rounded-lg bg-orange-50 -ml-6 mt-24 p-12">
                {aboutUsContent}
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default AboutUsPage;
