import { Hero } from "../sections";
import Head from "next/head";

const heroProps = {
  backgroundImageUrl: "/img/background.png",
  image: { src: "/img/video.png", alt: "", width: 800, height: 1400 },
  title: "Managed agency selection",
  description: "Strengthen your onboarding process",
  ctaText: "Start",
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Hero {...heroProps} />
      {/** Other sections */}
    </>
  );
}
