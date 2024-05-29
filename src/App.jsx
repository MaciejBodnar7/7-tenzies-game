import React from "react"
import "./App.css"
import Die from "./Die"
import { nanoid } from "nanoid"

export default function App() {
  const [dice, setDice] = React.useState(allNewDice)

  const diceElement = dice.map(die => {
    return <Die key={die.id} value={die.value} isHeld={die.isHeld} id={die.id} holdDice={() => holdDice(die.id)} />
  })

  function holdDice(id) {
    console.log(id)
    setDice(prevValue => {
      return prevValue.map(item => {
        return item.id === id ? { ...item, isHeld: !item.isHeld } : { ...item }
      })
    })
  }

  function allNewDice() {
    const arr = []
    while (arr.length < 10) {
      const randomNumb = Math.floor(Math.random() * 6) + 1
      arr.push({ id: nanoid(), value: randomNumb, isHeld: false })
    }
    return arr
  }

  function rollDice() {
    setDice(prevValue => {
      return prevValue.map(item => {
        return item.isHeld ? { ...item } : { id: nanoid(), value: Math.floor(Math.random() * 6) + 1, isHeld: false }
      })
    })
  }

  return (
    <>
      <main className="container-main flex flex-col justify-evenly items-center">
        <h1 className="text-5xl font-bold">Tenzies</h1>
        <p className="w-4/6 text-center -mt-8 text-lg">
          Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
        </p>
        <div className="dices w-5/6 h-48 rounded-xl grid grid-cols-5 gap-6">{diceElement}</div>
        <button onClick={rollDice} className="self-center px-14 py-2 bg-blue-600 text-white text-xl rounded-lg">
          Roll
        </button>
      </main>
    </>
  )
}
