import { useState } from 'react';

export const Search = ({ cb }) => {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = (e) => {
        cb(value);
    };

    return (
        <div className='row'>
            <div className='input-field search'>
                <input
                    type='text'
                    id='search-field'
                    placeholder='Input name category'
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />

                <button className='btn btn-search' onClick={handleSubmit}>
                    Search
                </button>
            </div>
        </div>
    );
};
