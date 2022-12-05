import Image from 'next/image'
import classes from './event-item.module.css'
import Button from './../ui/Button';
import AddressIcon from './../icons/address-icon';
import ArrowRightIcon from './../icons/arrow-right-icon';
import DateIcon from './../icons/date-icon';
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
        <Image src = {`/${image}`} alt={title} className={classes.img} width={600} height={300}/>
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>
                    {title}
                </h2>
            </div>
            <div className={classes.date}>
                <DateIcon/>
                <time className={classes.time}>{humanReadableDate}</time>
            </div>
            <div className={classes.address}>
                <AddressIcon/>
                <address>{formatedAddress}</address>
            </div>
            <div className={classes.actions}>
                <Button link={exployerLink}>
                    <spam>Exployer Event</spam>
                    <span className={classes.icon}><ArrowRightIcon/></span>
                </Button>
            </div>
        </div>
    </li>
}
export default EventItem;