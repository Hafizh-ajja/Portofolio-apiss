import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const facts = [
  { label: 'Pengalaman', value: '3+ Tahun' },
  { label: 'Proyek Selesai', value: '20+' },
  { label: 'Klien Puas', value: '15+' },
  { label: 'Status', value: 'Open to Work' },
]

export default function About() {
  return (
    <section id="tentang">
      <div className="wrap">
        <SectionHeading tag="say hi!" title="Tentang Saya" />

        <Reveal className="about-wrap">
          <div>
            <p className="pull">
              Website terbaik itu campuran kode yang solid dan visual yang punya karakter — bukan
              salah satunya doang.
            </p>
            <p className="desc">
              Sehari-hari saya bikin front-end sampai back-end, tapi selalu mikirin bagaimana
              tampilannya bakal dirasain sama yang pakai. Hasilnya: website yang jalan mulus dan
              enak dilihat.
            </p>
          </div>
          <div className="fact-cards">
            {facts.map((fact) => (
              <div className="fact-card" key={fact.label}>
                {fact.label} <b>{fact.value}</b>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
