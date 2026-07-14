import { motion } from 'motion/react';
import { PageType } from '../types';
import { ArrowRight, Quote, Heart, GraduationCap, HeartPulse, Sprout, Landmark, Eye, ChevronRight, Users } from 'lucide-react';
// @ts-ignore
import heroBg from '../assets/images/hero_witte_kruis_1783734791973.jpg';

interface HomeProps {
  setCurrentPage: (page: PageType) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  const handleNavClick = (pageId: PageType) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const timelineData = [
    {
      years: "1902 – 1924",
      title: "Witte Kruis Kolonie",
      desc: "Nama ini diambil berdasarkan temuan sebuah marmer berbentuk salib berwarna putih ketika membuka lahan untuk pemukiman para pengungsi bencana alam Gunung Kelud."
    },
    {
      years: "1924 – 1942",
      title: "Vereniging den Witte Kruis Kolonie",
      desc: "Setelah wafatnya pendiri utama A. Th. J. van Emmerik, status organisasi ditingkatkan menjadi perkumpulan berbadan hukum resmi untuk menjamin kelangsungan pelayanan kasih."
    },
    {
      years: "1942 – 1945",
      title: "Rumah Sosial Pemerintah Jepang",
      desc: "Masa pendudukan Jepang merupakan periode transisi yang menantang. Fasilitas panti dialihfungsikan di bawah pengawasan ketat pemerintahan militer Jepang."
    },
    {
      years: "1945 – 1948",
      title: "Perkumpulan Rumah Sosial Sana Papa",
      desc: "Masa kemerdekaan awal yang dipimpin oleh Bapak Somadilaga. Nama 'Sana Papa' mencerminkan bahasa Indonesia yang berarti tempat bagi kaum dhuafa."
    },
    {
      years: "1948 – 1952",
      title: "Perkumpulan Rumah Sosial Sana Papa (Era Pemulihan)",
      desc: "Kepemimpinan diserahkan kembali kepada putra pendiri, Santosa van Emmerik, guna membangun kembali sarana prasarana pasca-perang kemerdekaan."
    },
    {
      years: "1952 – 1977",
      title: "Perkumpulan Rumah Perawatan Salib Putih",
      desc: "Penyerahan aset secara penuh ke Sinode Gereja Kristen Jawa (GKJ). Nama diubah oleh Ds. Basuki Probowinoto untuk mengembalikan nama historis legendaris 'Salib Putih'."
    },
    {
      years: "1977 – Sekarang",
      title: "Yayasan Sosial Kristen Salib Putih (YSKSP)",
      desc: "Badan hukum disesuaikan menjadi bentuk Yayasan demi profesionalisme, tata kelola modern, akuntabilitas publik, dan keberlanjutan pelayanan lintas zaman."
    }
  ];

