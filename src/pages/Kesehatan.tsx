import { useState, FormEvent } from 'react';
import { HeartPulse, Stethoscope, Clock, ShieldCheck, Heart, ArrowRight, UserCheck, CalendarCheck, PhoneCall } from 'lucide-react';

export default function Kesehatan() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [ticketState, setTicketState] = useState<'idle' | 'booked'>('idle');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');

  const handleBookAppointment = (e: FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone) return;
    setTicketState('booked');
  };

  const aspects = [
    {
      icon: Stethoscope,
      title: "Pengobatan Dasar",
      desc: "Menangani keluhan kesehatan umum dengan dukungan tenaga medis profesional seperti dokter umum, perawat terampil, serta obat-obatan yang esensial."
    },
    {
      icon: CalendarCheck,
      title: "Penyuluhan Masyarakat",
      desc: "Memberikan edukasi berkala mengenai gaya hidup sehat, sanitasi pedesaan, serta pencegahan penyakit menular bagi warga binaan."
    },
    {
      icon: UserCheck,
      title: "Sistem Rujukan Terpadu",
      desc: "Memfasilitasi rujukan cepat ke rumah sakit rujukan tingkat lanjut di Salatiga bagi pasien yang memerlukan tindakan spesialis intensif."
    }
  ];

  return (
    <div className="animate-in fade-in duration-300">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-700 text-xs font-bold border border-red-100">
              <HeartPulse className="w-3.5 h-3.5" />
              Layanan Medis Terpadu
            </span>
            <h1 className="display-font text-5xl md:text-6xl text-text-heading leading-tight font-extrabold">
              Layanan Kesehatan <br />
              <span className="italic font-normal text-primary">Masyarakat</span>
            </h1>
            <p className="text-base md:text-lg text-text-paragraph max-w-lg leading-relaxed">
              Menghadirkan pemulihan fisik dan akses layanan kesehatan yang terjangkau bagi masyarakat luas melalui pusat layanan medis yang modern, humanis, dan berorientasi sosial.
            </p>
            <div className="pt-4">
              <a
                href="#klinik"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                Lihat Detail Program &amp; Jadwal <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[480px]">
              <img
                alt="Fasilitas kesehatan luar"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbWYzhRKFfeKvFYPtJvrrJxWe7mLqQ4wYhMzf8cCkTEMfcgui380yke4-RKVgnqFsFpDKsFS4-0cmn7Ao4n692SbAKGhzm2yM1QWxrDvRkcx53tpRsIQOtZK5SpetL7m5Cm9YLnHwFVACDf-_s1nK3pA2Kj3-F-4fBhVi-61OUEI4vt1jYZyXHK_IlShVfBfM40i5t8nwmD49V1uKayqTvtPkyxTciHROCotBIbvzqR1YoTxo3XnhsJlQWru-UZznzPhdaTIVQ6tbjYh0"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl border border-border-soft hidden md:block max-w-xs shadow-lg">
              <p className="italic display-font text-lg text-primary leading-relaxed">
                &quot;Kesehatan adalah anugerah terbesar, dan memudahkan akses pelayanan adalah tugas mulia kemanusiaan kami.&quot;
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Main Klinik Detail with Appointment Simulation */}
      <section id="klinik" className="max-w-7xl mx-auto px-6 py-20 border-t border-border-soft/50">
        <div className="bg-white rounded-3xl border border-border-soft overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl">
          
          {/* Left Column: Visual Room */}
          <div className="lg:col-span-6 h-[300px] lg:h-auto overflow-hidden relative">
            <img
              alt="Klinik Pemeriksaan Utama"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida/AP1WRLusiAx5PygYVhWB1fEwnNmaJgHSNAystAcH3szklxD7YiwJWFdgXiT3Gs48hTQUQW9rzQPf23zl8exzU0CSyZqq8RMYCLhemC6m55PxHijYEAOuYOIGy9ctXR2Cy3NnrPiUnNc-FZTscgr-mqszeLV-kUtik1K52RXaXLTRjk1Qt0axsdP1pJS42aItjy0BwvKx8cqx3PNNNT8pR_pHu-hMPEnkK4a0iztKqZTGSqYzTjhwjetFivoCWYVz2GSCNLX3DKYIXp-d3nc=s1600"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 left-6 bg-primary text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-md">
              Klinik Pratama YSKSP
            </div>
          </div>

          {/* Right Column: Klinik Schedule & Interactive Simulation Form */}
          <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-center bg-warm-ivory/30">
            <span className="text-xs font-bold text-primary tracking-widest uppercase block mb-2">KLINIK PRATAMA</span>
            <h2 className="display-font text-3xl md:text-4xl text-text-heading font-bold mb-4">Pelayanan Pengobatan &amp; Kesehatan</h2>
            <p className="text-sm text-text-paragraph leading-relaxed mb-6">
              Memberikan pelayanan kesehatan tingkat dasar kepada warga berupa pemeriksaan kesehatan umum, pengobatan rawat jalan, tindakan medis minor, serta konseling kesehatan promotif-preventif.
            </p>

            <div className="bg-white p-5 rounded-2xl border border-border-soft shadow-sm mb-6 flex gap-4">
              <Clock className="w-8 h-8 text-primary shrink-0" />
              <div className="flex-1">
                <h4 className="display-font text-lg font-bold text-text-heading mb-1.5">Jadwal Pelayanan Klinik</h4>
                <div className="text-xs text-text-paragraph space-y-1 font-semibold">
                  <div className="flex justify-between border-b border-border-soft/60 pb-1">
                    <span>Senin – Jumat</span>
                    <span className="text-primary font-bold">09:00 – 14:00 WIB</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>Sabtu</span>
                    <span className="text-primary font-bold">09:00 – 11:00 WIB</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Antrean Simulation Form */}
            <div className="bg-white p-6 rounded-2xl border border-border-soft/80 shadow-md">
              <p className="text-xs font-bold uppercase tracking-wider text-text-heading mb-3 border-b border-border-soft/50 pb-2">Ambil Antrean Konsultasi (Simulasi)</p>
              
              {ticketState === 'idle' ? (
                <form onSubmit={handleBookAppointment} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Nama Pasien..."
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-border-soft focus:outline-none focus:ring-2 focus:ring-primary/20 text-xs font-semibold text-text-heading"
                    />
                    <input
                      type="tel"
                      placeholder="No. WhatsApp..."
                      required
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-border-soft focus:outline-none focus:ring-2 focus:ring-primary/20 text-xs font-semibold text-text-heading"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-olive-hover text-white py-2 rounded-xl text-xs font-bold transition-colors shadow-sm cursor-pointer"
                  >
                    Dapatkan Kode Antrean
                  </button>
                </form>
              ) : (
                <div className="text-center py-2 space-y-3">
                  <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-[10px] font-bold border border-emerald-100">
                    <ShieldCheck className="w-3.5 h-3.5" /> Berhasil Dipesan!
                  </div>
                  <div>
                    <span className="text-[10px] text-text-paragraph uppercase tracking-widest block font-bold">Kode Antrean Anda</span>
                    <span className="text-2xl font-mono font-extrabold text-primary block mt-0.5">KP-042</span>
                    <span className="text-[10px] text-text-paragraph block mt-1 font-medium">Atas nama: <strong className="text-text-heading">{patientName}</strong></span>
                  </div>
                  <button
                    onClick={() => {
                      setTicketState('idle');
                      setPatientName('');
                      setPatientPhone('');
                    }}
                    className="text-[10px] text-primary hover:underline font-bold"
                  >
                    Ambil antrean baru
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Service Aspects */}
      <section className="bg-white py-24 border-y border-border-soft/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-xl mx-auto">
            <h3 className="display-font text-4xl font-bold text-text-heading">Aspek Pelayanan Kesehatan</h3>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
            <p className="text-xs text-text-paragraph mt-3">Komitmen kami mewujudkan peningkatan taraf hidup sehat dan penyembuhan terintegrasi bagi sesama.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aspects.map((aspect, idx) => {
              const Icon = aspect.icon;
              return (
                <div key={idx} className="bg-warm-ivory/40 p-8 rounded-3xl border border-border-soft hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="display-font text-2xl font-bold text-text-heading mb-3">{aspect.title}</h4>
                  <p className="text-xs text-text-paragraph leading-relaxed">{aspect.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-primary text-white rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="display-font text-4xl md:text-5xl font-bold leading-tight">Hubungi Klinik Pratama YSKSP</h2>
            <p className="text-xs md:text-sm opacity-90 leading-relaxed">
              Layanan kesehatan kami terbuka bagi seluruh warga binaan dan masyarakat sekitar. Hubungi tim medis kami jika Anda memerlukan konsultasi atau bantuan kesehatan umum.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <a
                href="tel:+6285169436225"
                className="bg-white text-primary px-8 py-3.5 rounded-full font-bold text-sm hover:bg-warm-ivory transition-colors shadow-md inline-flex items-center justify-center gap-2 animate-none"
              >
                Hubungi via Telepon
              </a>
              <a
                href="mailto:yayasan.salibputih@gmail.com"
                className="border border-white/40 text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold text-sm transition-colors inline-flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> Hubungi via Email
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
