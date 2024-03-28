import React, { useEffect, useState } from 'react'

const Editor = () => {
    const [inputValue, setInputValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')
    console.log(descriptionValue)
    return (
        <section className="editor">
            <div className="row">
                <input 
                    placeholder="Title" 
                    className="note-title" 
                    defaultValue={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="note-save">Save</button>
            </div>
            <textarea 
                className="note-description" 
                placeholder="Nota..." 
                defaultValue={descriptionValue}
                onChange={(e) => setDescriptionValue(e.target.value)}
            />
        </section>
    )
}



export default Editor