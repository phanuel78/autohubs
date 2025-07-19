import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TrackingTimeline from '../components/TrackingTimeline';
import TrackingMap from '../components/TrackingMap';

const Track = () => {
    const { trackingNumber } = useParams();
    const [trackingData, setTrackingData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrackingData = async () => {
            try {
                const response = await fetch(`/api/track/${trackingNumber}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch tracking data');
                }
                const data = await response.json();
                setTrackingData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTrackingData();
    }, [trackingNumber]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Tracking Information</h1>
            {trackingData && (
                <>
                    <TrackingTimeline events={trackingData.events} />
                    <TrackingMap coordinates={trackingData.trackingCoords} />
                </>
            )}
        </div>
    );
};

export default Track;