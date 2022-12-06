import DateIcon from './../icons/date-icon';
import LogisticsItem from './logistics-item';
import classes from './event-logistics.module.css';
import AddressIcon from './../icons/address-icon';
import  Image  from 'next/image';

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n ');

  return (
    <section className={classes.logistics}>
      <div>
        <Image src={`/${image}`} alt={imageAlt} width={500} height={500} className={classes.image}/>
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
