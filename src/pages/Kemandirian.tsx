import { Sprout, ShoppingCart, Beef, ShoppingBag, Eye, Heart, ArrowRight } from 'lucide-react';

export default function Kemandirian() {
  
  const handleOrderWhatsApp = (productName: string) => {
    const text = encodeURIComponent(`Halo YSKSP, saya tertarik untuk membeli produk kemandirian: ${productName}. Bagaimana prosedur pemesanannya? Terima kasih.`);
    window.open(`https://wa.me/6285169436225?text=${text}`, '_blank');
  };

  const catalogProducts = [
    {
      name: "Witte Kruis Koffie - Bubuk Premium",
      desc: "Kopi bubuk Robusta murni dari hasil panen perkebunan Salib Putih. Diproses dengan teknik roasting tradisional terbaik.",
      weight: "250 gr",
      price: "Rp 35.000",
      img: "https://lh3.googleusercontent.com/aida/AP1WRLsqrMjg_u73eOlLKI27AkhvXCWHHNM2-yAWGnKIsz0xtavbRC9OTIyuTpsInTNnoB1-SJXXNrWHUN8dtY6ZETKcTkhCSajQA9mGfAPFA0LtoPFPpbLu72Mbw9Mn9Z-2A8V5LwUZfWFMkfsFB4P5Pjn7ycz6GaV0FPEvNP7PopLw7-wnMxGPKOmXiMEzxDRv0njhNL4dfjhErgRxjUs9CGZCkDDK71kqK01549uDJszkpY5B0Mq5PFgrp_3L9aeoTT6osXdcAQCPgoE=s1600"
    },
    {
      name: "Witte Kruis Koffie - Roastbean (Biji Kopi)",
      desc: "Biji kopi Robusta matang pilihan yang telah disangrai sempurna, siap digiling sesuai selera penikmat kopi sejati.",
      weight: "500 gr",
      price: "Rp 65.000",
      img: "https://lh3.googleusercontent.com/aida/AP1WRLsqrMjg_u73eOlLKI27AkhvXCWHHNM2-yAWGnKIsz0xtavbRC9OTIyuTpsInTNnoB1-SJXXNrWHUN8dtY6ZETKcTkhCSajQA9mGfAPFA0LtoPFPpbLu72Mbw9Mn9Z-2A8V5LwUZfWFMkfsFB4P5Pjn7ycz6GaV0FPEvNP7PopLw7-wnMxGPKOmXiMEzxDRv0njhNL4dfjhErgRxjUs9CGZCkDDK71kqK01549uDJszkpY5B0Mq5PFgrp_3L9aeoTT6osXdcAQCPgoE=s1600"
    }
  ];

  return (
    <div className="animate-in fade-in duration-300">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 text-center space-y-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
          <Sprout className="w-3.5 h-3.5" />
          Ekonomi Berkelanjutan
        </span>
        <h1 className="display-font text-5xl md:text-7xl font-extrabold text-text-heading leading-tight">
          Membangun <br />
          <span className="italic font-normal text-primary">Kemandirian Berkelanjutan</span>
        </h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-text-paragraph leading-relaxed">
          Program unit usaha Yayasan Salib Putih dirancang untuk mendukung operasional pembiayaan pelayanan sosial kemanusiaan secara mandiri melalui pengelolaan sumber daya alam yang bertanggung jawab dan ekologis.
        </p>
      </section>

      {/* Perkebunan Kopi Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 rounded-3xl overflow-hidden h-[450px] shadow-xl border border-border-soft/40 relative group">
            <img
              alt="Perkebunan Kopi Robusta"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida/AP1WRLuHDSCT-p9xuBIwZAYEm62qYedRbsFswSTBj9_gknrNkZeU00ILiTCreLqUsgaitURSBMTP_SjFFcva1zBv0ViWeDwy4ItUO7S07OgHO4yl4oxLBzRutMcQrss2Bat-DEcgCE4zRPoF0vskAG4M2uqLfuCGWDvP0ssYcF_itGxl6aJQrctb29Di--rdyF1fWJOZhozdWoSa9ZmIjaylt1B_MNN7N0PcgjAo-3F3sbFCqWyicG-eY2uXK5Wxz5ztw5YWmsLix66Nqw=s1600"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Unit Perkebunan</span>
              <p className="display-font text-xl font-bold mt-2">Kebun Kopi Robusta ±4 Hektar</p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-8 md:p-10 rounded-3xl border border-border-soft shadow-lg space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Sprout className="w-5 h-5" />
              </div>
              <span className="uppercase tracking-widest text-[11px] font-bold text-text-paragraph">SEKTOR AGRIKULTUR</span>
            </div>
            
            <h2 className="display-font text-3xl md:text-4xl text-text-heading font-extrabold leading-tight">
              Fokus Perkebunan Kopi Robusta
            </h2>
            
            <div className="space-y-4 text-xs md:text-sm text-text-paragraph leading-relaxed">
              <p>
                Menempati lahan seluas ±4 Hektar di kaki Gunung Merbabu yang sejuk, perkebunan ini ditanami sekitar <strong className="text-text-heading">5.000 pohon kopi robusta</strong>, menjadikannya roda penggerak utama kemandirian yayasan.
              </p>
              <p>
                Hasil panen kopi robusta terbaik diproses secara higienis pasca-panen hingga menghasilkan produk roastbean dan bubuk berkualitas bermerek dagang <strong className="text-primary font-bold">“Witte Kruis Koffie”</strong>. Kami juga menyediakan penjualan biji kopi mentah (greenbean).
              </p>
              <p>
                Guna menjaga keberimbangan ekologi alam, YSK Salib Putih juga menanam aneka tanaman pohon keras pelindung seperti mahoni, sengon, jati, dan trembesi.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Peternakan Section */}
      <section className="bg-white py-24 border-y border-border-soft/60 mb-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Beef className="w-5 h-5" />
              </div>
              <span className="uppercase tracking-widest text-[11px] font-bold text-text-paragraph">SEKTOR PETERNAKAN</span>
            </div>

            <h2 className="display-font text-3xl md:text-4xl text-text-heading font-extrabold leading-tight">
              Peternakan Berkelanjutan YSKSP
            </h2>
            
            <p className="text-sm text-text-paragraph leading-relaxed">
              Usaha peternakan berkelanjutan kami berfokus pada budidaya Sapi Perah perintis dan Kambing Potong. Unit ini menunjang pemenuhan gizi susu segar bagi anak-anak panti asuhan serta menyokong ketahanan pangan yayasan.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-warm-ivory border border-border-soft rounded-2xl text-center">
                <span className="text-primary display-font text-4xl font-extrabold block">05 Ekor</span>
                <span className="text-[10px] text-text-paragraph uppercase tracking-wider font-bold block mt-1">Sapi Perah</span>
              </div>
              <div className="p-6 bg-warm-ivory border border-border-soft rounded-2xl text-center">
                <span className="text-primary display-font text-4xl font-extrabold block">10 Ekor</span>
                <span className="text-[10px] text-text-paragraph uppercase tracking-wider font-bold block mt-1">Kambing Potong</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-3xl overflow-hidden h-[400px] shadow-xl border border-border-soft/40 relative group">
            <img
              alt="Peternakan sapi modern"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida/AP1WRLsnL1smDZqVg_l_kZCzNqT7vBZaJ1bwNYCSs0dNWJ7jV-sI5I9z4-BWu8Ce_EpLf6Uypb9CHtJ4iLYTGHJfXeMFSb65U1PxUlEzLN-SRwsg7OHV5E379GT0rdIhnMSNCHyynKm7lRYLmG1cXqztK9XaTja4kz-Kky4klk89z5RAq4GGKCH7fThV6YZBUi3XvAdrBmTArHTxOIRwSq9sWS_YTwBSruZiDr82dM4kY8zFEihxNxeYtaKYtId2BO9PCRHAOLJL6xfK0Q=s1600"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </section>

      {/* Catalog: Produk Kemandirian */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <ShoppingBag className="w-10 h-10 text-primary mx-auto mb-3" />
          <h2 className="display-font text-4xl font-bold text-text-heading">Katalog Produk Mandiri</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-xs text-text-paragraph mt-3">Membeli produk kami berarti Anda turut berkontribusi langsung mendanai operasional asuhan sosial YSKSP.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {catalogProducts.map((prod, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-border-soft overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col h-full justify-between">
              <div>
                <div className="h-64 overflow-hidden relative">
                  <img
                    alt={prod.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={prod.img}
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Premium Coffee</span>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="display-font text-xl font-bold text-text-heading group-hover:text-primary transition-colors">{prod.name}</h3>
                    <span className="text-xs font-mono font-bold bg-warm-ivory border px-2 py-0.5 rounded text-text-paragraph">{prod.weight}</span>
                  </div>
                  <p className="text-xs text-text-paragraph leading-relaxed">{prod.desc}</p>
                </div>
              </div>
              <div className="p-6 pt-0 flex items-center justify-between border-t border-border-soft/40 mt-4 bg-warm-ivory/20">
                <div>
                  <span className="text-[10px] text-text-paragraph uppercase tracking-widest font-bold block">Harga Jual</span>
                  <span className="text-lg font-extrabold text-primary font-sans">{prod.price}</span>
                </div>
                <button
                  onClick={() => handleOrderWhatsApp(prod.name)}
                  className="bg-primary hover:bg-olive-hover text-white text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
                >
                  <ShoppingCart className="w-3.5 h-3.5" /> Pesan via WA
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Usaha Lainnya & Crafting */}
      <section className="bg-warm-ivory py-20 border-t border-border-soft/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h2 className="display-font text-3xl md:text-4xl text-text-heading font-extrabold leading-tight">Kerajinan Tangan &amp; Olahan Pangan Lokal</h2>
              <p className="text-sm text-text-paragraph leading-relaxed">
                Di samping unit utama kopi dan peternakan, kami membekali komunitas pedesaan dan anak asuh dengan keterampilan kerajinan tangan berbahan dasar kayu/kain, serta produksi pangan lokal siap saji yang lezat.
              </p>
              
              <ul className="space-y-3 text-xs md:text-sm text-text-heading font-semibold">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" /> Pengolahan Pangan Lokal Sehat Tanpa Pengawet
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" /> Pengembangan UMKM Kreatif Binaan YSKSP
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" /> Kelas Pelatihan Kerajinan Kayu (Woodwork)
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden h-64 mt-6 border border-border-soft shadow-md">
                <img
                  alt="Kerajinan tangan"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLsqrMjg_u73eOlLKI27AkhvXCWHHNM2-yAWGnKIsz0xtavbRC9OTIyuTpsInTNnoB1-SJXXNrWHUN8dtY6ZETKcTkhCSajQA9mGfAPFA0LtoPFPpbLu72Mbw9Mn9Z-2A8V5LwUZfWFMkfsFB4P5Pjn7ycz6GaV0FPEvNP7PopLw7-wnMxGPKOmXiMEzxDRv0njhNL4dfjhErgRxjUs9CGZCkDDK71kqK01549uDJszkpY5B0Mq5PFgrp_3L9aeoTT6osXdcAQCPgoE=s1600"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-64 border border-border-soft shadow-md">
                <img
                  alt="Packaging produk lokal"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLsqrMjg_u73eOlLKI27AkhvXCWHHNM2-yAWGnKIsz0xtavbRC9OTIyuTpsInTNnoB1-SJXXNrWHUN8dtY6ZETKcTkhCSajQA9mGfAPFA0LtoPFPpbLu72Mbw9Mn9Z-2A8V5LwUZfWFMkfsFB4P5Pjn7ycz6GaV0FPEvNP7PopLw7-wnMxGPKOmXiMEzxDRv0njhNL4dfjhErgRxjUs9CGZCkDDK71kqK01549uDJszkpY5B0Mq5PFgrp_3L9aeoTT6osXdcAQCPgoE=s1600"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
