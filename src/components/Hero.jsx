import Sticker from './Sticker'
import Button from './Button'

export default function Hero({ photoSrc = null }) {
  return (
    <section className="hero">
      <div className="halftone" />
      <Sticker color="yellow" rotate={9} style={{ top: '6%', right: '6%' }}>
        Open to work
      </Sticker>
      <Sticker color="green" rotate={-7} style={{ bottom: '4%', left: '2%' }}>
        Est. 2023
      </Sticker>

      <div className="wrap hero-inner">
        <div>
          <h1>
            Bikin website
            <br />
            yang <span className="c1">rapi</span>, <span className="c2">seru</span>,
            <br />
            dan <span className="c3">enak dipakai</span>.
          </h1>
          <p className="lead">
            Halo! Saya Nama Kamu, web developer yang suka mengemas kode jadi pengalaman visual
            yang hidup — bukan sekadar tampilan kaku di layar.
          </p>
          <div className="hero-actions">
            <Button href="#proyek" variant="primary">
              Lihat Proyek
            </Button>
            <Button href="#kontak" variant="ghost">
              Hubungi Saya
            </Button>
          </div>
        </div>

        <div className="hero-photo">
          <div className="tape" />
          <div className="frame">
            <div className="photo-slot">
              {photoSrc ? (
                <img src= "/public/assets/ex-pp.png" alt="Foto Nama Kamu" />
              ) : (
                <>
                  Ganti dengan
                  <br />
                  foto kamu
                </>
              )}
            </div>
            <div className="cap">— itu saya! —</div>
          </div>
        </div>
      </div>
    </section>
  )}
