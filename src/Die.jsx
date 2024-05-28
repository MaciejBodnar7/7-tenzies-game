import "./App.css"

export default function Die(props) {
  return (
    <div className="dice">
      <p>{props.value}</p>
    </div>
  )
}
