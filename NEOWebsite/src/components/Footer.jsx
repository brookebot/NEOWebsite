export default function Footer(props) {

    const {showModal, handleToggleModal, data} = props
    const prettyDate = new Date().toDateString()

    return(
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2>Brooke Neupert's NEO Website</h2>
                <h1>{data?.element_count} Near-Earth Objects on {prettyDate}</h1>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}