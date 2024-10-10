export default function SideBar(props) {

    const {handleToggleModal, data} = props
    return(
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
                <div className="sidebarContent">
                    <h2>{data?.title}</h2>  
                    <div className="descContainer">
                        <p className="descTitle">{data?.date}</p>
                        <p>{data?.explanation}</p>
                    </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}