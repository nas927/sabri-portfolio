import Head from "next/head";

export default function Seo({ title, description, image, url, children }) {
  const defaultTitle = "Sabri Belafi | Agent de piste";
  const defaultDescription =
    "Agent de piste / bagagiste — Passionné par la logistique aéroportuaire, réactif et organisé pour assurer un flux fluide et sécurisé.";
  const defaultImage = "/sabri_og.jpg";
  const defaultUrl = "https://ton-site.example/";

  return (
    <Head>
      <title>{title || defaultTitle}</title>

      <meta name="description" content={description || defaultDescription} key="description" />
      <meta name="keywords" content="agent de piste, bagagiste, logistique aéroportuaire, Sabri Belafi" key="keywords" />
      <meta name="author" content="Sabri Belafi" key="author" />

      {/* Open Graph */}
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:title" content={title || defaultTitle} key="og:title" />
      <meta property="og:description" content={description || defaultDescription} key="og:description" />
      <meta property="og:image" content={image || defaultImage} key="og:image" />
      <meta property="og:url" content={url || defaultUrl} key="og:url" />

      {/* canonical */}
      <link rel="canonical" href={url || defaultUrl} key="canonical" />

      {children}
    </Head>
  );
}
