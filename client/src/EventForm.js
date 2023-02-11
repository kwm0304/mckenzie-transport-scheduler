import React, { useState } from 'react';

const EventForm = () => {
    const [eventTitle, setEventTitle] = useState('')
    const [store, setStore] = useState('')
    return (
    <div className='container'>
        <form>
            <label>Customer Name: </label>
            <input
            type='text'
            required
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            />
            <label>Store: </label>
            <input
            type='text'
            required
            value={store}
            onChange={(e) => setStore(e.target.value)}
            />
            <label>Address: </label>
            <input
            type='text'
            required
            />
            <label>Start: </label>
            <input
            type='text'
            required
            />
            <label>End: </label>
            <input
            type='text'
            required
            />
            <label>Description </label>
            <textarea
                required
            ></textarea>
            <button>Add Event</button>
            <p>{ eventTitle }</p>
        </form>
    </div>
)}

export default EventForm;