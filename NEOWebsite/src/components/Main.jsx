export default function Main(props) {
    const {data} = props
    const today = new Date().toISOString().slice(0,10)
    return(
        <div className="tblContainer">
            <table>
                <thead>
                    <tr>
                        <th>Designation</th>
                        <th>Name</th>
                        <th>Hazardous</th>
                        <th>Magnitude</th>
                        <th>Max Diameter (m)</th>
                        <th>Miss Distance (AU)</th>
                        <th>Orbits</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       data.near_earth_objects[`${today}`].map((object, index) =>{
                            return <tr key = {index}>
                                <td>{object.id}</td>
                                <td>{object.name}</td>
                                <td>{object.is_potentially_hazardous_asteroid.toString()}</td>
                                <td>{object.absolute_magnitude_h}</td>
                                <td>{object.estimated_diameter.meters.estimated_diameter_max}</td>
                                <td>{object.close_approach_data[0].miss_distance.astronomical}</td>
                                <td>{object.close_approach_data[0].orbiting_body}</td>
                            </tr>
                       })
                    }
                </tbody>
            </table>
        </div>
    )
}