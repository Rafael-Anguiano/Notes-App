import React, { useEffect, useState } from 'react';

const Editor = ({ saveFunction }) => {
    const [inputValue, setInputValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
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
        };
        // Clear Inputs
        setInputValue('');
        setDescriptionValue('');
        setHasError(false);

        // Send Info
        saveFunction(object);
    };

    return (
        <section className='editor'>
            <div className='row'>
                <input
                    placeholder='Title'
                    className='note-title'
                    style={
                        hasError && !inputValue
                            ? { borderColor: 'tomato' }
                            : null
                    }
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className='note-save' onClick={handleSave}>
                    Save
                </button>
            </div>
            <textarea
                placeholder='Nota...'
                className='note-description'
                style={
                    hasError && !descriptionValue
                        ? { borderColor: 'tomato' }
                        : null
                }
                value={descriptionValue}
                onChange={(e) => setDescriptionValue(e.target.value)}
            />
        </section>
    );
};

export default Editor;
