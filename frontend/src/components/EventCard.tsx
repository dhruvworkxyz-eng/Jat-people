import React from 'react';
import './EventCard.css';

interface Event {
  title: string;
  date: string;
  displayDate?: string;
  location: string;
  description: string;
  type: string;
  image?: string;
  actionLabel?: string;
  registrationClosed?: boolean;
}

interface EventCardProps {
  event: Event;
  onRegister?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onRegister }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={`event-card${event.image ? ' event-card-with-image' : ''}`}>
      {event.image && (
        <div className="event-photo">
          <img src={event.image} alt={`${event.title} event`} />
        </div>
      )}
      <div className="event-header">
        <span className="event-type">{event.type}</span>
        <span className="event-date">{event.displayDate || formatDate(event.date)}</span>
      </div>

      <h3 className="event-title">{event.title}</h3>

      <div className="event-location">
        <span>{event.location}</span>
      </div>

      <p className="event-description">{event.description}</p>

      <button
        className={`event-register-btn${event.registrationClosed ? ' event-register-btn-muted' : ''}`}
        onClick={onRegister}
        type="button"
      >
        {event.actionLabel || 'Register Now'}
      </button>
    </div>
  );
};

export default EventCard;
