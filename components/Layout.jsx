import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Sabri Belafi | Portfolio</title>
        <meta
          name="description"
          content="Sabri Belafi"
        />
        <meta
          name="keywords"
          content="bagagiste, agent de piste, aeroport, handling, ground support, logistics, sabri belafi"
        />
        <link rel="icon" type="image/jpg" href="/sabri_small.jpg" />
        <meta name="author" content="Sabri Belfai" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
