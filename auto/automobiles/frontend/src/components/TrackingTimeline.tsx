import React from 'react';

interface TrackingEvent {
  time: string;
  status: string;
  location?: string;
}

interface TrackingTimelineProps {
  events: TrackingEvent[];
}

const TrackingTimeline: React.FC<TrackingTimelineProps> = ({ events }) => {
  return (
    <div className="tracking-timeline">
      <h2 className="text-xl font-bold mb-4">Tracking Timeline</h2>
      <ul className="list-disc pl-5">
        {events.map((event, index) => (
          <li key={index} className="mb-2">
            <span className="font-semibold">{event.time}</span>: {event.status}
            {event.location && <span className="text-gray-500"> at {event.location}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackingTimeline;