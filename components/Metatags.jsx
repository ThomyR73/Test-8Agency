import React from "react";
import Head from "next/head";

const MetaTags = () => {
  return (
    <Head>
      {/* Main Meta-tags */}
      <title>AIRitect</title>
      <meta name="title" content="AIRhitect" />
      <meta
        name="description"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue finibus nisi, vel pellentesque eros hendrerit ac. Nullam ac scelerisque tellus, nec hendrerit nibh. Etiam maximus dolor et velit faucibus, eu dictum massa egestas. Fusce ut tincidunt lacus. Mauris nisl dolor, sodales quis odio et, aliquet tincidunt felis."
      />
      <meta charSet="utf-8" />
      <link
        rel="alternate"
        hrefLang="es_mx"
        href="https://test-8-agency.vercel.app/"
      />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, user-scalable=none" />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://localhost:3000" />
      <meta property="og:title" content="AIRhitect" />
      <meta
        property="og:description"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue finibus nisi, vel pellentesque eros hendrerit ac. Nullam ac scelerisque tellus, nec hendrerit nibh. Etiam maximus dolor et velit faucibus, eu dictum massa egestas. Fusce ut tincidunt lacus. Mauris nisl dolor, sodales quis odio et, aliquet tincidunt felis."
      />
      <meta property="og:image" content="/Home.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://localhost:3000" />
      <meta property="twitter:title" content="AIRhitect" />
      <meta
        property="twitter:description"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue finibus nisi, vel pellentesque eros hendrerit ac. Nullam ac scelerisque tellus, nec hendrerit nibh. Etiam maximus dolor et velit faucibus, eu dictum massa egestas. Fusce ut tincidunt lacus. Mauris nisl dolor, sodales quis odio et, aliquet tincidunt felis."
      />
      <meta property="twitter:image" content="/Menu.png" />

      {/* Google fonts */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,800;1,100;1,200&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default MetaTags;
