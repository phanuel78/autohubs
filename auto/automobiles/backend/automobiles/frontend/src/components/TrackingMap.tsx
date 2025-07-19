import React, { useEffect, useRef } from 'react';

interface TrackingMapProps {
  coordinates: { lat: number; lng: number }[];
}

const TrackingMap: React.FC<TrackingMapProps> = ({ coordinates }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (coordinates.length === 0) return;

    const map = new google.maps.Map(mapRef.current!, {
      center: coordinates[0],
      zoom: 8,
    });

    const path = coordinates.map(coord => new google.maps.LatLng(coord.lat, coord.lng));
    const polyline = new google.maps.Polyline({
      path,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });

    polyline.setMap(map);
  }, [coordinates]);

  return <div ref={mapRef} className="w-full h-96" />;
};

export default TrackingMap;