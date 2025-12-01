"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { FaCheckCircle } from "react-icons/fa"
import Image from "next/image"

import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import { useState } from "react"

export default function Services() {
  const t = useTranslations()

  // Gallery images
  const galleryImages = [
    "/images/N1.jpg",
    "/images/N2.jpg",
    "/images/N3.jpg",
    "/images/N4.jpg",
    "/images/N5.jpg",
    "/images/N6.jpg",
    "/images/N7.jpg",
    "/images/N8.jpg",
    "/images/N9.jpg",
    "/images/N10.jpg",
    "/images/N11.jpg",
    "/images/N12.jpg",
    "/images/N13.jpg",
    "/images/N14.jpg",
    "/images/N15.jpg",
    "/images/N16.jpg",
    "/images/N17.jpg",
    "/images/N18.jpg",
    "/images/N19.jpg",
    "/images/N20.jpg",
    "/images/N21.jpg",
    "/images/N22.jpg",
    "/images/N23.jpg",
    "/images/N24.jpg",
    "/images/N25.jpg",
    "/images/N26.jpg",
    "/images/N27.jpg",
    "/images/N28.jpg",
    // add more images here
  ]

  const [index, setIndex] = useState<number | null>(null)

  const Services = [
    { title: t("services.bygg"), image: "/icon/tool.png" },
    { title: t("services.plumbing"), image: "/icon/watertap.png" },
    { title: t("services.paint"), image: "/icon/paintbrush.png" },
  ]

  const uniqueQualities = [t("services.experience10"), t("services.certified"), t("services.customized"), t("services.flexible")]

  return (
    <main>
      {/* Services Hero */}
      <section className="relative min-h-70 bg-gradient-to-br from-[#26A96C] to-[#26A96C] flex items-center overflow-hidden py-20">
        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("services.title")}</h1>
            <p className="text-xl text-gray-200">Vi specialiserar oss på VVS-arbeten och erbjuder även bygg- och måleritjänster. Med erfarenhet och expertis skapar vi lösningar som passar just dina behov, från idé till färdigt resultat.</p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6" >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tjänster</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Från mindre VVS - och snickeriuppdrag till större bygg- och måleriprojekt – vi har erfarenhet för alla typer av installationer och bygglösningar.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {Services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#d3d3d3] from-teal-50 to-cyan-50 p-8 rounded-xl border border-teal-100 hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Qualities */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t("services.unique")}</h2>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-6">
            {uniqueQualities.map((quality, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border border-teal-100"
              >
                <FaCheckCircle className="text-[#26A96C] text-2xl flex-shrink-0" />
                <p className="text-lg text-slate-700">{quality}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="references" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Referenser</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Här är några exempel på våra tidigare projekt.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg relative w-full h-56 cursor-pointer"
                onClick={() => setIndex(i)}
              >
                <Image
                  src={img}
                  alt={`Projekt ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>

          {/* Lightbox */}
          {index !== null && (
            <Lightbox
              open={index !== null}
              close={() => setIndex(null)}
              index={index}
              slides={galleryImages.map((src) => ({ src }))}
              plugins={[Thumbnails]}
            />
          )}
        </div>
      </section>

    </main>
  )
}
