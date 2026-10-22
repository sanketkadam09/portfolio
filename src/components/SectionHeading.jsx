export default function SectionHeading({ id, kicker, title, subtitle }) {
  return (
    <div className="section-heading">
      <p className="kicker">{kicker}</p>
      <h2 id={id}>{title}</h2>
      {subtitle ? <p className="section-heading__sub">{subtitle}</p> : null}
    </div>
  )
}
