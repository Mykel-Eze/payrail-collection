import "../css/location-modal.css";

const LocationSearchBox = () => {
    return(
        <div id="location-search-box" className="modal">
            <div className="modal-content">
                <img src={require("../images/close-modal.svg").default} alt="close" className="modal-close close-location-box" />
                <div className="locations-wrapper">
                    <div className="input-field">
                        <input id="locations-inp" type="text" className="form-inp-field" placeholder="Enter your address" />
                    </div>
                    <div className="locations-list">
                        <div className="flex-div list-placeholder">
                            <img src={require("../images/location-circle-icon.svg").default} alt="location icon" className="red-location-icon" />
                            <span id="use-current-location">Use my current location</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationSearchBox;