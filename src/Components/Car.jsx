const Car = ({carClass, bodyType, model, ...restProps}) => {
  return (
    <div className="car">
      <h1 className="carTitle">{carClass} {bodyType}</h1>
      <span className="carPrice">Starting From ₹ {restProps.price}.00</span><br/>
      {restProps.fuelType !== "" && <span className="fuelType">{restProps.fuelType}</span>}
      <img src={restProps.carImage} alt="" className="carImage" />
    </div>
  )
}

export default Car
