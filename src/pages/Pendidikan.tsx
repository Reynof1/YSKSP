import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, GraduationCap, Sprout, Footprints, History, ShieldAlert, Award, Compass, Heart, ArrowRight } from 'lucide-react';

export default function Pendidikan() {
  const [selectedHistoryCard, setSelectedHistoryCard] = useState<string | null>(null);

  const blkFeatures = [
    {
      icon: Sprout,
      title: "Pertanian Organik",
      desc: "Pelatihan budidaya tanaman ramah lingkungan, pembuatan pupuk organik padat & cair, serta pengelolaan lahan pertanian berkelanjutan terpadu."
    },
    {
      icon: Compass,
      title: "Peternakan Terpadu",
      desc: "Pelatihan pembibitan, pemberian pakan fermentasi berkualitas, pemeliharaan sapi perah/kambing potong terintegrasi agroforestry."
    }
  ];

  const historyCards = [
    {
      id: "museum",
      title: "Museum Witte Kruis",
      category: "PUSAT DOKUMENTASI",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPiEpO5YQpVqh_aC1kQfGJeshwx5x2-2Of7ilCD4ZTjggdHgH2dt19v4FI9b4MsSaHo1YX2grAooiT2VNoS7fb9IEMxEOdgIt_Osee-YHSOI5UBS1aOH3DarB7b_YeA4ZlB2xyUxrfydergprvTI5Es0pRBWQthMxC-Bp6FcCIfqSbSmFnqcTdtQkV8KhPWW3fNXAiYH3EIHLzLEZNTBuqMbg0XxPel2nFjH8e-InjB9ydl1HW8SPOkkyNokO_LLihT4g",
      detail: "Museum Witte Kruis di Salatiga merawat kumpulan arsip, foto, dokumen sejarah pendirian koloni sejak tahun 1902, serta alat-alat kedokteran kuno yang dipergunakan pada masa pelayanan awal di lereng Gunung Merbabu."
    },
    {
      id: "founders",
      title: "Adolf van Emmerik & Alice Cleverly",
      category: "TOKOH PENDIRI",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXZftO3ZGVT4dxeKEU1uDdWbTa2UFX1J7Om9I-S-hBxYvZcORhWZN-3Bd8-lnmISLL8OQxpuvTTtBki1atMf-zIUJ3gShD21WoUvND9hp3jzSAqwKMaCmvdbKefyqKpMNbNp43chVkFwaLBfHYoQEX551BW9QUlGULHw2BxQ2cqznk-Ao1jbyVr2EKlC9t-pnHIP-z3GUDne3b7NwO9tBCh2Jy_npvhTw2IU4Vex7Qhw-fICBQNxULQZeGKfniNlSD-20",
      detail: "Sepasang suami istri berkebangsaan Belanda dan Inggris yang terpanggil untuk membela hak hidup para korban bencana, fakir miskin, dan buruh tani tertindas dengan mendirikan Koloni Salib Putih di Salatiga."
    },
    {
      id: "booth",
      title: "Mengenal William Booth",
      category: "INSPIRASI PELAYANAN",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTW6NzqF0SYEFFtS7kAj7tWLUqiahgVUcd9--muh2lNMDwJiAIRcKkxNcT2NNrtMw26Rpogtu_DBIT1BqPyfGa6--gjui3QHupVv8rRnEsVKos_sLbLqdg88JmIir0dK7rS6J4K7-jZdBfRw4lcn2jHv9Hy4hOdO7RnpTYvHjG12X0hYIPhf-KFg27UQk2cA0bQU9JHrAFB51W-9fbiPoau5Te0bnhSBoqpD4-iy-fzIq-ePOR-ipEFpMZz6Nwx-Y02Ms",
      detail: "William Booth adalah pendiri Bala Keselamatan (The Salvation Army) yang filosofi perjuangan sosialnya 'Soup, Soap, and Salvation' sangat menginspirasi landasan dasar pelayanan kemanusiaan di Witte Kruis."
    },
    {
      id: "kelud",
      title: "Arsip Bencana Kelud 1901",
      category: "LATAR BELAKANG",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0dHrly7yLFla-n2JIxyxTPCBjdRFOZm2NXtz-hBk6jzqL9RRdoLYjMatD8LolVuOnqeBKa4KYvWKgvCguGazQf3vybjC8mGbf_2hJPAwtzcT3cVbfuvHArEGfQPlrQBPlt8XFx6RXUPpcH8VRoggImVKfYsgi029wHLPltysaeyrp2tUEiEQFr1p5wNWeP337_VbBlo-yfS1CQsnFKXQbI3pWcRAZOUR9RkUVly3TtXq60UC-_0V41w6aSNXrOMyKdPw",
      detail: "Bencana letusan Gunung Kelud tahun 1901 meluluhlantakkan Jawa Timur, melahirkan ribuan tunawisma papa yang kemudian dievakuasi ke Salatiga demi perlindungan dan pengasuhan di bawah naungan Witte Kruis."
    },
    {
      id: "japan",
      title: "Koloni Masa Pendudukan Jepang",
      category: "ERA TRANSISI",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTdY8rvS9tInBDDdBxMJtBp3UFsWBvQNrfJYEm25wH0jzVJJX5ajivjIjySKtxFVThgtwS-z8IK2H-SJc02a1HoUtU7_in8jK9rLyUtCzck1rQmZ5HStdVlDfEECOZucSk9-3rAgBxgj1gFkk1F3jB3htShBlxCHp7qQ944rTBOKLaajWznmCW_uvKPXEpOGWB3xsrp9pS-vb6vTzpX9gPWySIcd10KNup70B1i-9Ngm8YO2eVMv5nEF79CSttBl8dpXs",
      detail: "Pada tahun 1942-1945, kekuasaan dialihkan ke Jepang. Fasilitas panti asuhan digabungkan dan diawasi ketat oleh militer Dai Nippon, masa di mana dokumentasi arsip sangat langka karena penghancuran dokumen."
    },
    {
      id: "reunion",
      title: "Penyatuan Pasca Perang",
      category: "ERA KEMERDEKAAN",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBumzitFpOs1vbdiQE-GdMMPqGbcls-AmJsb4wtiiDgNFoUyuf9CaVZo7bpwrx0TEYo8Rd6PFHUG8LJQ6P-1ObZt5prtMAsYHQv579RGzb5QVX9Hu6yWM2dsI0vSLHmO1Uf7qzDs9GCNh66HAoNBHZc_3D4hHkdNRgMFKpTYO8XuYnEzTsZEe5cs_qxGsW4iFG1zEqZhD7Owa3t3z4JnmOqULOHDDGLN6oLvR90EoYXhAN5d6ZJQHloa3MOubusz6mUma8",
      detail: "Pasca-perang fisik kemerdekaan RI, para penderma dan pengurus bergotong royong menyatukan kembali anak-anak asuh dan warga lansia yang sempat terpencar mengungsi ke wilayah pedesaan."
    }
  ];

  return (
    <div className="animate-in fade-in duration-300">
      
      {/* Hero Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center space-y-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
          <BookOpen className="w-3.5 h-3.5" />
          Membina Insan Mandiri
        </span>
        <h1 className="display-font text-5xl md:text-7xl font-extrabold text-text-heading leading-none">
          Membangun Masa Depan <br />
          <span className="italic font-normal text-primary">Melalui Pendidikan</span>
        </h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-text-paragraph leading-relaxed">
          Yayasan Sosial Kristen Salib Putih berkomitmen menyediakan akses pendidikan vokasional yang relevan serta melestarikan warisan edukasi sejarah demi kemajuan bangsa.
        </p>
        
        {/* Large Feature Banner */}
        <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden border border-border-soft shadow-2xl group">
          <img
            alt="Heritage Classroom"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/AP1WRLtr9fMTpL6HT2TL4N2E6-LIag7SuowUuiY_BFmOyDokDvFX-AbVXHMLsBrc7hcUcuUwnvTjFq0azeYOTY0ZM8bFLmMbkDVPOgNP5vgDzBSZzTL60iAQ1Sl3Im1-hVy2mRz2ZOiW1ORZZPm2OZ4WDJr90IFdMNfXyhPT2FU2xD8C7YNWhQR__04BTq9lgoJ8kIYFzUFKZxlhgTHiRocIL2cud9y26qZYstu7zg20FrjIafmZ4BGIN8mvgg-m8R_UifrRcfJu0Q55lHs=s1600"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-left text-white md:max-w-lg">
            <span className="bg-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest block w-max mb-2">Kegiatan Seni</span>
            <h3 className="display-font text-2xl md:text-3xl font-bold leading-tight">Pelatihan Musik Tradisional Angklung</h3>
            <p className="text-xs opacity-90 mt-1">Anak-anak panti asuhan Salib Putih berlatih memainkan alat musik tradisional angklung sebagai bagian dari pembinaan bakat seni dan budaya.</p>
          </div>
        </div>
      </section>

      {/* Balai Latihan Kerja (BLK) Section */}
      <section className="bg-white py-24 border-y border-border-soft/60">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
              <GraduationCap className="w-3.5 h-3.5" />
              BALAI LATIHAN KERJA (BLK)
            </span>
            <h2 className="display-font text-4xl md:text-5xl text-text-heading leading-tight font-bold">
              Membekali Keterampilan Praktis untuk Kemandirian
            </h2>
            <p className="text-sm md:text-base text-text-paragraph leading-relaxed">
              Balai Latihan Kerja (BLK) kami didedikasikan untuk memberikan pelatihan keterampilan vokasional yang sangat relevan dengan kebutuhan agrikultur dan perkebunan saat ini. Misi luhur kami adalah mencetak generasi yang siap kerja dan mandiri secara ekonomi.
            </p>

            <div className="space-y-4">
              {blkFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="p-6 bg-warm-ivory border border-border-soft rounded-3xl flex items-start gap-4 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="display-font text-lg font-bold text-text-heading mb-1">{feat.title}</h4>
                      <p className="text-xs text-text-paragraph leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image and Certification layout */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-border-soft shadow-md h-64">
              <img
                alt="Skill Training"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
                src="https://lh3.googleusercontent.com/aida/AP1WRLs8-iy2PdKnQd8YXNoEP0e_DuktSZR02zsDh8lR3GVIGCPjo3SSkX3B347AxrO1H6hyIv-oG1zljDnByUxqoRlo_SH0yFbc_crfcMkhoJ6l3FL_BW3NfnlIlj9-DQplGyAQSvvAKPSQ03jPYvOeJjmpFmXZpve8wEom1EgYDH6sHJvZEJnrWhJSvZFPmAkrtA2_Gbu1auuAVsC9b-h7Aj5NXfoo3VVUgYlOmDTpA-5E8Z67ieyA2wDv5yx_U72lXJoHLwibDbmhzjM=s1600"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-border-soft shadow-md h-64">
              <img
                alt="Workshop"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
                src="https://lh3.googleusercontent.com/aida/AP1WRLspJJekLXLI6fjktbn4qb2DtpDGd-fzEBW0XjERW8HzZTQnw37Ni3zlw4gmdPstzgIWr8RnkWbEJzZ75LrSWa7Myk1yRD5Teb7ERhYOgz-nX_NmzEuGtDFgYbtRqo8hPAc996uDk3MrEFd1rDEVJJ4omImxR1JwQRGALGIenaO4e_Vp7q3CevkOnscZe_S1cvIkIZGj26c_b7_L7GMuam9teZBykle8jmW-qvGUIt0wzEdZ-v8GgUBElrwt8vboXGlA1aNYXOyh2A=s1600"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Certification Card spans 2 cols */}
            <div className="col-span-2 rounded-2xl bg-primary p-8 text-white flex items-center gap-5 shadow-lg">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h4 className="display-font text-xl font-bold mb-1">Sertifikasi Kompetensi Resmi</h4>
                <p className="text-xs opacity-90 leading-relaxed">
                  Para lulusan pelatihan BLK YSKSP berhak mendapatkan sertifikat resmi kelulusan kompetensi kerja yang diakui serta dihormati secara nasional.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Eduwisata Sejarah Grid Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
            <History className="w-3.5 h-3.5" />
            EDUWcomponent SEJARAH
          </span>
          <h2 className="display-font text-4xl md:text-5xl font-bold text-text-heading">Melestarikan Warisan Sejak 1902</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="max-w-2xl mx-auto text-sm text-text-paragraph">
            Klik pada kartu sejarah di bawah ini untuk menyelami rincian penting perjalanan pengabdian kemanusiaan di Salatiga.
          </p>
        </div>

        {/* History Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
          
          {historyCards.map((card, idx) => {
            const isSelected = selectedHistoryCard === card.id;
            
            // Layout styling (custom grid dimensions per item)
            let gridColSpan = "md:col-span-4";
            let gridRowSpan = "md:row-span-1";
            if (card.id === "museum") {
              gridColSpan = "md:col-span-8";
              gridRowSpan = "md:row-span-2";
            } else if (card.id === "founders") {
              gridColSpan = "md:col-span-4";
              gridRowSpan = "md:row-span-2";
            }

            return (
              <div
                key={card.id}
                onClick={() => setSelectedHistoryCard(isSelected ? null : card.id)}
                className={`${gridColSpan} ${gridRowSpan} rounded-3xl overflow-hidden border border-border-soft bg-white relative group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300`}
              >
                {/* Background image */}
                <img
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={card.img}
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 flex flex-col justify-end p-6 text-white">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-primary-fixed">{card.category}</span>
                  <h3 className="display-font text-xl md:text-2xl font-bold mt-1 leading-tight">{card.title}</h3>
                  <p className="text-[10px] opacity-75 mt-2 flex items-center gap-1 font-semibold group-hover:text-primary-fixed transition-colors">
                    <span>{isSelected ? "Tutup detail" : "Lihat selengkapnya"}</span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                  </p>
                </div>

                {/* Animated detail drawer */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      className="absolute inset-0 bg-primary p-6 text-white flex flex-col justify-center text-center z-10"
                    >
                      <span className="text-xs uppercase tracking-wider opacity-85 block mb-2">{card.category}</span>
                      <h4 className="display-font text-xl font-bold mb-4">{card.title}</h4>
                      <p className="text-xs leading-relaxed max-w-sm mx-auto opacity-95">
                        {card.detail}
                      </p>
                      <button className="text-[10px] font-bold mt-6 underline cursor-pointer">Tutup Rincian</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

        </div>

        {/* Heritage Legal Transformation Footer Card */}
        <div className="mt-12 rounded-3xl border border-border-soft bg-primary/5 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="md:w-1/3 h-48 rounded-2xl overflow-hidden shrink-0">
            <img
              alt="Yayasan Sosial Kristen"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMJqR1q8L-Umzxj30hKHgjar-eZEDa2L6nVfjfjaIL16pg32hZbIOp1DpcTNhkHiYss8FAeCIiT-dWVkMciJnOEhzzwcF53AWjAd3TieK2GOTFPgg3QV1O_74s5OfNoXBzmRpyYVpL0Hr0TOiqvlwMihmDEwQjzTcqcj21MScsDkVSL7K16quTy0Nrajq39I4U9ECFmnbe9_P4AlmBHyG2JLmTwQNNzkizt0rq3PpdMapRxVRswz9pQx1jVKzThO_ByTo"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-4">
            <span className="text-xs font-bold text-primary tracking-widest uppercase block">KONSISTENSI PENGABDIAN</span>
            <h4 className="display-font text-2xl font-bold text-text-heading leading-tight">Mewariskan Nilai Cinta Kasih ke Generasi Penerus</h4>
            <p className="text-xs md:text-sm text-text-paragraph leading-relaxed">
              Seluruh rekam jejak, arsip foto, sertifikat penghargaan, serta akta notaris kepemimpinan terdahulu kami rilis secara terbuka demi transparansi sejarah, memacu semangat juang generasi kini untuk terus melayani sesama dengan tulus tanpa memandang perbedaan.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
