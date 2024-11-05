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
                        <p className="descTitle">Asteroids around earth today, {prettyDate}</p>
                        <p>This app lets you see the current closest asteroids to earth today!
                             Take a look and see which ones are closest today:</p>
                    </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}