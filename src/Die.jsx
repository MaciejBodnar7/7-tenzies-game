import "./App.css"

export default function Die(props) {
  return (
    <div onClick={props.holdDice} className={props.isHeld ? "dice dice-true" : "dice dice-false"}>
      <p>{props.value}</p>
    </div>
  )
}
