import './CoffeeCup.css'

/** Ilustrasi cangkir kopi + uap, dibuat murni CSS supaya ringan dan mengikuti tema. */
export default function CoffeeCup() {
  return (
    <div className="coffee-cup" aria-hidden="true">
      <div className="coffee-steam">
        <span className="coffee-steam__wisp coffee-steam__wisp--1" />
        <span className="coffee-steam__wisp coffee-steam__wisp--2" />
        <span className="coffee-steam__wisp coffee-steam__wisp--3" />
      </div>

      <span className="coffee-cup__handle" />
      <div className="coffee-cup__body">
        <span className="coffee-cup__coffee" />
        <span className="coffee-cup__shine" />
      </div>
      <span className="coffee-cup__saucer" />
    </div>
  )
}
