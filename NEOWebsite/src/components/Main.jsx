export default function Main(props) {
    const {useState, data} = props
    const today = new Date().toISOString().slice(0,10)

    const [infoToggle, setInfoToggle] = useState(false)

    const handleClick = () => {
        setInfoToggle(!infoToggle)
  }

    return(
        
            <div className="animation-container">
                <div class = "bgImage">
                    <img src = "stars.jpg"/>
                </div>
                
               
                <div class = "asteroid-container">
                <div class="earth-container">
                    <img src="earth.png" alt="Earth" />
                </div>
                    {
                    data.near_earth_objects[`${today}`].map((object, index)=> {
                        const rad = object.close_approach_data[0].miss_distance.astronomical
                        const x_dist = Math.cos(rad*1500+400) * (rad*1500+400)
                        const y_dist = Math.sin(rad * 1500 + 400) * (rad * 1500 + 400)
                        return <div style={{height: rad*1500 + 400, width: rad*1500 + 400}} class='asteroid-container' id={object.id}>
                            <div style={{marginLeft:x_dist , marginTop: y_dist, zIndex: 10}} class="info_button_container">
                                <button  style={{zIndex: 20}} onClick={handleClick} class="clicky" id="button">
                                    <i className="fa-solid fa-circle"></i>
                                </button>

                                {infoToggle ? 
                                <div class="info_box" id={object.name}>
                                    <h2>{object.name}</h2>
                                    <ul>
                                        <li>Is Hazardous: {object.is_potentially_hazardous_asteroid.toString()}</li>
                                        <li>Distance (km): {object.close_approach_data[0].miss_distance.kilometers}</li>
                                        <li>Diameter (m): {object.estimated_diameter.meters.estimated_diameter_max}</li>
                                    </ul> 
                                    <button onClick={handleClick}>
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </button>
                                </div>
                                :
                                <></>}
                            </div>
                            <div style={{marginLeft:x_dist , marginTop: y_dist}} class = "ast_img_cont" >
                                <img src="asteroid.png" alt={object.name} />
                                <p style = {{marginTop: 30}}>{object.name}</p>
                                
                            </div>
                            
                        </div> 
                    })
                    }
                </div>
            
            </div>
            
        
    )
}