  return (
    <div className="animate-in fade-in duration-300">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-24 px-6 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Hero Background"
            className="w-full h-full object-cover opacity-75 scale-100"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3T-Et4WL5GXW85Crm0BDPXXAQh4HJT1KIWUz_F7q8JYXQ6hOS8bY96pxw7mTB1_e2jLA5ar0oZr2unT_1wsKcSDzeewc6C6ZSt10RyGl139bCCX1E1tl9zqoE34gWLSlrDDuq2L3mgw-VaM_I5JfJec0T6CSATTEprbyvF3nTWYxqcHf1jL-07YcvajQAhPueVUsn55fUY5aDlJUq1xFOiKLn9y43fNl2R93bIAPBpvu3x0V_srFCxAAcu2HK7mhElMw"
            onError={(e) => {
              e.currentTarget.src = heroBg;
            }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warm-ivory/20 via-warm-ivory/65 to-warm-ivory" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <motion.span
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-primary-fixed text-primary font-bold text-xs py-1.5 px-5 rounded-full tracking-widest uppercase shadow-sm border border-primary/10"
          >
            SEJAK 1902 • SALATIGA
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-font text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight"
          >
            Salib Putih: Wujud Cinta Kasih <br />
            <span className="italic font-normal text-olive-hover">Kepada Tuhan &amp; Sesama</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-text-paragraph max-w-3xl mx-auto leading-relaxed"
          >
            Mewujudkan pelayanan kepada masyarakat yang membutuhkan dengan cara memberikan perawatan, pendidikan, penyantunan, dan pendampingan agar menjadi manusia bermartabat, damai sejahtera, penuh sukacita, dan pengharapan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <button
              onClick={() => handleNavClick('tentang')}
              className="w-full sm:w-auto bg-primary hover:bg-olive-hover text-white font-bold py-4 px-10 rounded-full transition-all flex items-center justify-center gap-2 shadow-md group cursor-pointer"
            >
              Tentang Kami
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                document.getElementById('programs-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-white border border-primary/20 text-primary hover:bg-primary-fixed/30 font-bold py-4 px-10 rounded-full transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              Lihat Program Kami
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Program Unggulan Section */}
      <section id="programs-section" className="py-24 px-8 bg-white border-y border-border-soft/60" data-purpose="programs-section">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-text-heading mb-6 display-font">Program Unggulan Kami</h2>
            <p className="text-lg text-text-paragraph max-w-3xl mx-auto">Melayani dengan kasih melalui pilar sosial, kesehatan, pendidikan, dan kemandirian untuk menciptakan dampak berkelanjutan bagi masyarakat.</p>
          </div>

          {/* Sosial Category */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-primary mb-8 display-font border-b border-border-soft pb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </span>
              Sosial
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-warm-ivory/30 rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow border border-border-soft/50">
                <img
                  alt="Panti Asuhan"
                  className="w-full h-56 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-HldH5GI3gUyaaY84KsN_iDIPhBg1HgoD1sswZcufVORtRfLw4HS_LNZI-oMTkpik4Pj4nWz5r0jzSotAIv-PYrgZl24hgFjC0A5xRLe1tO_47ec3y1hHLyDWCt6lRCTLywCcAh_EAtylN13K1hKXo0GA5i7oCN40LSL9USM4G-MedVxkE4yx_MBuGzfNta3btgjGm0BF3blmBuMHs1yfRZeX7Cnz6X8h5W9uSrDyjbHCBcKA1fTVS9t9xfXwStM5ITI5tx-VJF4-FwU"
                />
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-2xl font-bold text-text-heading mb-3">Panti Asuhan</h4>
                  <p className="text-sm text-text-paragraph mb-6 flex-grow leading-relaxed">Memberikan pelayanan holistik kepada anak-anak terlantar agar hidup mandiri, berkualitas dan bermartabat.</p>
                  <button
                    onClick={() => handleNavClick('sosial')}
                    className="block text-center bg-white hover:bg-primary hover:text-white text-primary border border-primary/20 py-3 rounded-full transition-colors text-sm font-semibold cursor-pointer"
                  >
                    Lihat lebih detail
                  </button>
                </div>
              </div>

              <div className="bg-warm-ivory/30 rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow border border-border-soft/50">
                <img
                  alt="Panti Wredha"
                  className="w-full h-56 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZrEAhM0lWyBwcRXc8VpzrqA3M3lk4ZIIJwwdee62vmcW8Xu90A34mos_LwNTQ3qT_BC967Xqn4LlWfknZJK9MPvWRMzn3O8C1GDh8-poO7qPfFnO5WvsSF_zE6CjM-u7svo9rNKUhvr_zsR2XIQDNgIcLH35gA8UHQqYDsWulSA1AlZAY7eXvLlcZ_OcpxwtC3YzrzIG5Vxz_NILjUo5DO0fPQWAEuDKjwofm0erYGwHegPo-MaRrClfFdchxQbrgLZ9uMpVaWGYRY6k"
                />
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-2xl font-bold text-text-heading mb-3">Panti Wredha</h4>
                  <p className="text-sm text-text-paragraph mb-6 flex-grow leading-relaxed">Memberikan pelayanan holistik dan pendampingan bagi lansia terlantar agar dapat menikmati masa tua dengan sukacita dan bermartabat.</p>
                  <button
                    onClick={() => handleNavClick('sosial')}
                    className="block text-center bg-white hover:bg-primary hover:text-white text-primary border border-primary/20 py-3 rounded-full transition-colors text-sm font-semibold cursor-pointer"
                  >
                    Lihat lebih detail
                  </button>
                </div>
              </div>

              <div className="bg-warm-ivory/30 rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow border border-border-soft/50">
                <img
                  alt="Panti Karya"
                  className="w-full h-56 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyxG5Epnko_XVd_9dw1BfZpDuQwf6y6t2vMgeQtdNuBUNGFmulo700fV2M-bBU1HBHTM4tlAIqf70mgMcSZQU7XuYcxmjljq7LUYsiVd0CA-JVnUexNw_f6ijVZLl5hHhCwkDdYwd1-MZpWEg_H1IpGvP5yjWvuvV3UMNinG1JyowK1ogaujjdTvuMUV_mFvmXlUNy9TD-sWn-IDZnR41_jbBYM-NlRHJm2vmKPhM1x1HlXnmv5W5AO-EFm1juXU29hRNWEJ1VYjlikv8"
                />
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-2xl font-bold text-text-heading mb-3">Panti Karya</h4>
                  <p className="text-sm text-text-paragraph mb-6 flex-grow leading-relaxed">Pemberdayaan masyarakat melalui kegiatan pelatihan kerja agar mandiri secara ekonomi dan hidup bermartabat.</p>
                  <button
                    onClick={() => handleNavClick('sosial')}
                    className="block text-center bg-white hover:bg-primary hover:text-white text-primary border border-primary/20 py-3 rounded-full transition-colors text-sm font-semibold cursor-pointer"
                  >
                    Lihat lebih detail
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Pendidikan Category */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-primary mb-8 display-font border-b border-border-soft pb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </span>
              Pendidikan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-warm-ivory/30 rounded-lg overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow border border-border-soft/50">
                <img
                  alt="Balai Latihan Kerja"
                  className="w-full md:w-1/2 h-64 md:h-auto object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtnhWj5xLz8IeuIKWBjiDLJ8YwdUe_NfNWreWSrTyil7xkHRWNV40kJTS0LcRBQmlxdbw8UeDBPgfH_CWn7eZo0gFobk3NjIZvTojYZ2FdldK_L6sSoYJTSRB5fSvTV-P5CAWUU5l2B93pnSI92dY25AmElggcU7ZNWF3wyPi-Uul94fxP-NpIzgavgehzL7P6UtKK6qscs_z32715p_U79TXmokgz008OU-9Hnh6t6t28tAg8e3pjrPc1jCXLDUaTixk5mDbt8oID-2k"
                />
                <div className="p-8 flex flex-col justify-center w-full md:w-1/2">
                  <h4 className="text-2xl font-bold text-text-heading mb-3">Balai Latihan Kerja (BLK)</h4>
                  <p className="text-sm text-text-paragraph mb-6 leading-relaxed">Pusat pelatihan vokasi yang membekali peserta dengan keterampilan sebagai Barista Profesional yang siap kerja untuk menjawab kebutuhan industri.</p>
                  <button
                    onClick={() => handleNavClick('pendidikan')}
                    className="block text-center bg-white hover:bg-primary hover:text-white text-primary border border-primary/20 py-3 rounded-full transition-colors text-sm font-semibold cursor-pointer"
                  >
                    Pelajari lebih lanjut
                  </button>
                </div>
              </div>

              <div className="bg-warm-ivory/30 rounded-lg overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow border border-border-soft/50">
                <img
                  alt="Eduwisata &amp; Museum"
                  className="w-full md:w-1/2 h-64 md:h-auto object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvh3P0cT4r4H7gAThfbMEK_6iNaZVPFkC6-i1X2D-w3SB4LSgz6YWJXVXJtpJSjT1a_LD7RwGdIzzLCFWr9kkFFUBu6LJAi8pKYOk1kClKE_al68b7_l3ZiKSywDQATYrsQlPbfqDbaZPhm05b5Jgt_hzXIIEahHJ-BdxuTJJ4h-BG29MwFHNLED5MK7-endkq-yalqjGHqPkHpbt92ZPGn2t2aGlZcKkTyCZ6gQxoMl8597ngP9pk0yOo6I4fgd_wk_qXUu6ss6BAhXI"
                />
                <div className="p-8 flex flex-col justify-center w-full md:w-1/2">
                  <h4 className="text-2xl font-bold text-text-heading mb-3">Eduwisata &amp; Museum</h4>
                  <p className="text-sm text-text-paragraph mb-6 leading-relaxed">Fasilitas edukasi interaktif yang melestarikan sejarah yayasan sekaligus menjadi sarana pembelajaran publik.</p>
                  <button
                    onClick={() => handleNavClick('pendidikan')}
                    className="block text-center bg-white hover:bg-primary hover:text-white text-primary border border-primary/20 py-3 rounded-full transition-colors text-sm font-semibold cursor-pointer"
                  >
                    Pelajari lebih lanjut
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Kesehatan & Usaha Mandiri */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Kesehatan */}
            <div>
              <h3 className="text-3xl font-bold text-primary mb-8 display-font border-b border-border-soft pb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <HeartPulse className="w-5 h-5 text-primary" />
                </span>
                Kesehatan
              </h3>
              <div className="bg-warm-ivory/30 rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow border border-border-soft/50">
                <img
                  alt="Klinik Umum"
                  className="w-full h-64 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbWYzhRKFfeKvFYPtJvrrJxWe7mLqQ4wYhMzf8cCkTEMfcgui380yke4-RKVgnqFsFpDKsFS4-0cmn7Ao4n692SbAKGhzm2yM1QWxrDvRkcx53tpRsIQOtZK5SpetL7m5Cm9YLnHwFVACDf-_s1nK3pA2Kj3-F-4fBhVi-61OUEI4vt1jYZyXHK_IlShVfBfM40i5t8nwmD49V1uKayqTvtPkyxTciHROCotBIbvzqR1YoTxo3XnhsJlQWru-UZznzPhdaTIVQ6tbjYh0"
                />
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-text-heading mb-3">Klinik Umum</h4>
                  <p className="text-sm text-text-paragraph mb-6 leading-relaxed">Layanan kesehatan dasar yang terjangkau dan berkualitas bagi masyarakat sekitar dan penghuni panti.</p>
                  <button
                    onClick={() => handleNavClick('kesehatan')}
                    className="block w-full text-center bg-white hover:bg-primary hover:text-white text-primary border border-primary/20 py-3 rounded-full transition-colors text-sm font-semibold cursor-pointer"
                  >
                    Pelajari lebih lanjut
                  </button>
                </div>
              </div>
            </div>

            {/* Usaha Mandiri */}
            <div>
              <h3 className="text-3xl font-bold text-primary mb-8 display-font border-b border-border-soft pb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sprout className="w-5 h-5 text-primary" />
                </span>
                Usaha Mandiri
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-warm-ivory/30 rounded-lg overflow-hidden flex flex-col border border-border-soft/50 hover:shadow-lg transition-shadow">
                  <img
                    alt="Perkebunan"
                    className="w-full h-44 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfSCX4uLI9abdB0CQFvlRfHI1XSED6b019NpcwbzxU6O-o003rEOC-MNdNxxOCUOqYb_QjiN1nL6_8yzrbZWqq48la8RPa6z9NubqwaRrigPLsaDUV7ulg3qbD_NJGynO949wwRYSsqxUUiqYLiu1AEXosq2iH4gc3XH0PbFjkxzXgbZSSBO141eW39O90VKk58-34R6KCWpwIRtNOz-Iq5LIFoHlYcAcIwdT-RoiDrmd01Ce4LMJlI1u-f7YCUF2HGcelruwu9a8WYk0"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold text-text-heading mb-2">Perkebunan</h4>
                    <p className="text-xs text-text-paragraph mb-6 leading-relaxed">Pengelolaan lahan pertanian berkelanjutan untuk kemandirian.</p>
                    <button
                      onClick={() => handleNavClick('kemandirian')}
                      className="mt-auto block w-full text-center bg-white hover:bg-primary hover:text-white text-primary border border-primary/20 py-2.5 rounded-full transition-colors text-xs font-semibold cursor-pointer"
                    >
                      Lihat lebih detail
                    </button>
                  </div>
                </div>

                <div className="bg-warm-ivory/30 rounded-lg overflow-hidden flex flex-col border border-border-soft/50 hover:shadow-lg transition-shadow">
                  <img
                    alt="Peternakan"
                    className="w-full h-44 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY3dm9cPHJCIGtnz9wqwaN4dy1dnhwU1wWsqwJKHW4waPK6HOpKiggqdF9M21SX-J_SZbxickZ-OoP-aKNqE6c02vjUXykw6gfqJ-EawEQIla3YMpBx69uW0SUKEd69LZHEiGb7Jk_GzJ4VmFWXvzUp0OPE9Zb6_iJKCqz7apLaXBshN8omOA0LpbNHp0loomMvkl1sZnD5BmPJbvEypYvcb8rhk1ekKHxWD-eyboC1i49h5u3xM3Dh3WMUwTRGncTfEIsheODd7OS5hM"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold text-text-heading mb-2">Peternakan</h4>
                    <p className="text-xs text-text-paragraph mb-6 leading-relaxed">Peternakan modern sebagai pilar ketahanan pangan yayasan.</p>
                    <button
                      onClick={() => handleNavClick('kemandirian')}
                      className="mt-auto block w-full text-center bg-white hover:bg-primary hover:text-white text-primary border border-primary/20 py-2.5 rounded-full transition-colors text-xs font-semibold cursor-pointer"
                    >
                      Lihat lebih detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Timeline Sejarah Section */}
      <section className="py-24 px-6 bg-warm-ivory">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-primary tracking-widest uppercase block mb-3">TRANSFORMASI HISTORIS</span>
            <h2 className="display-font text-4xl md:text-5xl font-bold text-text-heading leading-tight mb-4">
              Perkembangan Nama Salib Putih Sejak Didirikan
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-base text-text-paragraph">
              Menelusuri jejak langkah tulus, sejarah kepemimpinan, dan transformasi identitas pelayanan Yayasan Sosial Kristen Salib Putih dari masa ke masa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Static Visual Witness */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white relative group">
                <img
                  alt="Gereja Kristen Jawa Salib Putih"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3T-Et4WL5GXW85Crm0BDPXXAQh4HJT1KIWUz_F7q8JYXQ6hOS8bY96pxw7mTB1_e2jLA5ar0oZr2unT_1wsKcSDzeewc6C6ZSt10RyGl139bCCX1E1tl9zqoE34gWLSlrDDuq2L3mgw-VaM_I5JfJec0T6CSATTEprbyvF3nTWYxqcHf1jL-07YcvajQAhPueVUsn55fUY5aDlJUq1xFOiKLn9y43fNl2R93bIAPBpvu3x0V_srFCxAAcu2HK7mhElMw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <p className="display-font text-xl font-bold">GKJ Salib Putih</p>
                  <p className="text-xs opacity-90 font-sans mt-1">Saksi sejarah pelayanan Salib Putih yang tulus dan kokoh</p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Chronological Timeline */}
            <div className="lg:col-span-7 relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-primary/20 space-y-12">
              {timelineData.map((item, index) => (
                <div key={index} className="relative group/item">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[39px] top-1.5 w-[14px] h-[14px] rounded-full bg-white border-2 border-primary group-hover/item:bg-primary transition-all shadow-sm" />
                  
                  <span className="text-primary font-bold text-sm tracking-widest block mb-1">
                    {item.years}
                  </span>
                  <h4 className="display-font text-2xl font-bold text-text-heading group-hover/item:text-primary transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-text-paragraph leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-warm-ivory rounded-3xl p-10 md:p-16 shadow-lg border border-border-soft relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-primary" />
            <Quote className="w-16 h-16 text-primary/10 absolute top-10 left-10" />
            
            <div className="relative z-10 text-center max-w-3xl mx-auto space-y-10">
              <h2 className="display-font text-3xl md:text-5xl font-extrabold text-text-heading italic leading-tight">
                “Katemenan Iku Ajine Ngungkuli Kapinteran”
              </h2>
              <p className="text-lg md:text-xl font-semibold text-olive-hover -mt-4">
                (Kesungguhan dan Kejujuran Itu Nilainya Melebihi Kepintaran Semata)
              </p>
              
              <div className="flex flex-col items-center gap-4 pt-4 border-t border-border-soft/60">
                <div className="w-12 h-12 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold text-lg">
                  SP
                </div>
                <div>
                  <p className="font-bold text-text-heading text-lg">A. Th. J. van Emmerik &amp; Alice Cleverly</p>
                  <p className="text-xs text-primary font-bold tracking-widest uppercase mt-1">Pendiri Witte Kruis Kolonie (1902)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-6 bg-warm-ivory border-t border-border-soft/40">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs font-bold text-primary tracking-widest uppercase block mb-3">KOLABORASI KASIH</span>
          <h2 className="display-font text-3xl font-bold text-text-heading mb-12">Mitra Strategis &amp; Pendukung Pelayanan</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {[
              "Pemerintah Kota Salatiga",
              "Sinode Gereja Kristen Jawa",
              "Kementerian Sosial RI",
              "Kementerian Tenaga Kerja RI",
              "Univ. Kristen Satya Wacana",
              "Dinas Sosial Prov. Jateng"
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-white border border-border-soft hover:border-primary/30 p-5 rounded-2xl flex items-center justify-center h-24 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="text-xs font-bold text-text-heading text-center leading-tight">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
