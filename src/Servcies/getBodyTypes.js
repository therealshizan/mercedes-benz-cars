const getBodyTypes = ()=>{
    fetch('../../cars/BodyTypes.json')
    .then(res => {
        if(!res.ok){
            throw new Error('Network response was not ok')
        }
        return res.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.error(err)
    })
}

export default getBodyTypes