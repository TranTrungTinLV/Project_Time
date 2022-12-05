import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { getEventById } from '../../DUMMY_DATA';
import EventSummary from './../../components/events/event-detail/event-summary';
import EventLogistics from './../../components/events/event-detail/event-logistics';
import EventContent from './../../components/events/event-detail/event-content';

function EventDetailPage() {
    const router = useRouter();
    const eventid = router.query.eventid;
    const event = getEventById(eventid);
    if(!event){
        return(
            <p>No event found</p>
        )
    }
    return(
        <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.imageAlt}/>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    )
}
export default EventDetailPage;