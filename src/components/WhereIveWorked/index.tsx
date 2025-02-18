import React, { useRef, useEffect, useState } from "react";
import mapboxgl, { Map } from "mapbox-gl";
import rwandaImg from "../../assets/mapimages/rwanda.jpg";
import malawiImg from "../../assets/mapimages/malawi.jpg";
import elSalvadorImg from "../../assets/mapimages/elsalvador.jpg";
import kenyaImg from "../../assets/mapimages/kenya.jpg";
import ethiopiaImg from "../../assets/mapimages/ethiopia.jpg";
import southAfricaImg from "../../assets/mapimages/southafrica.jpg";
import madagascarImg from "../../assets/mapimages/madagascar.jpg";
import nigerImg from "../../assets/mapimages/niger.jpg";
import coteDIvoireImg from "../../assets/mapimages/cotedivoire.jpg";
import togoImg from "../../assets/mapimages/togo.jpg";
import "./styles.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYnJldHQ3NyIsImEiOiJjbTdhbXh3MmwwMXE2MmtwaTNkbmZnMW9uIn0.qLqBkJSnhAgnFdxH3x4uPw";

interface LocationData {
  id: number;
  title: string;
  description: string;
  coords: [number, number];
  image: string;
}

const WhereIveWorked: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [mapInstance, setMapInstance] = useState<Map | null>(null);
  const locations: LocationData[] = [
    {
      id: 1,
      title: "Rwanda (2014)",
      description:
        "Participated in a three-week course focused on human rights in post-violence contexts.",
      coords: [29.8739, -1.9403],
      image: rwandaImg,
    },
    {
      id: 2,
      title: "Malawi (2016)",
      description:
        "Completed a three-month internship as a junior fellow with Engineers Without Borders Canada",
      coords: [34.3015, -13.2543],
      image: malawiImg,
    },
    {
      id: 3,
      title: "El Salvador (2018)",
      description:
        "Provided data quality assurance monitoring and supported enumerator training for the impact evaluation of World Vision's Youth Ready program.",
      coords: [-88.8965, 13.7942],
      image: elSalvadorImg,
    },
    {
      id: 4,
      title: "Kenya (2019)",
      description:
        "Interviewed power sector professionals to inform the Power Africa Transactions and Reforms Program performance evaluation.",
      coords: [37.9062, -0.0236],
      image: kenyaImg,
    },
    {
      id: 5,
      title: "Ethiopia (2019)",
      description:
        "Interviewed power sector professionals to inform the Power Africa Transactions and Reforms Program performance evaluation.",
      coords: [40.4897, 9.145],
      image: ethiopiaImg,
    },
    {
      id: 6,
      title: "South Africa (2019)",
      description:
        "Interviewed power sector professionals and delivered a presentation to senior Power Africa administrators as part of the Power Africa Transactions and Reforms Program performance evaluation.",
      coords: [22.9375, -30.5595],
      image: southAfricaImg,
    },
    {
      id: 7,
      title: "Madagascar (2020)",
      description:
        "Met with local stakeholders to collect data and contextual information needed for the economic analysis of USAID/Madagascar's Communities and Conservation Project.",
      coords: [46.8691, -18.7669],
      image: madagascarImg,
    },
    {
      id: 8,
      title: "Niger (2021)",
      description:
        "Assisted the delivery of a course on cost-benefit analysis for a local agricultural NGO.",
      coords: [8.0817, 17.6078],
      image: nigerImg,
    },
    {
      id: 9,
      title: "Côte d’Ivoire (2022)",
      description:
        "Met with government officials to obtain business registries needed to implement USAID's West African Women's Entrepreneurship survey.",
      coords: [-5.54708, 7.53999],
      image: coteDIvoireImg,
    },
    {
      id: 10,
      title: "Togo (2022)",
      description:
        "Met with government officials to obtain business registries needed to implement USAID's West African Women's Entrepreneurship survey.",
      coords: [0.8248, 8.6195],
      image: togoImg,
    },
  ];

  useEffect(() => {
    if (!mapContainerRef.current) return;
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [-25, 5],
      zoom: 1,
    });
    setMapInstance(map);
    map.addControl(new mapboxgl.NavigationControl(), "top-right");
    locations.forEach((loc) => {
      const markerEl = document.createElement("div");
      markerEl.className = "map-marker";
      const popupContent = document.createElement("div");
      popupContent.className = "popup-content";
      popupContent.innerHTML = `
        <div class="popup-container">
          <div class="popup-image">
            <img src="${loc.image}" alt="${loc.title}" />
          </div>
          <div class="popup-text">
            <h3 class="popup-title">${loc.title}</h3>
            <p class="popup-description">${loc.description}</p>
          </div>
        </div>
      `;
      const popup = new mapboxgl.Popup({
        offset: 25,
        maxWidth: "250px",
      }).setDOMContent(popupContent);
      new mapboxgl.Marker(markerEl)
        .setLngLat(loc.coords)
        .setPopup(popup)
        .addTo(map);
    });
    return () => {
      map.remove();
    };
  }, []);

  return (
    <section className="where-ive-worked-section">
      <h2>Where I’ve Worked</h2>
      <div ref={mapContainerRef} className="map-container" />
    </section>
  );
};

export default WhereIveWorked;
