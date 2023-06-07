// import { NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const MakeCollections = () => {
    return (
        <div id="make-collections-modal" className="modal dashboardModal">
            <div className="modal-content">
                <img src={require("../../images/close-modal-2.svg").default} alt="close" className="modal-close close-modal" />
                <div className="modal-content-block">
                    <div className="modal-title-header">
                        <h1 className="modal-title">
                            Enter customer ID
                        </h1>
                        <p className="modal-desc gray-txt">
                            If you don’t know your customer ID, please kindly ask He/She. 
                        </p>
                    </div>
                    <div className="input-field">
                        <input type="tel" id="customer-phone" className="inp-field" />
                        <label htmlFor="customer-phone">Customer Phone number</label>
                    </div>
                    <div className="modal-notice gray-txt">
                        You can’t access He/She? Go to <NavLink to="/dashboard/customers" className="pry-color">Customer Page</NavLink>
                    </div>
                    <div className="submit-btn-wrapper">
                        <button className="pry-btn continue-btn dashboard-modal-btn flex-div modal-trigger modal-close" data-target="customer-details-modal">
                            <span>Continue</span> <span className='right-arr'>&rsaquo;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeCollections;