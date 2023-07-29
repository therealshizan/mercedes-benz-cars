import { useEffect, useState } from "react";
import Loader from './Loader'

const FuelTypeFilter = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [fuelType, setfuelType] = useState([]);


  const getfuelType = async () => {
    try {
      setIsLoading(true)
      const res = await fetch("../cars/FuelType.json");
      const fuelTypeData = await res.json();
      setfuelType(fuelTypeData);
      setIsLoading(false)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getfuelType();
  }, []);

  return (
    <div className="fuelType-filter filter">
      {isLoading ?  <Loader/>
      : (
        <>
      <h4>Fuel Type</h4>

      <div className="checkboxes">
      {fuelType.map((type) => (
        <div key={type} className="fuelType-checkbox">
          <input type="checkbox" name="type" id="type" />
          <label htmlFor="type">{type}</label><br/>
        </div>
      ))}
      </div>
      </>) }
    </div>
  );
};

export default FuelTypeFilter;
