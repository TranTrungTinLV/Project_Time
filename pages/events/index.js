import {getAllEvents} from './../../DUMMY_DATA'
import EventList from './../../components/events/event-list'
import EventSearch from './../../components/events/event-search';
import {useRouter} from 'next/router'
function AllEventsPage() {
    const router = useRouter();
    const events = getAllEvents();
    function findEventHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }
    return(
        <div>
            <EventSearch onSearch={findEventHandler}/>
            <EventList items={events}/>
        </div>
    )
}
export default AllEventsPage;