// import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import $ from "jquery"

const CustomerDetails = () => {
    $(".show-collection-details").click(function(){
        $(".more-collection-details").slideToggle();
    })
    return (
        <div id="customer-details-modal" className="modal dashboardModal">
            <div className="modal-content rel">
                <img src={require("../../images/close-modal-2.svg").default} alt="close" className="modal-close close-modal" />
                <div className="modal-content-block">
                    <div className="modal-title-header">
                        <h1 className="modal-title">
                            Customer Details
                        </h1>
                    </div>
                    <div className="collections-scroll">
                        <div className="customer-id-block">
                            <div className="cib-row flex-div justify-content-btw">
                                <span className="cib-title">Customer ID</span>
                                <span className="cib-desc">
                                    <a href="tel:+2348148620099" className="cib-call-link">+2348148620099</a>
                                </span>
                            </div>
                            <div className="cib-row flex-div justify-content-btw">
                                <span className="cib-title">Name</span>
                                <span className="cib-desc cib-big-txt">Iya Micheal Store</span>
                            </div>
                        </div>
                        <div className="collection-details-wrapper">
                            <div className="customer-collection-details">
                                <div className="ccd-block">
                                    <div className="ccd-block-title">Item Description</div>
                                    <div className="ccd-block-desc">10 • Bags of Rice • 50kg</div>
                                </div>
                                <div className="ccd-block">
                                    <div className="ccd-block-title">Merchant</div>
                                    <div className="ccd-block-desc">Capricon foods Nig. Limited</div>
                                </div>
                                <div className="ccd-block">
                                    <div className="ccd-block-title">Debt</div>
                                    <div className="ccd-block-desc bold-txt">₦1,428,000</div>
                                </div>
                                <div className="ccd-block">
                                    <div className="ccd-block-desc">
                                        <u>2B Arogunbiade Street, Oshodi LCDA, Lagos, Nigeria </u>
                                    </div>
                                </div>
                            </div>
                            <div className="collection-history flex-div">
                                <div className="ch-txt">Collection History</div>
                                <div className="ch-label">Due in 28 Days</div>
                                <div className="show-collection-details pry-color bold-txt pointer">SHOW DETAILS</div>
                            </div>
                            <div className="more-collection-details" >
                                <div className="customer-collection-details">
                                    <div className="ccd-block">
                                        <div className="ccd-block-title">Adebayo • Agent ID: 182101</div>
                                        <div className="ccd-block-desc bold-txt">₦50,000.00</div>
                                    </div>
                                    <div className="ccd-block">
                                        <div className="ccd-block-title">Collection Date</div>
                                        <div className="ccd-block-desc">Jan 12, 2022</div>
                                    </div>
                                    <div className="ccd-block">
                                        <div className="ccd-block-title">Emeka • Agent ID: 546219</div>
                                        <div className="ccd-block-desc bold-txt">₦22,000.00</div>
                                    </div>
                                    <div className="ccd-block">
                                        <div className="ccd-block-title">Collection Date</div>
                                        <div className="ccd-block-desc bold-txt">Dec 1, 2021</div>
                                    </div>
                                </div>
                            </div>
                            <hr className="gray-divider" />
                            <div className="collection-btn-wrapper center">
                                <button className="make-collection-btn pry-bg">Make collection</button>
                                <div className="create-reminder-trigger">Create a reminder</div>
                            </div>
                        </div>
                    </div>

                    <div className="collection-modal-footer">
                        <div className="collection-debt-figures">
                            <div className="cbf-row flex-div justify-content-btw">
                                <div className="cbf-row-title">Total Debt</div>
                                <div className="cbf-row-desc">₦2,450,000.00</div>
                            </div>
                            <div className="cbf-row flex-div justify-content-btw">
                                <div className="cbf-row-title">Remaining Debt</div>
                                <div className="cbf-row-desc cbf-big-txt">₦2,278,000.00</div>
                            </div>
                            <hr className="gray-divider" />
                            <div className="cbf-row cbf-row-2 flex-div justify-content-btw">
                                <div className="cbf-row-title">Phone Number</div>
                                <div className="cbf-row-desc">
                                    <a href="tel:+2348148620099" className="cbf-call flex-div">
                                        <u className="bold-txt">+2348148620099</u>
                                        <img src={require("../../images/call-2.svg").default} alt="call" className="call-icon-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerDetails;