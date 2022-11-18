import "../../assets/css/include/gameCategories.css"

function GameCategories(props) {
    return(
        <div className="position-relative h-100">
            <a style={{cursor:"pointer"}} href="/exchange/Matches/Inplay">
                <div class="entrance-title">
                    <dt className="link-text game-name">{props.name}</dt>
                    <dd className="link-text play-btn">Play Now</dd>
                </div>
                <img src={props.img} alt="" draggable="false" width="100%" style={{visibility:"visible"}} />
            </a>
        </div>
    )
}

export default GameCategories;