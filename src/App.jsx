import React, { useState } from 'react';
import Editor from './Editor.jsx';
import Ticket from './Ticket.jsx';
import colorsGradients from './colorsGradients.js';

function App() {
    const [list, setList] = useState(
        JSON.parse(localStorage.getItem('list')) || []
    );
    const [showEditor, setShowEditor] = useState(
        list.length === 0 ? true : false
    );
    const [showTicket, setShowTicket] = useState(false);
    const [activeItem, setActiveItem] = useState({});

    const handleSubmit = (valor) => {
        if (Object.keys(activeItem).length !== 0) {
            const newList = list.map((element) =>
                element.id === activeItem.id ? valor : element
            );
            setList(newList);
            localStorage.setItem('list', JSON.stringify(newList));
            setActiveItem({});
            setShowEditor(false);
            return;
        }
        setList([...list, valor]);
        localStorage.setItem(
            'list',
            JSON.stringify([...JSON.parse(localStorage.getItem('list')), valor])
        );
        setShowEditor(false);
    };

    const deleteItem = (id) => {
        const newList = list.filter((element) => element.id !== id);
        setList(newList);
        localStorage.setItem('list', JSON.stringify(newList));
    };

    const clearActiveTicket = () => {
        setActiveItem({});
        setShowTicket(false);
        setShowEditor(false);
    };

    return (
        <>
            <div className='header'>
                <span className='title'>Notes</span>
                <button
                    className='add-button'
                    onClick={() => setShowEditor(true)}>
                    <span className='material-symbols-outlined'>add_notes</span>
                    Add
                </button>
            </div>
            <div className='container'>
                {list.map((element, index) => (
                    <article
                        key={index}
                        className='note'
                        style={{
                            background: colorsGradients.get(element.color),
                            color: element.color === 2 ? 'white' : 'black',
                        }}
                        onClick={() => {
                            setActiveItem(element);
                            setShowTicket(true);
                        }}>
                        <div className='note-content'>
                            <h3 className='note-title'>{element.title}</h3>
                            <p className='note-description'>
                                {element.description}
                            </p>
                        </div>
                        <div className='note-info'>
                            <span
                                className='note-date'
                                style={{
                                    color:
                                        element.color === 2 ? 'white' : 'black',
                                }}>
                                {element.date}
                            </span>
                            <div>
                                <button
                                    className='material-symbols-outlined'
                                    style={{
                                        color:
                                            element.color === 2
                                                ? 'white'
                                                : 'black',
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveItem(element);
                                        setShowEditor(true);
                                    }}>
                                    edit
                                </button>
                                <button
                                    className='material-symbols-outlined'
                                    style={{
                                        color:
                                            element.color === 2
                                                ? 'white'
                                                : 'black',
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deleteItem(element.id);
                                    }}>
                                    delete
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
                {showTicket && (
                    <Ticket
                        ticket={activeItem}
                        clearActiveTicket={clearActiveTicket}
                    />
                )}
                {showEditor && (
                    <Editor
                        clearActiveTicket={clearActiveTicket}
                        saveFunction={handleSubmit}
                        initialItem={activeItem}
                    />
                )}
            </div>
        </>
    );
}

export default App;
