import M from "materialize-css";
import $ from "jquery";

import { useEffect } from "react";

import '../css/customers.css'

const TransactionsEmpty = () => {
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
        <div id="customers-page" className="page-content-wrapper">
            <div className="container">
                <div className="page-title-wrapper">
                    <h4 className="page-content-title flex-div">
                        <span>Transactions </span>
                        <small className="page-label-tag"></small>
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
                                        <img src={require("../images/c-empty-7.svg").default} alt="transaction icon" className="tranx-activity-icon" />
                                        <div className="tranx-activity-details">
                                            <div className="tranx-activity">
                                                <img src={require('../images/c-empty-1.svg').default} alt="empty" className="empty-placeholder" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span>
                                        <img src={require('../images/c-empty-1.svg').default} alt="empty" className="empty-placeholder" />
                                    </span>
                                </td>
                                <td>
                                    <span className="tranxn-amount">
                                        <img src={require('../images/c-empty-1.svg').default} alt="empty" className="empty-placeholder" />
                                    </span>
                                    <span className="gray-txt">
                                        . <img src={require('../images/c-empty-1.svg').default} alt="empty" className="empty-placeholder" />
                                    </span>
                                </td>
                                <td>
                                    <span>
                                        <img src={require('../images/c-empty-1.svg').default} alt="empty" className="empty-placeholder" />
                                    </span>
                                </td>
                                <td>
                                    <span>
                                        <img src={require('../images/c-empty-1.svg').default} alt="empty" className="empty-placeholder" />
                                    </span>
                                </td>
                                <td>
                                    <span>
                                        <img src={require('../images/c-empty-1.svg').default} alt="empty" className="empty-placeholder" />
                                    </span>
                                </td>
                                <td>
                                    <img src={require("../images/menu-circle-empty.svg").default} alt="icon" className="table-menu-circle" />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="empty-cont-container center">
                        <div className="empty-img-wrapper">
                            <img src={require('../images/empty-tranxn.svg').default} alt="empty-img" className="empty-img" />
                        </div>
                        <div className="empty-txts-wrapper">
                            <div className="empty-txt-title">No Transactions Yet</div>
                            <div className="empty-txt-desc gray-txt">
                                There're no transactions for this query. Please try another query or clear your filters.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionsEmpty;