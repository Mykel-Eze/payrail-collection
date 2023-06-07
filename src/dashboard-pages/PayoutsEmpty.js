import M from "materialize-css";
import $ from "jquery";

import { useEffect } from "react";
// import { NavLink } from "react-router-dom";

import '../css/customers.css'

const PayoutsEmpty = () => {
    useEffect (()=> {
        var elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);

        var elemSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemSelect);

        var elemsPicker = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elemsPicker);

        $(".filter-trigger").click(function(){
            $(".filter-dropdown-content").slideToggle();
        });

        // $(".clickable-row").click(function() {
        //     window.location = $(this).data("href");
        // });    
    }, []);

    return(
        <div id="payouts-page" className="page-content-wrapper">
            <div className="container">
                <div className="page-title-wrapper">
                    <h4 className="page-content-title flex-div">
                        <span>Payouts </span>
                        {/* <small className="page-label-tag">· 0</small> */}
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
                                <div className="input-field single-field rel">
                                    <input type="text" id="start-date" className="form-inp-field datepicker" />
                                    <label htmlFor="start-date">Start Date </label>
                                </div>
                                <div className="input-field single-field rel">
                                    <input type="text" id="end-date" className="form-inp-field datepicker" />
                                    <label htmlFor="end-date">End Date </label>
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
                                <th>PAY DAY</th>
                                <th>RECIPIENT</th>
                                <th>TOTAL AMOUNT</th>
                                <th>PAYOUT</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>   
                            <tr className="clickable-row">
                                <td>
                                    <img src={require('../images/c-empty-1.svg').default} alt="empty" className="empty-placeholder" />
                                </td>
                                <td className="gray-txt">
                                    <img src={require('../images/c-empty-1.svg').default} alt="empty" className="empty-placeholder" />
                                </td>
                                <td>
                                    <img src={require('../images/c-empty-1.svg').default} alt="empty" className="empty-placeholder" />
                                </td>
                                <td>
                                    <img src={require('../images/c-empty-1.svg').default} alt="empty" className="empty-placeholder" />
                                </td>
                                <td>
                                    <img src={require('../images/c-empty-1.svg').default} alt="empty" className="empty-placeholder" />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="empty-cont-container center">
                        <div className="empty-img-wrapper">
                            <img src={require('../images/empty-payouts.svg').default} alt="empty-img" className="empty-img" />
                        </div>
                        <div className="empty-txts-wrapper">
                            <div className="empty-txt-title">You don’t have any payout</div>
                            <div className="empty-txt-desc gray-txt">
                                We haven't paid any money to this account. This is where you'll be able to see your payouts
                                and the transactions you were paid for.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PayoutsEmpty;