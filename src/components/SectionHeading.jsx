import Reveal from './Reveal'

export default function SectionHeading({ tag, title }) {
  return (
    <>
      <Reveal as="span" className="sec-tag">
        {tag}
      </Reveal>
      <Reveal className="sec-head">
        <h2>{title}</h2>
      </Reveal>
    </>
  )
}
