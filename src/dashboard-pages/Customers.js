import M from "materialize-css";
import $ from "jquery";

import { useEffect } from "react";

import '../css/customers.css'

const Customers = () => {
    useEffect (()=> {
        var elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);

        var elemSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemSelect);

        var elemsTabs = document.querySelectorAll('.tabs');
        M.Tabs.init(elemsTabs);

        $(".filter-trigger").click(function(){
            $(".filter-dropdown-content").slideToggle();
        });
    }, []);

    return(
        <div id="customers-page" className="page-content-wrapper">
            <div className="container">
                <div className="page-title-wrapper">
                    <h4 className="page-content-title flex-div">
                        <span>Customers </span>
                        <small className="page-label-tag">· 4</small>
                    </h4>
                </div>

                <div className="tabs-block-wrapper" id="customer-tabs-wrapper">
                    <ul className="tabs" >
                        <li class="tab">
                            <a className="active" href="#pending-payments">
                                <span>Pending Payments</span>
                                <small className="tab-label-tag">4</small>
                            </a>
                        </li>
                        <li class="tab">
                            <a href="#completed-payments">
                                <span>Completed Payments</span>
                                <small className="tab-label-tag">0</small>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="customers-blocks-wrapper">
                    <div id="pending-payments">
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
                                            <select id="payment-status">
                                                <option value="Full Payment">Full Payment</option>
                                                <option value="Part Payment">Part Payment</option>
                                                <option value="No Payment">No Payment</option>
                                            </select>
                                            <label htmlFor="payment-status" className="active">Payment Status</label>
                                            <img src={require("../images/caret-down.svg").default} alt="caret" className="inp-caret-icon" />
                                        </div>
                                        <div className="select-field input-field single-field rel">
                                            <select id="lcda">
                                                <option value="Option 1">Option 1</option>
                                                <option value="Option 2">Option 2</option>
                                                <option value="Option 3">Option 3</option>
                                                <option value="Option 4">Option 4</option>
                                                <option value="Option 5">Option 5</option>
                                            </select>
                                            <label htmlFor="lcda" className="active">LCDA </label>
                                            <img src={require("../images/caret-down.svg").default} alt="caret" className="inp-caret-icon" />
                                        </div>
                                        <div className="select-field input-field single-field rel">
                                            <select id="lga">
                                                <option value="Option 1">Option 1</option>
                                                <option value="Option 2">Option 2</option>
                                                <option value="Option 3">Option 3</option>
                                                <option value="Option 4">Option 4</option>
                                                <option value="Option 5">Option 5</option>
                                            </select>
                                            <label htmlFor="lga" className="active">LGA </label>
                                            <img src={require("../images/caret-down.svg").default} alt="caret" className="inp-caret-icon" />
                                        </div>
                                        <div className="select-field input-field single-field rel">
                                            <select id="state">
                                                <option value="Option 1">Option 1</option>
                                                <option value="Option 2">Option 2</option>
                                                <option value="Option 3">Option 3</option>
                                                <option value="Option 4">Option 4</option>
                                                <option value="Option 5">Option 5</option>
                                            </select>
                                            <label htmlFor="state" className="active">State </label>
                                            <img src={require("../images/caret-down.svg").default} alt="caret" className="inp-caret-icon" />
                                        </div>
                                        <div className="select-field input-field single-field rel">
                                            <select id="merchant">
                                                <option value="Show all">Show all</option>
                                                <option value="Option 1">Option 1</option>
                                                <option value="Option 2">Option 2</option>
                                                <option value="Option 3">Option 3</option>
                                                <option value="Option 4">Option 4</option>
                                                <option value="Option 5">Option 5</option>
                                            </select>
                                            <label htmlFor="merchant" className="active">Merchant </label>
                                            <img src={require("../images/caret-down.svg").default} alt="caret" className="inp-caret-icon" />
                                        </div>

                                        <div className="filter-btns-wrapper">
                                            <button className="filter-btn pry-btn filter-trigger">Filter</button>
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
                                <div className="add-btn-wrapper">
                                    <button className="add-trigger-btn modal-trigger" data-target="add-new-customer-modal">
                                        &#43; Add Customers
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="table-wrapper">
                            <table id="customers-table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>CUSTOMER ID</th>
                                        <th>NAME</th>
                                        <th>ITEM</th>
                                        <th>LOCATION</th>
                                        <th>PAID</th>
                                        <th>PENDING</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>                           
                                    <tr>
                                        <td>
                                            <span className="status-disc green"></span>
                                        </td>
                                        <td>0814862009</td>
                                        <td>Iya Micheal Store</td>
                                        <td className="gray-txt">10 Bags of Rice</td>
                                        <td>Oshodi, Lagos</td>
                                        <td className="green-text">₦900,000</td>
                                        <td className="orange-text">₦100,000</td>
                                        <td>
                                            <img src={require('../images/call.svg').default} alt="call" className="call-info-trigger modal-trigger" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="status-disc green"></span>
                                        </td>
                                        <td>09014873110</td>
                                        <td>Bola Grocery Store</td>
                                        <td className="gray-txt">8 Cartons of Sunlight...</td>
                                        <td>Oshodi, Lagos</td>
                                        <td className="default-text">₦0</td>
                                        <td className="orange-text">₦99,980</td>
                                        <td>
                                            <img src={require('../images/call.svg').default} alt="call" className="call-info-trigger modal-trigger" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="status-disc red"></span>
                                        </td>
                                        <td>08025982221</td>
                                        <td>Okon and Sons</td>
                                        <td className="gray-txt">4 Cartons of Croack...</td>
                                        <td>Ikeja, Lagos</td>
                                        <td className="green-text">₦250,000</td>
                                        <td className="orange-text">₦500,000</td>
                                        <td>
                                            <img src={require('../images/call.svg').default} alt="call" className="call-info-trigger modal-trigger" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="status-disc green"></span>
                                        </td>
                                        <td>08136093532</td>
                                        <td>Iya Barakatu</td>
                                        <td className="gray-txt">8 Bags of Beans</td>
                                        <td>Ajayi Farms, Lagos </td>
                                        <td className="default-text">₦0</td>
                                        <td className="orange-text">₦1,000,000</td>
                                        <td>
                                            <img src={require('../images/call.svg').default} alt="call" className="call-info-trigger modal-trigger" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div id="completed-payments">
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
                                            <select id="payment-status">
                                                <option value="Full Payment">Full Payment</option>
                                                <option value="Part Payment">Part Payment</option>
                                                <option value="No Payment">No Payment</option>
                                            </select>
                                            <label htmlFor="payment-status" className="active">Payment Status</label>
                                            <img src={require("../images/caret-down.svg").default} alt="caret" className="inp-caret-icon" />
                                        </div>
                                        <div className="select-field input-field single-field rel">
                                            <select id="lcda">
                                                <option value="Option 1">Option 1</option>
                                                <option value="Option 2">Option 2</option>
                                                <option value="Option 3">Option 3</option>
                                                <option value="Option 4">Option 4</option>
                                                <option value="Option 5">Option 5</option>
                                            </select>
                                            <label htmlFor="lcda" className="active">LCDA </label>
                                            <img src={require("../images/caret-down.svg").default} alt="caret" className="inp-caret-icon" />
                                        </div>
                                        <div className="select-field input-field single-field rel">
                                            <select id="lga">
                                                <option value="Option 1">Option 1</option>
                                                <option value="Option 2">Option 2</option>
                                                <option value="Option 3">Option 3</option>
                                                <option value="Option 4">Option 4</option>
                                                <option value="Option 5">Option 5</option>
                                            </select>
                                            <label htmlFor="lga" className="active">LGA </label>
                                            <img src={require("../images/caret-down.svg").default} alt="caret" className="inp-caret-icon" />
                                        </div>
                                        <div className="select-field input-field single-field rel">
                                            <select id="state">
                                                <option value="Option 1">Option 1</option>
                                                <option value="Option 2">Option 2</option>
                                                <option value="Option 3">Option 3</option>
                                                <option value="Option 4">Option 4</option>
                                                <option value="Option 5">Option 5</option>
                                            </select>
                                            <label htmlFor="state" className="active">State </label>
                                            <img src={require("../images/caret-down.svg").default} alt="caret" className="inp-caret-icon" />
                                        </div>
                                        <div className="select-field input-field single-field rel">
                                            <select id="merchant">
                                                <option value="Show all">Show all</option>
                                                <option value="Option 1">Option 1</option>
                                                <option value="Option 2">Option 2</option>
                                                <option value="Option 3">Option 3</option>
                                                <option value="Option 4">Option 4</option>
                                                <option value="Option 5">Option 5</option>
                                            </select>
                                            <label htmlFor="merchant" className="active">Merchant </label>
                                            <img src={require("../images/caret-down.svg").default} alt="caret" className="inp-caret-icon" />
                                        </div>

                                        <div className="filter-btns-wrapper">
                                            <button className="filter-btn pry-btn filter-trigger">Filter</button>
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
                                <div className="add-btn-wrapper">
                                    <button className="add-trigger-btn modal-trigger" data-target="add-new-customer-modal">
                                        &#43; Add Customers
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="table-wrapper">
                            <table id="customers-table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>CUSTOMER ID</th>
                                        <th>NAME</th>
                                        <th>ITEM</th>
                                        <th>LOCATION</th>
                                        <th>PAID</th>
                                        <th>PENDING</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>                           
                                    <tr>
                                        <td>
                                            <span className="status-disc"></span>
                                        </td>
                                        <td>
                                            <img src={require('../images/c-empty-1.svg').default} alt="empty" className="empty-placeholder" />
                                        </td>
                                        <td>
                                            <img src={require('../images/c-empty-2.svg').default} alt="empty" className="empty-placeholder" />
                                        </td>
                                        <td className="gray-txt">
                                            <img src={require('../images/c-empty-3.svg').default} alt="empty" className="empty-placeholder" />
                                        </td>
                                        <td>
                                            <img src={require('../images/c-empty-4.svg').default} alt="empty" className="empty-placeholder" />
                                        </td>
                                        <td className="green-text">
                                            <img src={require('../images/c-empty-5.svg').default} alt="empty" className="empty-placeholder" />
                                        </td>
                                        <td className="orange-text">
                                            <img src={require('../images/c-empty-6.svg').default} alt="empty" className="empty-placeholder" />
                                        </td>
                                        <td>
                                            <img src={require('../images/empty-call.svg').default} alt="call" className="call-info-trigger empty-call-info" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="empty-cont-container center">
                                <div className="empty-img-wrapper">
                                    <img src={require('../images/empty-people.svg').default} alt="empty-img" className="empty-img" />
                                </div>
                                <div className="empty-txts-wrapper">
                                    <div className="empty-txt-title">No customer assigned to you</div>
                                    <div className="empty-txt-desc gray-txt">
                                        Customers are added when  a  payrail admin assigns them to you. You can also add customers yourself.
                                    </div>
                                    <div className="empty-cta-wrapper">
                                        <span className="empty-cta modal-trigger">+ Add Customers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers;