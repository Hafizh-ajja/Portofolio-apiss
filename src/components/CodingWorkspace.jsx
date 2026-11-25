import './CodingWorkspace.css'

/**
 * Mini creative developer studio — workspace kosong tanpa manusia.
 * Semua objek & animasi dibuat dari SVG + CSS keyframes, tanpa library/gambar eksternal.
 */
export default function CodingWorkspace() {
  return (
    <div
      className="coding-workspace"
      role="img"
      aria-label="Ilustrasi meja kerja web developer: laptop dengan code editor, kopi beruap, lampu meja, tanaman, buku, headphone, dan ikon teknologi yang melayang"
    >
      <div className="cw-backdrop" aria-hidden="true">
        <span className="cw-halftone" />
      </div>

      <svg viewBox="0 0 400 320" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="cwDesk" x1="0" y1="0" x2="0.8" y2="1">
            <stop offset="0" stopColor="#6CC8FF" />
            <stop offset="1" stopColor="#2C8FE0" />
          </linearGradient>
          <linearGradient id="cwBase" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E8F6FF" />
            <stop offset="1" stopColor="#A9D9FF" />
          </linearGradient>
          <linearGradient id="cwScreen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0B2340" />
            <stop offset="1" stopColor="#143E60" />
          </linearGradient>
          <linearGradient id="cwLamp" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFE27A" />
            <stop offset="1" stopColor="#FFB63D" />
          </linearGradient>
          <radialGradient id="cwLampGlow">
            <stop offset="0" stopColor="rgba(255,214,94,.75)" />
            <stop offset="1" stopColor="rgba(255,214,94,0)" />
          </radialGradient>
          <radialGradient id="cwScreenGlowGrad">
            <stop offset="0" stopColor="rgba(94,231,255,.65)" />
            <stop offset="1" stopColor="rgba(94,231,255,0)" />
          </radialGradient>
        </defs>

        {/* ---- Floating tech icons (tanpa orang) ---- */}
        <g className="cw-parallax cw-parallax--back">
          <g transform="translate(150 62)">
            <g className="cw-float cw-float--1">
              <circle r="17" fill="#0C2A44" stroke="var(--ink)" strokeWidth="2" />
              <g fill="none" stroke="#5EE7FF" strokeWidth="1.8">
                <ellipse rx="14" ry="5" />
                <ellipse rx="14" ry="5" transform="rotate(60)" />
                <ellipse rx="14" ry="5" transform="rotate(120)" />
              </g>
              <circle r="2.6" fill="#5EE7FF" />
            </g>
          </g>

          <g transform="translate(232 54)">
            <g className="cw-float cw-float--2">
              <rect x="-16" y="-16" width="32" height="32" rx="7" fill="#FFCE45" stroke="var(--ink)" strokeWidth="2" />
              <text x="0" y="6" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="900" fill="#0C2A44">JS</text>
            </g>
          </g>

          <g transform="translate(312 68)">
            <g className="cw-float cw-float--3">
              <path d="M0 -17 L15 -12 L12 12 L0 18 L-12 12 L-15 -12 Z" fill="#FF8A3D" stroke="var(--ink)" strokeWidth="2" />
              <text x="0" y="7" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="900" fill="#FFFFFF">5</text>
            </g>
          </g>

          <g transform="translate(64 108)">
            <g className="cw-float cw-float--4">
              <path d="M0 -17 L15 -12 L12 12 L0 18 L-12 12 L-15 -12 Z" fill="#3AA6FF" stroke="var(--ink)" strokeWidth="2" />
              <text x="0" y="7" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="900" fill="#FFFFFF">3</text>
            </g>
          </g>

          <g className="cw-float-extra" transform="translate(342 134)">
            <g className="cw-float cw-float--5">
              <path d="M0 -16 L14 -8 V8 L0 16 L-14 8 V-8 Z" fill="#8BD450" stroke="var(--ink)" strokeWidth="2" />
              <text x="0" y="5" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="900" fill="#FFFFFF">N</text>
            </g>
          </g>
        </g>

        {/* ---- Meja ---- */}
        <g stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round">
          <ellipse cx="200" cy="292" rx="178" ry="16" fill="#0B2A44" opacity=".14" stroke="none" />
          <path d="M28 226 H372 L392 274 H8 Z" fill="url(#cwDesk)" />
          <path d="M8 274 H392 V286 H8 Z" fill="#1E5F96" />
        </g>

        {/* ---- Cahaya lampu di belakang laptop ---- */}
        <ellipse className="cw-lamp-glow" cx="116" cy="186" rx="64" ry="46" fill="url(#cwLampGlow)" />

        {/* ---- Laptop + code editor ---- */}
        <g stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round">
          <ellipse cx="188" cy="252" rx="78" ry="7" fill="#0B2A44" opacity=".18" stroke="none" />
          <rect x="126" y="132" width="124" height="90" rx="7" fill="url(#cwScreen)" />
        </g>

        <g fontFamily="monospace" fontSize="9">
          <g className="cw-code-line cw-code-line--1">
            <text x="136" y="150" fill="#5EE7FF">{'<div className="app">'}</text>
          </g>
          <g className="cw-code-line cw-code-line--2">
            <text x="136" y="165" fill="#FF6F9C">{'<h1>Hello World</h1>'}</text>
          </g>
          <g className="cw-code-line cw-code-line--3">
            <text x="136" y="180" fill="#FFCE45">{'const code = React'}</text>
          </g>
          <g className="cw-code-line cw-code-line--4">
            <text x="136" y="195" fill="#8BD450">{'style={{ color: "#5EE7FF" }}'}</text>
          </g>
          <text x="136" y="211" fill="#4A7FA8">{'</div>'}</text>
          <rect className="cw-cursor" x="176" y="203" width="6" height="10" rx="1" fill="#FFFFFF" />
        </g>

        <rect className="cw-screen-glow" x="126" y="132" width="124" height="90" rx="7" fill="url(#cwScreenGlowGrad)" opacity=".16" />
        <g stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round">
          <path d="M116 222 H260 L280 250 H96 Z" fill="url(#cwBase)" />
          <path d="M132 234 H244 M138 240 H238" fill="none" strokeWidth="2" opacity=".45" />
        </g>

        {/* ---- Lampu meja ---- */}
        <g className="cw-lamp" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
          <ellipse cx="54" cy="250" rx="22" ry="6" fill="#0C2A44" />
          <path d="M54 248 C54 202 68 150 104 126" fill="none" stroke="#0C2A44" strokeWidth="7" />
          <path d="M54 248 C54 202 68 150 104 126" fill="none" stroke="#5EE7FF" strokeWidth="2" opacity=".6" />
          <circle cx="104" cy="126" r="6" fill="#FFCE45" />
          <path d="M86 112 L130 104 L146 138 L100 146 Z" fill="url(#cwLamp)" />
          <path d="M100 146 L146 138" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity=".55" />
        </g>

        {/* ---- Cangkir kopi + uap ---- */}
        <g className="cw-coffee" stroke="var(--ink)" strokeWidth="2.5" strokeLinejoin="round">
          <g className="cw-steam cw-steam--1">
            <path d="M312 218 C306 210 318 204 312 194" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <g className="cw-steam cw-steam--2">
            <path d="M326 216 C332 208 320 202 326 192" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <path d="M300 226 H336 L332 248 Q318 253 304 248 Z" fill="#FFF4D6" />
          <path d="M336 230 C348 228 348 244 334 242" fill="none" />
          <ellipse cx="318" cy="226" rx="17" ry="5" fill="#5B2E17" strokeWidth="2" />
          <ellipse cx="318" cy="252" rx="22" ry="4.5" fill="#FFF4D6" strokeWidth="2" />
        </g>

        {/* ---- Tanaman kecil ---- */}
        <g className="cw-plant" stroke="var(--ink)" strokeWidth="2.5" strokeLinejoin="round">
          <path d="M348 228 H376 L372 250 Q362 255 352 250 Z" fill="#FF6F9C" />
          <path d="M362 228 C354 216 348 212 346 204" fill="none" stroke="#8BD450" strokeWidth="3" />
          <path d="M362 228 C370 214 378 212 380 204" fill="none" stroke="#5EE7FF" strokeWidth="3" />
          <ellipse cx="346" cy="204" rx="6" ry="9" fill="#8BD450" />
          <ellipse cx="380" cy="204" rx="6" ry="9" fill="#8BD450" />
        </g>

        {/* ---- Tumpukan buku + headphone ---- */}
        <g className="cw-parallax cw-parallax--front">
          <g stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round">
            <rect x="28" y="248" width="66" height="11" rx="3" fill="#0C2A44" />
            <rect x="34" y="237" width="66" height="11" rx="3" fill="#FF6F9C" />
            <rect x="30" y="226" width="66" height="11" rx="3" fill="#FFCE45" />
          </g>
          <g fontFamily="Arial, sans-serif" fontSize="7" fontWeight="900" textAnchor="middle">
            <text x="61" y="256" fill="#5EE7FF">BUILD</text>
            <text x="67" y="245" fill="#0C2A44">DESIGN</text>
            <text x="63" y="234" fill="#0C2A44">CODE</text>
          </g>

          <g className="cw-headphones" stroke="var(--ink)" strokeWidth="2.5" strokeLinejoin="round">
            <path d="M294 262 C294 240 344 240 344 262" fill="none" stroke="#0C2A44" strokeWidth="6" />
            <rect x="288" y="258" width="17" height="19" rx="7" fill="#5EE7FF" />
            <rect x="333" y="258" width="17" height="19" rx="7" fill="#5EE7FF" />
          </g>
        </g>
      </svg>
    </div>
  )
}
