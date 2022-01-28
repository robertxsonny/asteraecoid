import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutUsPage = () => {
  return (
    <>
      <Head>
        <title>Urban Farm | Asteraeco.id</title>
        <meta name="description" content="Ecoprint and Urban Farm in Jogja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section>
        <div className="page-container narrow py-24 flex">
          <div className="flex-1">

          </div>
          <div className="flex-[2]">
            <div className="rounded-lg bg-orange-50 -mr-8 p-12">
              <div className="flex items-center">
                <h1 className="text-emerald-500 mr-4">Tentang</h1>
                <Image src="/images/asteraeco-text-only.png" width="175" height="48" objectFit="contain" />
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
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default AboutUsPage;
