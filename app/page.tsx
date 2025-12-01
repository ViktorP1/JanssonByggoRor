"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  // optional: you can remove next-intl entirely if you’re not using translations
  const t = useTranslations("home")

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=1200&width=1920&query=modern office cleaning workspace)",
          }}
        ></div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#26A96C] mb-6 leading-tight">
              Jansson Bygg & Rör AB
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
              {t("tagline")}
            </p>
            <motion.a
              href="mailto:ove1jbr@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-[#26A96C] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
            >
              {t("cta")}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="z-10 hidden md:block"
          >
            <img
              src="/JBRLogo.png"
              alt="Logga"
              className="object-cover rounded-xl mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t("whyUs")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("experience")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "/icon/arrows.png",
                title: "Flexibel",
                desc: "Vi tar både små och stora uppdrag, kort- eller långsiktiga, och anpassar våra tjänster efter dina behov och projektets omfattning.",
              },
              {
                icon: "/images/sakervatten.jpeg",
                title: "12+ År",
                desc: "Med över 12 års erfarenhet i branschen och som Säker Vatten-certifierade, erbjuder vi trygga och effektiva lösningar för både privatpersoner och företag.",
              },
              {
                icon: "/icon/high-quality.png",
                title: "Kvalitet",
                desc: "Vi levererar alltid högkvalitativa lösningar inom VVS, bygg och måleri, med fokus på professionalism och att förverkliga dina idéer.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#d3d3d3] p-8 rounded-xl border border-teal-100 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Conditional rendering */}
                {item.icon.endsWith(".jpeg") || item.icon.endsWith(".png") ? (
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-16 h-16 mb-4 object-cover rounded-full"
                  />
                ) : (
                  <div className="text-4xl mb-4">{item.icon}</div>
                )}
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#26A96C] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
              >
                {t("learnMore")}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}