import p1_img from "./badrum.png";
import p2_img from "./fjarrvarme.png";
import p3_img from "./Snickeri.png";
import p4_img from "./fasad.png";
import p5_img from "./PICS/N1.png"
import p6_img from "./PICS/N2.png"
import p7_img from "./PICS/N02.png"
import p8_img from "./PICS/N3.png"
import p9_img from "./PICS/N4.png"
import p10_img from "./PICS/N5.png"
import p11_img from "./PICS/N6.png"
import p12_img from "./PICS/N7.png"
import p13_img from "./PICS/N8.png"
import p14_img from "./PICS/N9.png"
import p15_img from "./PICS/N10.png"
import p16_img from "./PICS/N11.png"
import p17_img from "./PICS/N12.png"
import p18_img from "./PICS/N13.png"
import p19_img from "./PICS/N14.jpg"
import p20_img from "./PICS/N15.jpg"
import p21_img from "./PICS/N16.png"
import p22_img from "./PICS/N17.jpg"
import p23_img from "./PICS/N18.jpg"
import p24_img from "./PICS/N19.jpg"
import p25_img from "./PICS/N20.jpg"
import p26_img from "./PICS/N21.jpg"
import p27_img from "./PICS/N22.jpg"
import p28_img from "./PICS/N23.jpg"
import p29_img from "./PICS/N24.jpg"
import p30_img from "./PICS/N25.jpg"
import p31_img from "./PICS/N26.jpg"
import p32_img from "./PICS/N27.jpg"

let new_collections = [
  {
    id: 1,
    name: "Badrums renovering",
    category: "ref",
    image: p1_img,
    desc: "Här gjordes det Badrums renovering hos en kund som ville kakla om hela badrummet samt installera en dush.",
  },
  {
    id: 2,
    name: "Fjärrvärme växlar byte",
    category: "ref",
    image: p2_img,
    desc: "Här byttes Fjärrvärme",
  },
  {
    id: 3,
    name: "Grind Sattes Upp På baksidan av tomten",
    category: "ref",
    image: p3_img,
    desc: "Här Snickades en grind ihop",
  },
  {
    id: 4,
    name: "Målning av fasad",
    category: "ref",
    image: p4_img,
    desc: "Här målades hela fased",
  },
  {
    id: 5,
    name: "Köksvägg",
    category: "ref",
    image: p5_img,
    desc: "Byggt upp en ny köksvägg i vinkel med ny dörr",
  },
  {
    id: 6,
    name: "Målat huset",
    category: "ref",
    image: p8_img,
    desc: "Bytt färg innanför ingasningen samt målat huset",
  },
  {
    id: 7,
    name: "Ytterdörr",
    category: "ref",
    image: p7_img,
    desc: "Byte av dörrar.",
  },
  {
    id: 8,
    name: "Golvvärme",
    category: "ref",
    image: p11_img,
    desc: "Golvvärme dragning i platta",
  },
  {
    id: 9,
    name: "Målning av Gavlar",
    category: "ref",
    image: p12_img,
    desc: "Här målades gavlar",
  },
  {
    id: 10,
    name: "Tapetserat & målat",
    category: "ref",
    image: p13_img,
    desc: "Här tapetserades och nymålades allt",
  },
  {
    id: 11,
    name: "Takomläggning",
    category: "ref",
    image: p10_img,
    desc: "Takomläggning och byte av panel på garage och del av gavel. Målning av gavelhus",
  },
  {
    id: 12,
    name: "Installation av dusch och toalett",
    category: "ref",
    image: p14_img,
    desc: "Här installerades det en ny dusch och toalett",
  },
  {
    id: 13,
    name: "Avloppslufning",
    category: "ref",
    image: p15_img,
    desc: "Montering av ny avloppsluftning",
  },
  {
    id: 14,
    name: "Renovering av badrum",
    category: "ref",
    image: p16_img,
    desc: "Här renoverades badrummet",
  },
  {
    id: 15,
    name: "Markstensarbete",
    category: "ref",
    image: p17_img,
    desc: "Markstensarbete med Landscaping Trosa AB",
  },
  {
    id: 16,
    name: "Badrums komplettering",
    category: "ref",
    image: p20_img,
    desc: "Här renoverades ett badrum",
  },
  {
    id: 17,
    name: "Byte av fönster & altandörr",
    category: "ref",
    image: p21_img,
    desc: "Byte av samtliga fönster samt altandörr. Från enkel till dubbeldörr",
  },
  {
    id: 18,
    name: "Renovering",
    category: "ref",
    image: p22_img,
    desc: "Här öppnades väggen mellan vardagsrum och matsal",
  },
  {
    id: 19,
    name: "Handfat och WC",
    category: "ref",
    image: p23_img,
    desc: "Installation av handfat och wc, handikapps anpassat",
  },
  {
    id: 20,
    name: "Tvättmaskin",
    category: "ref",
    image: p24_img,
    desc: "Installation av av rör för tvättmaskin",
  },
  {
    id: 21,
    name: "Konvetering av värmesystem",
    category: "ref",
    image: p25_img,
    desc: "Här konveterades det från el till vattenburen värmesystem",
  },
  {
    id: 22,
    name: "Vattenmätare",
    category: "ref",
    image: p26_img,
    desc: "Byte av vattenmätare",
  },
  {
    id: 23,
    name: "Varmvattenberedare",
    category: "ref",
    image: p27_img,
    desc: "Ny Varmvattenberedare installerat",
  },
  {
    id: 24,
    name: "Utedusch",
    category: "ref",
    image: p28_img,
    desc: "Inkoppling av en ny utedusch",
  },
  {
    id: 25,
    name: "Aggregat",
    category: "ref",
    image: p29_img,
    desc: "Byte ftx aggregat",
  },
  {
    id: 26,
    name: "Trappa",
    category: "ref",
    image: p30_img,
    desc: "Ny trappa med spång",
  },
  {
    id: 27,
    name: "Vattenskada",
    category: "ref",
    image: p31_img,
    desc: "Byte delar av trossbotten på grund av vattenskada",
  },
  {
    id: 28,
    name: "Planteringsbord",
    category: "ref",
    image: p32_img,
    desc: "Här så snickrades det ihop ett planteringsbord på beställning av en kund",
  },
];

export default new_collections;
