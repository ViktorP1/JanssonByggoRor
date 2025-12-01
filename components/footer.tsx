import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-100 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Jansson Bygg & Rör AB</h3>
            <p className="text-gray-400 text-sm">
              Vi är specialister på VVS-arbeten men erbjuder även ett brett utbud av tjänster inom bland annat bygg & måleri.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Snabblänkar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#26A96C] transition-colors">
                  Hem
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#26A96C] transition-colors">
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="/references" className="text-gray-400 hover:text-[#26A96C] transition-colors">
                  Tjänster & Referenser
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#26A96C] transition-colors">
                  Kontakta oss
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tjänster</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/references#services" className="text-gray-400 hover:text-[#26A96C] transition-colors">
                  Tjänster
                </Link>
              </li>
              <li>
                <Link href="/references#references" className="text-gray-400 hover:text-[#26A96C] transition-colors">
                  Referenser
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt Oss</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                <span className="text-gray-400 hover:text-[#26A96C] transition-colors"><a href="tel:+4670-745 28 29">070-745 28 29</a> :</span>
                <span>Ove Jansson</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                <span className="text-gray-400 hover:text-[#26A96C] transition-colors"><a href="mailto:ove1jbr@gmail.com">ove1jbr@gmail.com</a></span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                <span>Stockholm, Sverige</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span>Org nummer:</span>
                <span>559275-2678</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">&copy; {currentYear} Jansson Bygg & Rör AB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
