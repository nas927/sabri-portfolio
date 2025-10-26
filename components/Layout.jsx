import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";
import CustomCursor from "./CustomCursor";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const siteUrl = "https://sabri-belafi.netlify.app";
const siteName = "Sabri Belafi — Agent de piste";
const description = "Sabri Belafi — Agent de piste / Bagagiste. Spécialiste des opérations au sol, logistique bagages et sécurité aéroportuaire. Disponible pour postes opérationnels et mobilité.";
const image = `${siteUrl}/sabri_og.jpg`; // place an og image in /public
const author = "Sabri Belafi";

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <CustomCursor />
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
        <meta name="robots" content="index, follow" key="robots" />

        {/* Open Graph */}
        <meta property="og:locale" content="fr_FR" key="og:locale" />
        <meta property="og:type" content="profile" key="og:type" />
        <meta property="og:site_name" content={siteName} key="og:site_name" />
        <meta property="og:title" content={siteName} key="og:title" />
        <meta property="og:description" content={description} key="og:description" />
        <meta property="og:url" content={siteUrl} key="og:url" />
        <meta property="og:image" content={image} key="og:image" />
        <meta property="og:image:alt" content="Photo de Sabri Belafi" key="og:image:alt" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={siteName} key="twitter:title" />
        <meta name="twitter:description" content={description} key="twitter:description" />
        <meta name="twitter:image" content={image} key="twitter:image" />
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
