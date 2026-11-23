import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import DigitalAtom from './DigitalAtom'

export default function About() {
  return (
    <section id="tentang">
      <div className="wrap">
        <SectionHeading tag="say hi!" title="Tentang Saya" />

        <Reveal className="about-wrap">
          <div>
            <p className="pull">
              Halo, saya Hafizh
            </p>
            <p className="desc">
              seorang web developer yang tertarik menggabungkan teknologi, kreativitas, dan desain untuk membangun pengalaman digital yang menarik dan fungsional.
              Saya senang mengembangkan website yang tidak hanya terlihat menarik, tetapi juga nyaman digunakan, responsif, dan memiliki karakter tersendiri. Saya terus belajar, mengeksplorasi teknologi baru, serta mengembangkan kemampuan dalam membangun solusi digital melalui proses coding dan kreativitas.

              Bagi saya, coding bukan sekadar menulis kode, tetapi tentang mengubah ide menjadi sesuatu yang nyata, bermanfaat, dan dapat dinikmati banyak orang.
            </p>
          </div>

          <DigitalAtom />
        </Reveal>
      </div>
    </section>
  )
}
