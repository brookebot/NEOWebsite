export default function SideBar(props) {

    const {handleToggleModal, data} = props
    const today = new Date().toISOString().slice(0,10)
    const prettyDate = new Date().toDateString()

    return(
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
                <div className="sidebarContent">
                    <h2>{data?.title}</h2>  
                    <div className="descContainer">
                        <p className="descTitle">Near Earth Objects on, {prettyDate}</p>
                        <p>Welcome to my NEOWebsite! On the main page you will see the objects near earth today. To learn more about an object,
                            click on it on the map! </p>
                    </div>
                    <h2>Today's NEO's</h2>
                    <div class = "table"> 
                        {
                        data.near_earth_objects[`${today}`].map((object, index)=> {
                        return <table>
                            <tr><th>Name</th><th>Hazardous</th><th>Diameter (m)</th><th>Orbits:</th></tr>
                            <tr key = {index}>
                            <td>{object.name}</td>
                            <td>{object.is_potentially_hazardous_asteroid.toString()}</td>
                            <td>{object.estimated_diameter.meters.estimated_diameter_max}</td>
                            <td>{object.close_approach_data[0].orbiting_body}</td>
                        </tr>
                        </table>
                        })
                    }
                    </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}