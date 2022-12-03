import Link from 'next/link'

function EventItem(props) {
    const { image, title, id, location, date } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    })
    const formatedAddress = location.replace(', ', '\n ');
    const exployerLink = `/events/${id}`;
    return <li>
        <img src = {`/${image}`} alt={title} />
        <div>
            <div>
                <h1>
                    {title}
                </h1>
            </div>
            <div>
                <time>{humanReadableDate}</time>
            </div>
            <div>
                <address>{formatedAddress}</address>
            </div>
            <div>
                <Link href={exployerLink}>Exployer Event</Link>
            </div>
        </div>
    </li>
}
export default EventItem;