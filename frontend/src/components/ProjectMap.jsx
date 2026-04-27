import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Membuat marker buatan dengan warna Hex presisi
const iconPresisi = L.divIcon({
  className: "custom-marker", // Kita hilangkan style default di CSS nanti
  html: `
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21C16 17.5 19 14.4087 19 10.5C19 6.63401 15.866 3.5 12 3.5C8.13401 3.5 5 6.63401 5 10.5C5 14.4087 8 17.5 12 21Z" 
            fill="#1B4332" stroke="white" stroke-width="1"/>
      <circle cx="12" cy="10.5" r="2.5" fill="white"/>
    </svg>
  `,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

export default function ProjectMap({ data }) {
  const center = [-6.8950, 107.5600];

  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden border border-base-300 shadow-md mb-8 z-0">
      <MapContainer center={center} zoom={14} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
        {data?.map((project) => (
          project.koordinat && (
            <Marker 
              key={project.id} 
              position={project.koordinat} 
              icon={iconPresisi}
            >
              <Popup>
                <div className="p-1 font-sans">
                  <h3 className="font-bold text-[#1B4332]">{project.nama_proyek}</h3>
                  <p className="text-xs opacity-70">{project.lokasi}</p>
                </div>
              </Popup>
            </Marker>
          )
        ))}
      </MapContainer>
    </div>
  );
}