import colorsGradients from './colorsGradients';

const Ticket = ({ ticket, clearActiveTicket }) => {
    const handleClick = (e) => {
        e.stopPropagation();
    };

    return (
        <section className='full-screen' onClick={clearActiveTicket}>
            <div
                className='ticket'
                style={{
                    background: colorsGradients.get(ticket.color),
                    color: ticket.color === 2 ? 'white' : 'black',
                }}
                onClick={(e) => handleClick(e)}>
                <div>
                    <h2 className='ticket-title'>{ticket.title}</h2>
                    <p className='ticket-description'>{ticket.description}</p>
                </div>
                <div className='ticket-date'>{ticket.date}</div>
            </div>
        </section>
    );
};

export default Ticket;

/*
lorem ipsum


*/
