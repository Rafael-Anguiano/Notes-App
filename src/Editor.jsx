import React, { useState } from 'react';
import colorsGradients from './colorsGradients';

const Editor = ({ saveFunction, clearActiveTicket, initialItem = {} }) => {
    const [inputValue, setInputValue] = useState(initialItem.title || '');
    const [descriptionValue, setDescriptionValue] = useState(
        initialItem.description || ''
    );
    const [color, setColor] = useState(initialItem.color || 0);
    const [hasError, setHasError] = useState(false);

    const handleSave = () => {
        if (!(inputValue && descriptionValue)) {
            setHasError(true);
            return;
        }
        const object = {
            id: Math.floor(Math.random() * 1000),
            title: inputValue,
            description: descriptionValue,
            date:
                initialItem.date ||
                String(new Date().getDate()).padStart(2, '0') +
                    '/' +
                    String(new Date().getMonth()).padStart(2, '0') +
                    '/' +
                    new Date().getFullYear(),
            color: color,
        };
        // Clear Inputs
        setInputValue('');
        setDescriptionValue('');
        setHasError(false);

        // Send Info
        saveFunction(object);
    };

    const handleClick = (e) => {
        e.stopPropagation();
    };

    return (
        <section className='full-screen' onClick={clearActiveTicket}>
            <div
                className='modal'
                style={{
                    background: colorsGradients.get(color),
                    color: color === 2 ? 'white' : 'black',
                }}
                onClick={(e) => handleClick(e)}>
                <input
                    placeholder='Title'
                    className='editor-title'
                    maxLength={50}
                    style={{
                        color: color === 2 ? 'white' : 'black',
                        borderColor:
                            hasError && !inputValue ? 'tomato' : '#00000000',
                    }}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <textarea
                    placeholder='Nota...'
                    className='editor-description'
                    style={{
                        color: color === 2 ? 'white' : 'black',
                        borderColor:
                            hasError && !descriptionValue
                                ? 'tomato'
                                : '#00000000',
                    }}
                    value={descriptionValue}
                    onChange={(e) => setDescriptionValue(e.target.value)}
                />
                <div className='colors'>
                    {Array.from(colorsGradients).map(([key, value]) => (
                        <button
                            key={key}
                            className='color-button'
                            style={{
                                background: value,
                                border: color === key ? '2px solid gray' : null,
                            }}
                            onClick={() => {
                                setColor(key);
                            }}
                        />
                    ))}
                </div>
                <button className='save-button' onClick={handleSave}>
                    <span className='material-symbols-outlined'>save</span>
                    Save
                </button>
            </div>
        </section>
    );
};

export default Editor;
