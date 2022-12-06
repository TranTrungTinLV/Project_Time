import { useRouter } from 'next/router'
import { getFilteredEvents } from './../../DUMMY_DATA';
import EventList from './../../components/events/event-list';
import { Fragment } from 'react';
import ResultsTitle from './../../components/results-title/results-title/results-title';
import Button from '../../components/ui/Button';
import ErrorAlert from './../../components/error-alert/error-alert/error-alert';
function FillteredEventPages() {
    const router = useRouter();
    const filterData = router.query.slug;
    console.log(filterData);
    if (!filterData) {
        return <div className='center'>
            <h1>Loading...</h1>
        </div>
    }
    const fillterYears = filterData[0];
    const fillterMonths = filterData[1];

    const numYears = +fillterYears; //transforming to a number
    const numMonths = +fillterMonths; //transforming to a number

    if (isNaN(numYears) || isNaN(numMonths) || numYears < 2021 || numYears > 2030 || numMonths < 1 || numMonths > 12) {
        return (
            <Fragment>
                <div className='center'>
                    <ErrorAlert>
                        <h1>Invalid Filltered</h1>
                    </ErrorAlert>
                    <Button link='/events'>Show All Events</Button>
                </div>

            </Fragment>

        )
    }
    const fillteredEvents = getFilteredEvents({
        year: numYears,
        month: numMonths
    });
    if (!fillteredEvents || fillteredEvents.length === 0) {
        return (
            <Fragment>
                <div className='center'>
                    <h1>
                        No events found!
                    </h1>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </Fragment>
        )
    }

    const date = new Date(numYears, numMonths - 1)

    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={fillteredEvents} />
        </Fragment>
    )
}
export default FillteredEventPages;