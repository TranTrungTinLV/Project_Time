import EventItem from './event-item';

function EventList(props) {
    const { items } = props
    return (
        <ul>

            {items.map((event) => (
                <EventItem
                    key={event.id}
                    id={event.id}
                    image={event.image}
                    location={event.location}
                    date={event.date}
                    title={event.title} />
            ))}

        </ul>
    )
}
export default EventList;