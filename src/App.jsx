import React, { useState } from 'react';
import Editor from './Editor.jsx';

function App() {
    const [list, setList] = useState(
        JSON.parse(localStorage.getItem('list')) || []
    );

    const [showEditor, setShowEditor] = useState(true);
    const [activeItem, setActiveItem] = useState({});

    const handleSubmit = (valor) => {
        setList([...list, valor]);
        localStorage.setItem(
            'list',
            JSON.stringify([...JSON.parse(localStorage.getItem('list')), valor])
        );
    };

    return (
        <>
            <div className='header'>
                <span className='title'>Notes</span>
            </div>
            <div className='container'>
                <section className='sidebar'>
                    {list.map((element, index) => (
                        <button
                            key={index}
                            className='list-element'
                            onClick={() => {
                                setActiveItem(element);
                                setShowEditor(false);
                            }}>
                            {element.title}
                        </button>
                    ))}
                    <button
                        className='list-element'
                        onClick={() => setShowEditor(true)}>
                        Add
                    </button>
                </section>
                {showEditor ? (
                    <Editor saveFunction={handleSubmit} />
                ) : (
                    <div>
                        <h2>{activeItem.title}</h2>
                        <p>{activeItem.description}</p>
                    </div>
                )}
            </div>
        </>
    );
}

// () => {}

export default App;

// ? React Components
// Objetos => Clases => Function
// Componente == Function
// Function -> Reciben parametros -> Procesan con javascript
// Regresan HTML -> JSX
// REACT HOOK
// useState -> Manejar estados (variables)
// useEffect -> Checar cambios

// [1,2,3].push(4)
// []

// Spread Operator
