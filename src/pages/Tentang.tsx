import { History, Shield, Scale, Compass, Eye, Flag, Verified, Users } from 'lucide-react';

export default function Tentang() {
  
  const pembina = {
    role: "Pembina",
    ketua: "Pdt. Aris Widaryanti, S.Th., M.Min.",
    sekretaris: "Pdt. Adi Setyo Kristianto, S.Si.",
    anggota: [
      "Pdt. Wiworo Adi Kawurjanto Setjo",
      "Joko Yochanan"
    ]
  };

  const pengawas = {
    role: "Pengawas",
    ketua: "Harry Suharyono, S.E, Akt",
    sekretaris: "Pdt. Lukas Budi Gunawan, S.Si",
    anggota: [
      "Prof. Dr. Ir. Sony Heru Priyanto, M.M"
    ]
  };

  const pengurus = {
    role: "Pengurus",
    ketua: "Arief Sadjiarto, S.E., M.Pd. & Ir. Tri Susilo Budi",
    sekretaris: "Pdt. Daniel Adi Nugroho, S.Ag & Ir. Dhodiet Purwo, M.Si.",
    bendahara: "Ir. Mugi Pamungkas Widi Kuncoro, M.M. & Ratna Puspitaningtyas, S.E, M.Si.",
    anggota: [
      "Pdt. Pintoko Danang Pramudito, S.Si"
    ]
  };

  const legalitasDocs = [
    { label: "Akta Pendirian", val: "No. 123 / YSKSP / 1902" },
    { label: "SK Kemenkumham", val: "AHU-000123.AH.01.04.Tahun 2000" },
    { label: "NPWP Yayasan", val: "12.345.678.9-000.000" },
    { label: "Izin Operasional", val: "Dinas Sosial Prov. Jawa Tengah" }
  ];

  return (
    <div className="animate-in fade-in duration-300">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 text-center space-y-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
          <History className="w-3.5 h-3.5" />
          Mengenal Lebih Dekat
        </span>
        <h1 className="display-font text-5xl md:text-7xl font-extrabold text-primary leading-none">Tentang Kami</h1>
        <p className="font-body-lg text-sm md:text-base text-text-paragraph max-w-3xl mx-auto leading-relaxed">
          Yayasan Sosial Kristen Salib Putih didirikan di atas landasan cinta kasih, kepedulian yang mendalam, serta semangat pengabdian tanpa pamrih sejak tahun 1902 di Kota Salatiga.
        </p>
      </section>

      {/* Sejarah Awal */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="p-8 md:p-12 bg-white rounded-3xl border border-border-soft shadow-lg space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <History className="w-6 h-6" />
              <h2 className="display-font text-3xl font-bold">Sejarah Awal Berdirinya</h2>
            </div>
            <p className="text-xs md:text-sm text-text-paragraph leading-loose">
              Yayasan Sosial Kristen Salib Putih (YSKSP) bermula dari berdirinya <strong>Witte Kruis Kolonie</strong> pada tanggal <strong>14 Mei 1902</strong> oleh pasangan suami-istri berjiwa mulia, <strong>A.Th. J. van Emmerik</strong> dan <strong>Alice Cornelia Cleverly</strong>. Terpanggil oleh kepedulian mendalam terhadap kaum dhuafa, buruh tani miskin, dan para penyintas bencana alam Gunung Kelud Jawa Timur tahun 1901, mereka memulai karya pelayanan di Salatiga yang asri dan berlanjut kokoh melayani sesama hingga hari ini.
            </p>
          </div>

          <div className="relative group rounded-3xl overflow-hidden border border-border-soft shadow-xl h-[340px] md:h-[400px]">
            <img
              alt="Bangunan kolonial klasik Salib Putih"
              className="w-full h-full object-cover grayscale-[0.2] sepia-[0.1] hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida/AP1WRLs2qnNs6-FGk3U5QxZzsAMj4RZruewsAm1YJQRBOHJy9vmefTu1nHsOoLelQWGuuXhHdJmnJbHdSUUXrRvEbSoSXqovj_svPr1hbRsVL2ftvXDTG_r7rd_NtNU3fDa6U9FaKh1_z80FjAby1YS66upxj2YQp2gtWKDgtIGk7AoIJWju8u4utwwwsQI2K29LZAt9DXIMKq-xRnxE2loM1B92NKm45WWJz0yqkQAqOkBz3yvATOWE9M48zsrmS79ym2D2Xsb7R1T62Q=s1600"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </section>

      {/* Filosofi Section */}
      <section className="bg-white py-24 border-y border-border-soft/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-primary">
                <Compass className="w-6 h-6" />
                <h2 className="display-font text-3xl font-bold">Filosofi Nama Salib Putih</h2>
              </div>
              
              <div className="space-y-6">
                <div className="p-8 bg-warm-ivory/50 rounded-2xl border border-border-soft hover:shadow-md transition-shadow">
                  <h3 className="display-font text-2xl font-bold text-primary mb-3">Salib</h3>
                  <p className="text-xs md:text-sm text-text-paragraph leading-relaxed">
                    Melambangkan <strong>Kasih dan Pengorbanan</strong>. Ini merupakan fondasi utama dalam melayani sesama manusia tanpa pamrih, mencerminkan teladan cinta kasih Ilahi yang nyata bagi perdamaian dunia.
                  </p>
                </div>
                
                <div className="p-8 bg-warm-ivory/50 rounded-2xl border border-border-soft hover:shadow-md transition-shadow">
                  <h3 className="display-font text-2xl font-bold text-primary mb-3">Putih</h3>
                  <p className="text-xs md:text-sm text-text-paragraph leading-relaxed">
                    Melambangkan <strong>Kesucian dan Ketulusan</strong>. Berkomitmen kuat menjalankan roda visi dan misi yayasan dengan niat yang bersih, jujur, serta senantiasa menjunjung tinggi nilai integritas moral dalam pelayanan.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative layout */}
            <div className="aspect-square bg-warm-ivory/30 rounded-3xl flex flex-col items-center justify-center border-2 border-dashed border-primary/20 p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="display-font text-2xl font-bold text-text-heading">Integritas Pelayanan</h4>
              <p className="text-xs text-text-paragraph max-w-sm leading-relaxed">
                Kami berkomitmen merawat, mendidik, menyantuni, dan memberdayakan masyarakat rentan secara murni demi keselamatan kehidupan yang damai, sejahtera, bermartabat, dan berpengharapan.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-primary rounded-3xl overflow-hidden relative min-h-[500px] flex items-center shadow-xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
          
          <div className="grid lg:grid-cols-2 gap-0 relative z-10 w-full h-full divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            
            {/* Visi */}
            <div className="p-10 md:p-16 flex flex-col justify-center text-white space-y-6">
              <div className="flex items-center gap-3">
                <Eye className="w-8 h-8 text-primary-fixed" />
                <h2 className="display-font text-3xl font-bold">Visi Yayasan</h2>
              </div>
              <p className="display-font text-3xl md:text-4xl italic leading-relaxed text-primary-fixed font-light">
                &quot;Mewujudkan kasih Allah kepada sesama demi keselamatan manusia secara utuh.&quot;
              </p>
            </div>

            {/* Misi */}
            <div className="p-10 md:p-16 flex flex-col justify-center text-white space-y-6">
              <div className="flex items-center gap-3">
                <Flag className="w-8 h-8 text-primary-fixed" />
                <h2 className="display-font text-3xl font-bold">Misi Pelayanan</h2>
              </div>
              <ul className="space-y-4 text-xs md:text-sm font-semibold">
                <li className="flex items-start gap-3">
                  <Verified className="w-5 h-5 text-primary-fixed mt-0.5 shrink-0" />
                  <span>Menyelenggarakan pelayanan asuhan sosial berkualitas bagi anak terlantar, lansia, dan warga rentan.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Verified className="w-5 h-5 text-primary-fixed mt-0.5 shrink-0" />
                  <span>Menyediakan akses fasilitas kesehatan klinis pengobatan dasar yang higienis, merata, dan terjangkau.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Verified className="w-5 h-5 text-primary-fixed mt-0.5 shrink-0" />
                  <span>Memajukan bimbingan latihan keterampilan vokasi guna membentuk kemandirian finansial masyarakat.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Verified className="w-5 h-5 text-primary-fixed mt-0.5 shrink-0" />
                  <span>Mengembangkan unit-unit agribisnis dan peternakan kemandirian ekologis untuk menyokong operasional yayasan.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Struktur Organ Yayasan Section */}
      <section className="bg-white py-24 border-y border-border-soft/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <Users className="w-10 h-10 text-primary mx-auto mb-3" />
            <h2 className="display-font text-4xl md:text-5xl font-bold text-text-heading">Struktur Organ Yayasan</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
            <p className="text-xs text-text-paragraph mt-3">Para pemimpin dan jajaran pengurus Yayasan Sosial Kristen Salib Putih yang tulus melayani.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Pembina Card */}
            <div className="bg-warm-ivory/50 rounded-2xl border border-border-soft overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-4 font-bold text-center text-sm uppercase tracking-wider">
                {pembina.role}
              </div>
              <div className="p-8 space-y-6 flex-1">
                <div>
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase block mb-1">KETUA PEMBINA</span>
                  <p className="display-font text-xl font-bold text-text-heading">{pembina.ketua}</p>
                </div>
                <div className="pt-4 border-t border-border-soft/60">
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase block mb-1">SEKRETARIS PEMBINA</span>
                  <p className="text-xs md:text-sm font-semibold text-text-heading">{pembina.sekretaris}</p>
                </div>
                <div className="pt-4 border-t border-border-soft/60">
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase block mb-1.5">ANGGOTA PEMBINA</span>
                  <ul className="text-xs text-text-paragraph space-y-1 font-semibold">
                    {pembina.anggota.map((ang, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {ang}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Pengawas Card */}
            <div className="bg-warm-ivory/50 rounded-2xl border border-border-soft overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-4 font-bold text-center text-sm uppercase tracking-wider">
                {pengawas.role}
              </div>
              <div className="p-8 space-y-6 flex-1">
                <div>
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase block mb-1">KETUA PENGAWAS</span>
                  <p className="display-font text-xl font-bold text-text-heading">{pengawas.ketua}</p>
                </div>
                <div className="pt-4 border-t border-border-soft/60">
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase block mb-1">SEKRETARIS PENGAWAS</span>
                  <p className="text-xs md:text-sm font-semibold text-text-heading">{pengawas.sekretaris}</p>
                </div>
                <div className="pt-4 border-t border-border-soft/60">
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase block mb-1.5">ANGGOTA PENGAWAS</span>
                  <ul className="text-xs text-text-paragraph space-y-1 font-semibold">
                    {pengawas.anggota.map((ang, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {ang}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Pengurus Card */}
            <div className="bg-warm-ivory/50 rounded-2xl border border-border-soft overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-4 font-bold text-center text-sm uppercase tracking-wider">
                {pengurus.role}
              </div>
              <div className="p-8 space-y-5 flex-1">
                <div>
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase block mb-1">KETUA I &amp; II PENGURUS</span>
                  <p className="text-xs md:text-sm font-bold text-text-heading">{pengurus.ketua}</p>
                </div>
                <div className="pt-3 border-t border-border-soft/60">
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase block mb-1">SEKRETARIS I &amp; II</span>
                  <p className="text-xs font-semibold text-text-paragraph">{pengurus.sekretaris}</p>
                </div>
                <div className="pt-3 border-t border-border-soft/60">
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase block mb-1">BENDAHARA I &amp; II</span>
                  <p className="text-xs font-semibold text-text-paragraph">{pengurus.bendahara}</p>
                </div>
                <div className="pt-3 border-t border-border-soft/60">
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase block mb-1">ANGGOTA</span>
                  <ul className="text-xs text-text-paragraph font-semibold">
                    {pengurus.anggota.map((ang, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {ang}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Legalitas Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-center gap-3 mb-12 text-primary">
          <Scale className="w-6 h-6" />
          <h2 className="display-font text-3xl font-bold">Keterbukaan &amp; Legalitas Resmi</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {legalitasDocs.map((doc, idx) => (
            <div key={idx} className="p-6 bg-white border border-border-soft rounded-2xl shadow-sm">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1.5">{doc.label}</span>
              <p className="text-xs md:text-sm font-bold text-text-heading">{doc.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Transparency / Call to Action */}
      <section className="bg-warm-ivory py-24 border-t border-border-soft/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <h2 className="display-font text-4xl md:text-5xl font-bold text-primary leading-tight">Transparansi &amp; Integritas dalam Setiap Langkah Pelayanan</h2>
              <p className="text-xs md:text-sm text-text-paragraph leading-relaxed">
                Kami sangat percaya bahwa kepercayaan penderma dan publik dibangun di atas landasan akuntabilitas tinggi serta keterbukaan informasi. Laporan keuangan serta audit dampak kemanusiaan kami selalu dapat diakses secara berkala.
              </p>
              
              <div className="space-y-3 text-xs md:text-sm text-text-heading font-semibold">
                <div className="flex items-center gap-2">
                  <Verified className="w-5 h-5 text-primary shrink-0" />
                  <span>Audit Laporan Keuangan berkala oleh Kantor Akuntan Publik independen</span>
                </div>
                <div className="flex items-center gap-2">
                  <Verified className="w-5 h-5 text-primary shrink-0" />
                  <span>Penyaluran donasi 100% transparan demi kepentingan warga panti</span>
                </div>
                <div className="flex items-center gap-2">
                  <Verified className="w-5 h-5 text-primary shrink-0" />
                  <span>Keterlibatan aktif Sinode GKJ dan perwakilan jemaat sebagai pembina</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-border-soft aspect-video shadow-xl relative group">
              <img
                alt="Pertemuan tim manajemen yayasan"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                src="https://lh3.googleusercontent.com/aida/AP1WRLu7GhUkfFaCm9WYPMny3dtj-PY6VvdIKFbpRCUfphXbkEFPCSxmifxBB7vYRSZxxwNTUOk9QmrrCPL6RlIUgY8g-0FOhrBygiJbln9UvDQBU1wyc4r2bRQjCYGwWz9QijtJQKbN14W0K7OuwCuW2cbJygfw_qhx75kiggwjSrGenZhB077yh53db43NbtpHHK1D7Ze4kMWpW5kGO9c0PStvu-wj1iXszP_VdCUj6JNdWFmJ5YrL9sR4MtZdC09A3T_yTFwdopW3298=s1600?authuser=3"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
