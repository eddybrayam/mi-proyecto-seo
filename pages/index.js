import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Mi Sitio Optimizado</title>
        <meta
          name="description"
          content="Pagina principal con contenido optimizado para SEO en Next.js."
        />
        <meta property="og:title" content="Home | Mi Sitio Optimizado" />
        <meta
          property="og:description"
          content="Aprende tecnicas de SEO y rendimiento web con Next.js."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/seo-image.webp" />
      </Head>

      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-8 px-6 py-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Bienvenido</h1>
          <p className="max-w-2xl text-lg">
            Pagina principal optimizada con imagen en formato WebP para mejorar
            el rendimiento y el SEO.
          </p>
        </div>

        <Image
          src="/images/seo-image.webp"
          alt="Imagen optimizada para SEO en formato WebP"
          width={800}
          height={400}
          priority
          className="h-auto w-full rounded-lg object-cover"
        />
      </section>

      <DynamicComponent />
    </>
  );
}
