import M from "materialize-css";
import $ from "jquery";

import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import '../css/customers.css'

const PayoutDetails = () => {
    useEffect (()=> {
        var elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);

        var elemSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemSelect);

        $(".filter-trigger").click(function(){
            $(".filter-dropdown-content").slideToggle();
        }); 
    }, []);

    return(
        <div id="payout-details-page" className="page-content-wrapper">
            <div className="container">
                <NavLink to="/dashboard/payouts">
                    <div className="go-back-wrapper flex-div gray-txt">
                        <img src={require('../images/back.svg').default} alt="" className="back-icon" />
                        <span>Back</span>
                    </div>
                </NavLink>

                <div className="page-bar-wrapper">
                    <div className="page-bar-left flex-div justify-content-btw">
                        <div className="payout-cell-block">
                            <div className="payout-cell-title">Payout</div>
                            <div className="payout-cell-desc">NGN 1500.00</div>
                        </div>
                        <div className="vertical-divider">
                            <hr />
                        </div>
                        <div className="payout-cell-block">
                            <div className="payout-cell-title">Customer Name</div>
                            <div className="payout-cell-desc">Iya Micheal Store</div>
                        </div>
                        <div className="vertical-divider">
                            <hr />
                        </div>
                        <div className="payout-cell-block">
                            <div className="payout-cell-title">Payment Dated </div>
                            <div className="payout-cell-desc">Sat 06 Apirll, 2021</div>
                        </div>
                        <div className="vertical-divider">
                            <hr />
                        </div>
                        <div className="export-trigger-block flex-div">
                            <span>Export CSV</span>
                            <img src={require('../images/export.svg').default} alt="bill-icon" className="bill-icon" />
                        </div>
                    </div>
                </div>

                <div className="table-wrapper">
                    <table id="customers-table">
                        <thead>
                            <tr>
                                <th>REFERENCE</th>
                                <th>WALLET</th>
                                <th>TOTAL AMOUNT</th>
                                <th>INCOME</th>
                                <th>DATE</th>
                            </tr>
                        </thead>
                        <tbody>   
                            <tr>
                                <td>TRANS099002993</td>
                                <td className="gray-txt">Commission Wallet</td>
                                <td>NGN 10,000.10</td>
                                <td>NGN 1,500.00</td>
                                <td>Sun · 01 Sept, 04:25 AM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PayoutDetails;