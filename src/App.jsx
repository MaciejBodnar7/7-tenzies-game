import "./App.css"
import Die from "./Die"

function App() {
  return (
    <>
      <main className="container-main flex flex-col justify-evenly items-center">
        <h1 className="text-5xl font-bold">Tenzies</h1>
        <p className="w-4/6 text-center -mt-8 text-lg">
          Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
        </p>
        <div className="dices w-5/6 h-48 rounded-xl grid grid-cols-5 gap-6">
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
        </div>
        <button className="self-center px-14 py-2 bg-blue-600 text-white text-xl rounded-lg">Roll</button>
      </main>
    </>
  )
}

export default App
