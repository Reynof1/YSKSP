import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Shield, ArrowRight, TableProperties, HelpCircle, Activity } from 'lucide-react';

export default function Sosial() {
  const [activeTab, setActiveTab] = useState<'all' | 'asuhan' | 'wredha' | 'karya'>('all');

  const statisticsUnit = [
    { name: "Panti Asuhan", l: 12, p: 9, total: 21 },
    { name: "Panti Karya", l: 6, p: 5, total: 11 },
    { name: "Panti Wredha Wisma Salib Putih", l: 17, p: 15, total: 32 },
    { name: "Panti Wredha Wisma Merbabu", l: 8, p: 4, total: 12 },
  ];

  const statisticsChildren = [
    { grade: "SD", l: 1, p: 1, total: 2 },
    { grade: "SMP", l: 7, p: 3, total: 10 },
    { grade: "SMA", l: 4, p: 5, total: 9 },
  ];

  return (
    <div className="animate-in fade-in duration-300">
      
      {/* Header / Hero Section */}
      <header className="py-20 px-6 bg-gradient-to-b from-warm-ivory to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
            <Heart className="w-3.5 h-3.5" />
            Layanan Sosial Kasih
          </span>
          <h1 className="display-font text-5xl md:text-6xl text-text-heading font-semibold leading-tight">
            Melayani dengan <span className="italic font-normal text-primary">Kasih</span> &amp; Dedikasi
          </h1>
          <p className="text-base md:text-lg text-text-paragraph max-w-2xl mx-auto leading-relaxed">
            Menciptakan dampak positif yang nyata bagi masyarakat, mulai dari anak-anak hingga lansia melalui program-program asuhan dan perlindungan sosial kami.
          </p>

          {/* Tab Navigation for Page Sections */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {(['all', 'asuhan', 'wredha', 'karya'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white border border-border-soft text-text-paragraph hover:bg-warm-ivory'
                }`}
              >
                {tab === 'all' ? 'Tampilkan Semua' : `Panti ${tab}`}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Sections */}
      <main className="space-y-24 pb-24">
        
        {/* Panti Asuhan Section */}
        {(activeTab === 'all' || activeTab === 'asuhan') && (
          <section className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              
              <div className="relative">
                <img
                  alt="Anak-anak belajar bersama di lingkungan yang hangat"
                  className="rounded-3xl w-full aspect-[4/5] object-cover shadow-xl border border-border-soft/40"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLuhAZZyW0Jf9M9cx4cq0HSri13OpChwwrc_1J5FGHKt03YKT9ICnNPilM5QwD19OZOM3f1X5XU4gpOSb2ktVGR5u2Jj2KrJ11SLnpE8H7GDt_l_FQhAqi3MD-TJ8r7CbkQSODgr5lBwJQ7wpNWJN2KBfma00hV-nABti_YGeM92gqHY-QvvkrB4TyH7h3wi0o7W2aqkAw1LZ7syH20rmGLZ1nFl-hTbb3F1wXivZQDd8M46GAFjfpeIabHeHi5xUxKlwhEjtQkI7Q=s1600"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl flex items-center gap-3 border border-border-soft/60 shadow-md">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-extrabold text-text-heading block">21 Anak Asuh</span>
                    <span className="text-[10px] text-text-paragraph block">Terbimbing Aktif</span>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-primary tracking-widest uppercase">
                  <span>UNIT PELAYANAN ANAK</span>
                </div>
                <h2 className="display-font text-4xl md:text-5xl text-text-heading font-semibold leading-tight">
                  Panti Asuhan Salib Putih
                </h2>
                <p className="text-sm md:text-base text-text-paragraph leading-relaxed">
                  Menyediakan tempat tinggal yang aman, kondusif, dan penuh kasih sayang, serta memastikan jaminan akses pendidikan formal maupun non-formal berkualitas bagi anak-anak yatim piatu dan yang membutuhkan agar mereka dapat merintis masa depan yang cerah.
                </p>

                <div className="p-6 bg-white border border-[#D8D5C8] rounded-3xl shadow-sm space-y-3">
                  <h4 className="display-font text-xl text-[#556B2F] font-bold">Fokus &amp; Tujuan Utama</h4>
                  <p className="text-xs text-text-paragraph leading-relaxed">
                    Membentuk kematangan karakter luhur, membekali mentalitas tangguh, serta memfasilitasi keterampilan hidup yang relevan untuk mewujudkan kemandirian anak asuh seutuhnya.
                  </p>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* Panti Wredha Section */}
        {(activeTab === 'all' || activeTab === 'wredha') && (
          <section className="bg-white py-24 border-y border-border-soft/60">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                
                <div className="order-2 md:order-1 space-y-8">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-primary tracking-widest uppercase">
                    <span>UNIT PELAYANAN LANSIA</span>
                  </div>
                  <h2 className="display-font text-4xl md:text-5xl text-text-heading font-semibold leading-tight">
                    Panti Wredha (Lansia)
                  </h2>
                  <p className="text-sm md:text-base text-text-paragraph leading-relaxed">
                    Perawatan holistik, pendampingan spiritual, dan tempat bernaung penuh martabat bagi para lanjut usia (lansia). Kami memastikan kesehatan fisik yang terpantau serta ketenangan batin yang sejuk di masa usia senja mereka.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-text-heading text-sm mb-1">Pelayanan Kasih 24/7</h4>
                        <p className="text-xs text-text-paragraph leading-relaxed">
                          Menjamin kualitas hidup prima melalui pemeriksaan medis rutin, penyediaan asupan nutrisi seimbang, serta fasilitasi kegiatan rekreasi dan sosial yang hangat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <div className="relative p-4 bg-[#F8F7F2] rounded-3xl shadow-xl border border-[#D8D5C8]">
                    <div className="relative rounded-2xl overflow-hidden">
                      <img
                        alt="Lansia tersenyum bersama perawat"
                        className="rounded-2xl w-full aspect-[4/3] object-cover"
                        src="https://lh3.googleusercontent.com/aida/AP1WRLsi9c_Iq5fQTzG9q2kczU-KriusGN4Tj7_4QBAVGa9BwgmW7d_M8Es4WnFfdZqTCpn-Rt7RQ34KY21x6O-wAI_Ib8MDpZTEbTYEo6yb-7trqTz2P1mylixEzz2zhYPIzshYnOIS6ytV4XimgUZ6n6M3UPYXIc6_SZW32uDDZHVI3UlmH5sQ5XuH72f4rfy6oHZj0KwkgeNjitjojYoDzV5Zlm-nshoy1yFbze3M8U70ix0-fJTJP8ek4GxcHkRHS7OvIdQ-bekSiw=s1600"
                        referrerPolicy="no-referrer"
                      />
                      {/* Absolute Badge representing Active Elderly */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl flex items-center gap-3 border border-border-soft/60 shadow-md">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                          <Activity className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-extrabold text-text-heading block">44 Lansia Aktif</span>
                          <span className="text-[10px] text-text-paragraph block">Mandiri &amp; Produktif</span>
                        </div>
                      </div>
                    </div>

                    {/* Description of Active Elderly */}
                    <div className="mt-4 p-4 bg-white rounded-2xl border border-[#D8D5C8]/60 shadow-sm space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#556B2F]">
                        <Heart className="w-3.5 h-3.5 text-primary" />
                        <span>Keterangan Lansia Aktif &amp; Mandiri</span>
                      </div>
                      <p className="text-xs text-text-paragraph leading-relaxed">
                        Lansia yang terbilang aktif adalah warga binaan usia senja yang memiliki kemandirian fisik yang baik dalam aktivitas sehari-hari (ADL). Mereka rutin berpartisipasi dalam senam kebugaran lansia, berkebun ringan di pekarangan wisma, merajut/membuat kerajinan tangan, serta mengikuti bimbingan spiritual dan rekreasi bersama untuk menjaga kesehatan fisik, mental, dan ketajaman kognitif.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        )}

        {/* Panti Karya Section */}
        {(activeTab === 'all' || activeTab === 'karya') && (
          <section className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              
              <div className="relative group">
                <div className="relative p-4 bg-[#F8F7F2] rounded-3xl shadow-xl border border-[#D8D5C8]">
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      alt="Sesi pelatihan vokasi"
                      className="rounded-2xl w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                      src="https://lh3.googleusercontent.com/aida/AP1WRLubu9fcg7slJlHzTbDbFmad39MlGXxv3KeMn69VB8lTmhqztDKlR6zDV6qB3nvmgNVPo0U0WtJdtpR6tiJpRrHBWti-qW34izL7auTawJ6himZh5v8eIB_jkGQwumAKL_xURm_JQkcoHSLbUwZ7AfQo24fEMnqRCJ6UKYHK1SmCDTKHIjxXiCy0cor7IRwVADV7Gi4Ag6UWTgbKrAycafTTab8c0r0UWXtwvdIXliPB4SpGOnFbQtTnn38J7nchMLlWjJ90czXbGko=s1600?authuser=3"
                      referrerPolicy="no-referrer"
                    />
                    {/* Absolute Badge representing Active Residents in Panti Karya */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl flex items-center gap-3 border border-border-soft/60 shadow-md">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-extrabold text-text-heading block">11 Warga Aktif</span>
                        <span className="text-[10px] text-text-paragraph block">Produktif &amp; Mandiri</span>
                      </div>
                    </div>
                  </div>

                  {/* Description of Active Residents in Panti Karya */}
                  <div className="mt-4 p-4 bg-white rounded-2xl border border-[#D8D5C8]/60 shadow-sm space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#556B2F]">
                      <Heart className="w-3.5 h-3.5 text-primary" />
                      <span>Keterangan Warga Karya Aktif</span>
                    </div>
                    <p className="text-xs text-text-paragraph leading-relaxed">
                      Warga binaan aktif di Panti Karya adalah warga usia produktif (berusia antara 18-59 tahun) yang berpartisipasi aktif dalam berbagai program bimbingan vokasional dan latihan kerja. Mereka terlibat langsung dalam kegiatan produktif seperti pembuatan kerajinan kayu, menjahit, pertanian organik/hidroponik, hingga pelatihan kewirausahaan dasar demi kesiapan kerja dan kemandirian ekonomi berkelanjutan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-primary tracking-widest uppercase">
                  <span>PEMBERDAYAAN PRODUKTIF</span>
                </div>
                <h2 className="display-font text-4xl md:text-5xl text-text-heading font-semibold leading-tight">
                  Panti Karya
                </h2>
                <p className="text-sm md:text-base text-text-paragraph leading-relaxed">
                  Panti Karya menitikberatkan pada pemberdayaan sosial-ekonomi melalui serangkaian bimbingan mental, latihan kerja vokasional, dan keterampilan praktis terpadu bagi warga usia produktif agar mandiri dan berdaya saing secara finansial.
                </p>

                <div className="p-6 bg-white border-l-4 border-[#556B2F] rounded-r-3xl shadow-sm space-y-2">
                  <h4 className="display-font text-xl text-[#556B2F] font-bold">Kemandirian Ekonomi</h4>
                  <p className="text-xs text-text-paragraph leading-relaxed">
                    Mencetak individu-individu yang memiliki daya saing keterampilan tinggi, siap diserap dunia industri, atau sanggup merintis usaha mandiri melalui program pembekalan intensif.
                  </p>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* Statistics Sections */}
        {(activeTab === 'all') && (
          <>
            {/* Unit Layanan Stats */}
            <section className="bg-warm-ivory py-20 border-t border-border-soft/60">
              <div className="max-w-[1024px] mx-auto px-6">
                <div className="text-center mb-12">
                  <TableProperties className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h2 className="display-font text-4xl text-text-heading font-semibold">Statistik Unit Layanan</h2>
                  <p className="text-sm text-text-paragraph mt-2">Data jumlah penghuni aktif pada masing-masing unit asuhan sosial kami.</p>
                </div>

                <div className="overflow-x-auto bg-white rounded-3xl border border-border-soft shadow-lg">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border-soft bg-warm-ivory/50">
                        <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-text-heading">Unit Layanan</th>
                        <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-text-heading text-center w-32">Laki-Laki (L)</th>
                        <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-text-heading text-center w-32">Perempuan (P)</th>
                        <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-text-heading text-right w-32">Jumlah</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-soft text-text-paragraph text-sm font-semibold">
                      {statisticsUnit.map((row, idx) => (
                        <tr key={idx} className="hover:bg-warm-ivory/40 transition-colors">
                          <td className="px-8 py-5 font-bold text-text-heading">{row.name}</td>
                          <td className="px-8 py-5 text-center font-mono text-primary">{row.l}</td>
                          <td className="px-8 py-5 text-center font-mono text-pink-600">{row.p}</td>
                          <td className="px-8 py-5 text-right font-mono text-text-heading text-base font-bold">{row.total}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-primary/5 border-t-2 border-primary/20">
                        <td className="px-8 py-5 font-extrabold text-text-heading text-base">Total Penghuni Unit</td>
                        <td className="px-8 py-5 text-center font-mono font-extrabold text-primary text-base">33</td>
                        <td className="px-8 py-5 text-center font-mono font-extrabold text-pink-600 text-base">33</td>
                        <td className="px-8 py-5 text-right font-mono font-extrabold text-primary text-lg">66</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </section>

            {/* Children Grade Details Stats */}
            <section className="bg-white py-20 border-b border-border-soft/60">
              <div className="max-w-[1024px] mx-auto px-6">
                <div className="text-center mb-12">
                  <Activity className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h2 className="display-font text-4xl text-text-heading font-semibold">Rincian Tingkat Sekolah Panti Asuhan</h2>
                  <p className="text-sm text-text-paragraph mt-2">Detail jenjang pendidikan formal yang sedang ditempuh oleh anak asuh.</p>
                </div>

                <div className="overflow-x-auto bg-white rounded-3xl border border-border-soft shadow-lg">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border-soft bg-warm-ivory/50">
                        <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-text-heading">Jenjang Pendidikan</th>
                        <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-text-heading text-center w-32">Laki-Laki (L)</th>
                        <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-text-heading text-center w-32">Perempuan (P)</th>
                        <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-text-heading text-right w-32">Jumlah</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-soft text-text-paragraph text-sm font-semibold">
                      {statisticsChildren.map((row, idx) => (
                        <tr key={idx} className="hover:bg-warm-ivory/40 transition-colors">
                          <td className="px-8 py-5 font-bold text-text-heading">Sekolah {row.grade}</td>
                          <td className="px-8 py-5 text-center font-mono text-primary">{row.l}</td>
                          <td className="px-8 py-5 text-center font-mono text-pink-600">{row.p}</td>
                          <td className="px-8 py-5 text-right font-mono text-text-heading text-base font-bold">{row.total}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-primary/5 border-t-2 border-primary/20">
                        <td className="px-8 py-5 font-extrabold text-text-heading text-base">Total Pendidikan Anak</td>
                        <td className="px-8 py-5 text-center font-mono font-extrabold text-primary text-base">12</td>
                        <td className="px-8 py-5 text-center font-mono font-extrabold text-pink-600 text-base">9</td>
                        <td className="px-8 py-5 text-right font-mono font-extrabold text-primary text-lg">21</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </section>
          </>
        )}

      </main>

    </div>
  );
}
