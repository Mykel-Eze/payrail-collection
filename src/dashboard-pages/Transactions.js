import M from "materialize-css";
import $ from "jquery";

import { useEffect } from "react";

import '../css/customers.css'

const Transactions = () => {
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
        <div id="transactions-page" className="page-content-wrapper">
            <div className="container">
                <div className="page-title-wrapper">
                    <h4 className="page-content-title flex-div">
                        <span>Transactions </span>
                        <small className="page-label-tag">· 3</small>
                    </h4>
                </div>

                <div className="page-bar-wrapper flex-div justify-content-btw">
                    <div className="page-bar-left flex-div">
                        <div className="filter-block flex-div">
                            <div className="filter-dropdown-trigger filter-trigger">
                                <img src={require('../images/filter.svg').default} alt="filter-icon" className="filter-icon" />
                                <span>Filters</span>
                            </div>


                            <ul id="filter-dropdown" className="filter-dropdown-content">

                                <div className="arrow-up"></div>

                                <div className="select-field input-field single-field rel">
                                    <select id="status">
                                        <option value="Processed">Processed</option>
                                        <option value="Successful">Successful</option>
                                        <option value="Failed">Failed</option>
                                    </select>
                                    <label htmlFor="status" className="active">Status</label>
                                    <img src={require("../images/caret-down.svg").default} alt="caret" className="inp-caret-icon" />
                                </div>
                                <div className="select-field input-field single-field rel">
                                    <select id="date-period">
                                        <option value="All Time">All Time</option>
                                        <option value="Yesterday">Yesterday</option>
                                        <option value="This Week">This Week</option>
                                        <option value="This Month">This Month</option>
                                        <option value="This Year">This Year</option>
                                    </select>
                                    <label htmlFor="date-period" className="active">Date Period </label>
                                    <img src={require("../images/caret-down.svg").default} alt="caret" className="inp-caret-icon" />
                                </div>
                                <div className="select-field input-field single-field rel">
                                    <select id="type">
                                        <option value="Payout">Payout</option>
                                        <option value="Deposit">Deposit</option>
                                        <option value="Payment">Payment</option>
                                    </select>
                                    <label htmlFor="type" className="active">Type </label>
                                    <img src={require("../images/caret-down.svg").default} alt="caret" className="inp-caret-icon" />
                                </div>

                                <div className="filter-btns-wrapper">
                                    <button className="filter-btn filter-trigger pry-btn">Filter</button>
                                    <button className="filter-reset-btn filter-trigger">
                                        <span>Reset to default</span>
                                    </button>
                                </div>
                            </ul>
                        </div>
                        <div className="vertical-divider">
                            <hr />
                        </div>
                        <div className="bar-search-block rel">
                            <img src={require('../images/search-2.svg').default} alt="search-icon" className="search-icon-2" />
                            <input type="search" className="bar-search" placeholder="Search Customers" />
                        </div>
                    </div>
                    <div className="page-bar-right flex-div">
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
                                <th>STATUS</th>
                                <th>REFERENCE</th>
                                <th>TRANSACTION INFORMATION</th>
                                <th>NARRATION</th>
                                <th>TYPE</th>
                                <th>DATE</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>                           
                            <tr>
                                <td>
                                    <div className="flex-div">
                                        <img src={require("../images/received-icon.svg").default} alt="transaction icon" className="tranx-activity-icon" />
                                        <div className="tranx-activity-details">
                                            <div className="tranx-activity">Recieved</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span>PC08148620099</span>
                                </td>
                                <td>
                                    <span className="tranxn-amount">+ ₦10,000</span>
                                    <span className="gray-txt">. Payrail</span>
                                </td>
                                <td>
                                    <span>Commission </span>
                                </td>
                                <td>
                                    <span>Payout </span>
                                </td>
                                <td>
                                    <span>01 Sept, 04:25 AM</span>
                                </td>
                                <td>
                                    <img src={require("../images/menu-circle.svg").default} alt="icon" className="table-menu-circle" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="flex-div">
                                        <img src={require("../images/received-icon.svg").default} alt="transaction icon" className="tranx-activity-icon" />
                                        <div className="tranx-activity-details">
                                            <div className="tranx-activity">Recieved</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span>PC081486200YH</span>
                                </td>
                                <td>
                                    <span className="tranxn-amount">+ ₦10,000</span>
                                    <span className="gray-txt">. Olamide</span>
                                </td>
                                <td>
                                    <span>Wallet Funding </span>
                                </td>
                                <td>
                                    <span>Deposit </span>
                                </td>
                                <td>
                                    <span>28 Aug, 01:50 PM</span>
                                </td>
                                <td>
                                    <img src={require("../images/menu-circle.svg").default} alt="icon" className="table-menu-circle" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="flex-div">
                                        <img src={require("../images/send-icon.svg").default} alt="transaction icon" className="tranx-activity-icon" />
                                        <div className="tranx-activity-details">
                                            <div className="tranx-activity">Processed</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span>PC0814HGHS99</span>
                                </td>
                                <td>
                                    <span className="tranxn-amount">- ₦10,000</span>
                                    <span className="gray-txt">. Unilever</span>
                                </td>
                                <td>
                                    <span>CUS1209 </span>
                                </td>
                                <td>
                                    <span>Payment </span>
                                </td>
                                <td>
                                    <span>20 Aug, 02:25 PM</span>
                                </td>
                                <td>
                                    <img src={require("../images/menu-circle.svg").default} alt="icon" className="table-menu-circle" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Transactions;