export default function Main(props) {
    const {data} = props
    const today = new Date().toISOString().slice(0,10)
    return(
        <div className="animation-container">
            <div class="earth-container">
                <img src="earth.png" alt="Earth" />
            </div>
            <div class = "asteroid-container">
                {
                data.near_earth_objects[`${today}`].map((object, index)=> {
                    return <div class='asteroid-container' id={object.id}>
                        <img src="asteroid.png" alt={object.name} />
                        <p>{object.id}</p>
                    </div>
                    elt = document.getElementById(object.id)

                    /*
                    return <tr key = {index}>
                        <td>{object.id}</td>
                        <td>{object.name}</td>
                        <td>{object.is_potentially_hazardous_asteroid.toString()}</td>
                        <td>{object.absolute_magnitude_h}</td>
                        <td>{object.estimated_diameter.meters.estimated_diameter_max}</td>
                        <td>{object.close_approach_data[0].miss_distance.astronomical}</td>
                        <td>{object.close_approach_data[0].orbiting_body}</td>
                    </tr>
                    */
                    
                    })
                }
            </div>
        
        </div>
    )
}