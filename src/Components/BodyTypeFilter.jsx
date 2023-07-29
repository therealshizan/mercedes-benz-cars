import { useEffect, useState } from "react";
import Loader from "./Loader";

const bodyTypeFilter = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bodyType, setbodyType] = useState([]);

  const getbodyType = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("../cars/BodyTypes.json");
      const bodyTypeData = await res.json();
      setbodyType(bodyTypeData);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getbodyType();
  }, []);

  return (
    <div className="bodyType-filter filter">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h4>Bodytype</h4>

          <div className="checkboxes">
            {bodyType.map((type, index) => (
              <div key={index} className="bodyType-checkbox">
                <input type="checkbox" name="type" id="type" />
                <label htmlFor="type">
                  {type}
                </label>
                <br />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default bodyTypeFilter;
