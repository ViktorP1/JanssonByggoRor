"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa"

export default function Contact() {
  const t = useTranslations()

  return (
    <main>
      {/* Contact Hero */}
      <section className="relative min-h-70 bg-gradient-to-br from-[#26A96C] to-[#26A96C] flex items-center overflow-hidden py-20">
        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("contact.title")}</h1>
            <p className="text-xl text-gray-200">Kontakta oss redan idag!</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info Cards */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex gap-6 items-start"
              >
                <div className="bg-[#29a5b7]/15 p-4 rounded-lg flex-shrink-0">
                  <FaMapMarkerAlt className="text-[#29a5b7] text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Adress</h3>
                  <p className="text-slate-600 font-medium">{t("contact.address")}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="bg-[#29a5b7]/15 p-4 rounded-lg flex-shrink-0">
                  <FaEnvelope className="text-[#29a5b7] text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Email</h3>
                  <a href={`mailto:${t("contact.email")}`} className="text-slate-600 hover:text-[#26A96C]/90 font-medium">
                    {t("contact.email")}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-6 items-start"
              >
                <div className="bg-[#29a5b7]/15 p-4 rounded-lg flex-shrink-0">
                  <FaPhone className="text-[#29a5b7] text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{t("contact.phone")}</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-slate-600 font-medium">{t("contact.rafael")}</p>
                      <a href="tel:+4677452829" className="text-slate-600 hover:text-[#26A96C]/90">
                        070-745 28 29
                      </a>
                    </div>
                    <div>
                      <p className="text-slate-600 font-medium">Org nummer :</p>
                      <a className="text-slate-600 hover:text-[#26A96C]/90">
                         559275-2678
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#29a5b7]/10 to-[#29a5b7]/5 p-12 rounded-xl border border-[#29a5b7]/30"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Redo att komma igång?</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Kontakta oss idag för att diskutera ditt nästa projekt och se hur vi kan hjälpa dig att nå bästa möjliga resultat.
              </p>
              <a
                href={`mailto:${t("contact.email")}`}
                className="inline-block bg-[#26A96C] hover:bg-[#26A96C]/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 w-full text-center"
              >
                {t("contact.cta")}
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
