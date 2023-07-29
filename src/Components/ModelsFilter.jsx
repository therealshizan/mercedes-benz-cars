import { useEffect, useState } from "react";
import Loader from "./Loader";

const ModelsFilter = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [models, setModels] = useState([]);

  const getModels = async () => {
    try {
      setIsLoading(true)
      const res = await fetch("../cars/Models.json");
      const modelsData = await res.json();
      setModels(modelsData);
      setIsLoading(false)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getModels();
  }, []);

  return (
    <div className="models-filter filter">
      {isLoading ? <Loader/> : (
        <>
        <h4>Models</h4>
        <div className="checkboxes">
      {models.map((model, index) => (
        <div key={index} className="models-checkbox">
          <input type="checkbox" name="model" id="model" />
          <label htmlFor="model">{model}</label><br/>
        </div>
      ))}
      </div>
        </>
      )}
    </div>
  );
};

export default ModelsFilter;
