import Link from 'next/link'
import classes from './event-item.module.css'
function EventItem(props) {
    const { image, title, id, location, date } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    })
    const formatedAddress = location.replace(', ', '\n ');
    const exployerLink = `/events/${id}`;
    return <li className={classes.item}>
        <img src = {`/${image}`} alt={title} className={classes.img}/>
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>
                    {title}
                </h2>
            </div>
            <div className={classes.date}>
                <time className={classes.time}>{humanReadableDate}</time>
            </div>
            <div className={classes.address}>
                <address>{formatedAddress}</address>
            </div>
            <div className={classes.actions}>
                <Link href={exployerLink}>Exployer Event</Link>
            </div>
        </div>
    </li>
}
export default EventItem;