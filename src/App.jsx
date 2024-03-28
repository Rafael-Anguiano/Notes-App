import React from 'react'
import Editor from './Editor.jsx'

function App() {
  return (
    <>
      <header className="header">
        <h1>Notes</h1>
      </header>
      <div className="container">
        <section className="sidebar">
          <button className="list-element">Add</button>
        </section>
        <Editor />
      </div>
    </>
  )
}

export default App
