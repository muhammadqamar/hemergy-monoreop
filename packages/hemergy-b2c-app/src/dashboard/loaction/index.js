import Image from "next/image";
import LocationCard from "../common/locationCard";
import CardArea from "../common/cardArea";

const Index = () => {
  return (
    <div className="main-loaction">
      <CardArea />
      <div className="map-box">
        <div className="map">
          <img src="/images/map/map.svg" alt="map" className="map" />
        </div>
        <div className="map-opction">
          <div className="input-field">
            <input className="input p-sm" placeholder="Search..." />
            <div className="pointer"></div>
            <Image src="/images/map/search.svg" alt="visibility" width={20} height={20} />
          </div>
          <div className="input-field">
            <select className="p-sm">
              <option value="">Location</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </select>
          </div>
          <div className="map-field">
            <Image src="/images/map/clear_day.svg" alt="visibility" width={20} height={20} />
          </div>
          <div className="map-field">
            <Image src="/images/map/air.svg" alt="visibility" width={20} height={20} />
          </div>
          <div className="map-field">
            <Image src="/images/map/humidity_low.svg" alt="visibility" width={20} height={20} />
          </div>
          <div className="map-field">
            <Image
              src="/images/map/local_fire_department.svg"
              alt="visibility"
              width={20}
              height={20}
            />
          </div>
          <div className="map-field">
            <Image src="/images/map/trending.svg" alt="visibility" width={20} height={20} />
          </div>
        </div>
        <div className="map-cards">
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
        </div>
      </div>
    </div>
  );
};

export default Index;
