import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import HomepageCard from '../components/HomepageCard'

export default function Home() {
  return (
    <div className="h-full flex flex-row items-stretch relative">
      <Head>
        <title>Asteraeco.id</title>
        <meta name="description" content="Ecoprint and Urban Farm in Jogja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomepageCard
        image="/images/ecoprint/ecoprint-home.jpg"
        blurImage="/images/ecoprint/ecoprint-home-blur.jpg"
        title="Ecoprint"
        color="orange"
        subtitle="Pakaian dan kerajinan yang dibuat dengan teknik ecoprint yang ramah lingkungan."
        link="/ecoprint"
      />
      <HomepageCard
        image="/images/urbanfarm/urbanfarm-home.jpg"
        blurImage="/images/urbanfarm/urbanfarm-home-blur.jpg"
        title="Urban Farm"
        color="emerald"
        subtitle="Kebun sayuran berbasis hidroponik yang alami, segar, dan hemat air dalam perawatannya."
        link="/urban-farm"
      />
      <Link href="/about-us" passHref >
        <div className="bg-yellow-50 drop-shadow-xl z-10 w-32 h-32 rounded-full block absolute top-1/2 right-1/2 translate-x-2/4 -translate-y-2/4 cursor-pointer">
          <div className="m-2 w-28 h-28 relative">
            <Image alt="asteraeco" src="/images/asteraeco-round.png" priority className="p-4" objectFit="cover" layout="fill" />
          </div>
        </div>
      </Link>
    </div>
  )
}
