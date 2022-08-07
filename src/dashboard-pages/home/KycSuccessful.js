// import React, { useEffect, useHistory } from 'react'
// import { useNavigate  } from 'react-router-dom';
// import $ from "jquery";
// import M from "materialize-css"

const KycSuccessful = () => {
    // const history = useHistory();
    // useEffect(()=> {
    //     setTimeout(() => {
    //         history.push('/event')
    //     }, 2000)
    // },[])

    return (
        <div className="page-content-wrapper">
            <div className="container">
                <div className="page-header-wrapper">
                    <div className="left-align">
                        <h2 className="page-title">Complete your KYC</h2>
                        <span>
                            Olamide, it’s important you update your profile to increase your transaction and loan purpose
                        </span>
                    </div>
                </div>

                <div className="pending-tasks-wrapper">
                    <div className="kyc-form-wrapper">
                        <div id="kyc-form" className="dashboard-form">
                            <div className="row">
                                    <div id="review-kyc-application">
                                        <div className="user-pix-div center mag-bottom-0">
                                        <img src={require("../../images/completed.svg").default} alt="completed" className="user-pix" />
                                    </div>
                                    <div className="user-detected-notice center">
                                        <h1 className="modal-title">KYC submission succesful</h1>
                                        <p className="modal-desc">
                                            The details you provided are under review
                                        </p>
                                    </div>
                                    <div className="review-field flex-div" id="personal-info">
                                        <span className="review-field-txt">Personal Information</span>
                                        <img src={require("../../images/pending-review-icon.svg").default} alt="pending-status" className="review-status-icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KycSuccessful;