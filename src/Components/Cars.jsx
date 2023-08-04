import { useEffect, useState } from "react"
import Car from "./Car"
import Loader from "./Loader"

import '../Assets/css/Cars.css'

const Cars = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [cars, setCars] = useState([])

  const getCars = async ()=>{
    try{
      setIsLoading(true)
      const response = await fetch('../cars/Cars.json')
      const carsData = await response.json()
      setCars(carsData)
      setIsLoading(false)
    }catch(err){
      console.error(err)
    }
  }

  useEffect(()=>{
    getCars()
  }, [])


  return (
    <div className="cars">
      {isLoading ? <Loader/> : (
        <>
          {cars.map((car, index) => <Car carClass={car.class} bodyType={car.bodyType} model={car.model} price={car.price} fuelType={car.fuelType} carImage={car.carImage} key={index}/>)}
        </>
      )}
    </div>
  )
}

export default Cars
