"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  const t = useTranslations()

  return (
    <main>
      {/* About Hero */}
      <section className="relative min-h-70 bg-gradient-to-br from-[#26A96C] to-[#26A96C] flex items-center overflow-hidden py-20">
        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("about.title")}</h1>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 flex justify-center"
          >
            <Image
              src="/images/LoggaJBR.png"
              alt="Logo"
              width={600}
              height={256}
              className="w-full max-w-[600px] h-auto object-contain rounded-xl mx-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">{t("about.description")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#29a5b7]/10 bg-[#d3d3d3] border-l-4 border-[#26A96C] p-8 rounded-r-lg"
          >
            <p className=" text-lg text-slate-700 leading-relaxed">{t("about.closing")}</p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
