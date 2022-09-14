import { NavLink } from "react-router-dom";
import { useEffect } from "react";
// import $ from 'jquery'
import M from 'materialize-css';

import '../../css/modals.css';


const DashboardHome = () => {
    useEffect(()=> {
        var elemSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemSelect, {
            coverTrigger: false
        });
    }, []);

    const balanceType = document.querySelector("#balance-type");
    function showDiv(){
        if(balanceType.value === 1){
         document.getElementById('collection-block').style.display = "block";
         document.getElementById('commision-block').style.display = "none";
        } else{
         document.getElementById('collection-block').style.display = "none";
         document.getElementById('commision-block').style.display = "block";
        }
     } 
    
    return ( 
        <div className="page-content-wrapper">
            <div className="container">
                <div className="section-row-wrapper grid-row-2">
                    <div className="wallet-card">
                        <div className="balance-wrapper">
                            <div className="input-field" id="balance-select-wrapper">
                                <select onChange={showDiv} id="balance-type">
                                    <option value="1">Collection Balance</option>
                                    <option value="2">Commission Balance</option>
                                </select>
                                <img src={require("../../images/caret-down-red.svg").default} alt="caret" className="inp-caret-icon" />
                            </div>
                            <div id="collection-block">
                                <h4 className="wallet-balance bold-txt">
                                    <small >₦</small>35,000,000.09
                                </h4>

                                <div className="flex-div balance-btns-wrapper">
                                    <button className="balance-btn pry-btn">
                                        Add money <span>&rsaquo;</span>
                                    </button>
                                    <button className="balance-btn sec-btn">
                                        Withdraw <span>&rsaquo;</span>
                                    </button>
                                </div>
                            </div>
                            <div id="commision-block" hidden>
                                <h4 className="wallet-balance bold-txt">
                                    <small >₦</small>10,000.09
                                </h4>

                                <div className="flex-div balance-btns-wrapper">
                                    <button className="balance-btn sec-btn">
                                        Withdraw <span>&rsaquo;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-block payment-reminder-block">
                        <div className="section-block-header-2 flex-div">
                            <span>PAYMENT REMINDER</span>
                            <span>Amount</span>
                        </div>

                        <div className="payment-reminder-table">
                            <div className="payment-reminder-row flex-div">
                                <div>CUS1092</div>
                                <div>Iya Micheal Store</div>
                                <div>₦100,000</div>
                            </div>
                            <div className="payment-reminder-row flex-div">
                                <div>CUS0092</div>
                                <div>Bola Grocery Store</div>
                                <div>₦99,980</div>
                            </div>
                            <div className="payment-reminder-row flex-div">
                                <div>CUS3492</div>
                                <div>Okon and Sons</div>
                                <div>₦500,000</div>
                            </div>
                        </div>

                        <div className="payment-reminder-footer flex-div">
                            <div className="flex-div pr-modal-trigger">
                                <img src={require("../../images/transaction-icon-2.svg").default} alt="icon" />
                                <span>Transactions</span>
                            </div>
                            <div className="flex-div pr-modal-trigger">
                                <img src={require("../../images/customers-icon-2.svg").default} alt="icon" />
                                <span>Customers</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-row-wrapper grid-row-2">
                    <div className="section-block-2 success-rate-wrapper-block">
                        <div className="section-block-header flex-div">
                            <span>Total customers</span>
                            <span>Owing customers</span>
                            <span>Total debt</span>
                        </div>

                        <div className="flex-div justify-content-btw">
                            <h4 className="fig-title">720</h4>
                            <h4 className="fig-title">300</h4>
                            <h4 className="fig-title pry-color">₦20,000,000.00</h4>
                        </div>
                    </div>

                    <div className="section-block-2 bill-payment-wrapper-block">
                        <div className="section-block-header-2 flex-div">
                            <span>Pending payments</span>
                            <span>PAYOUTS</span>
                        </div>

                        <div className="flex-div justify-content-btw">
                            <h4 className="fig-title">10</h4>
                            <h4 className="fig-title pry-color">₦300,000.00</h4>
                        </div>
                    </div>
                </div>

                <div className="section-row-wrapper grid-row-1">
                    <div className="section-block recent-tranx-wrapper">
                        <div className="section-block-header flex-div">
                            <span>RECENT TRANSACTION</span>
                            <NavLink to="/#" className="flex-div view-all-link">
                                <span>VIEW ALL</span>
                            </NavLink>
                        </div>

                        <div className="recent-tranx-table-wrapper">
                            <table className="brief-tranx-table responsive-table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="flex-div">
                                                <img src={require("../../images/received-icon.svg").default} alt="transaction icon" className="tranx-activity-icon" />
                                                <div className="tranx-activity-details">
                                                    <div className="tranx-activity">Payout from Payrail</div>
                                                    <small className="tranx-activity-status">Processed</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span>08148620099</span>
                                        </td>
                                        <td>
                                            <span>Bill Payment </span>
                                        </td>
                                        <td>
                                            <div className="flex-div">
                                                <div className="tranx-activity-details">
                                                    <div className="tranx-activity tranx-amount failed-transaction">- ₦10,000</div>
                                                    <small className="tranx-activity-status">01 Sept, 04:25 AM</small>
                                                </div>
                                                <img src={require("../../images/menu-circle.svg").default} alt="icon" className="table-menu-circle" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex-div">
                                                <img src={require("../../images/received-icon.svg").default} alt="transaction icon" className="tranx-activity-icon" />
                                                <div className="tranx-activity-details">
                                                    <div className="tranx-activity">Olamide sent you Money</div>
                                                    <small className="tranx-activity-status">Received</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span>1078234098</span>
                                        </td>
                                        <td>
                                            <span>Income </span>
                                        </td>
                                        <td>
                                            <div className="flex-div">
                                                <div className="tranx-activity-details">
                                                    <div className="tranx-activity tranx-amount success-transaction">+ ₦10,000</div>
                                                    <small className="tranx-activity-status">28 Aug, 01:50 PM</small>
                                                </div>
                                                <img src={require("../../images/menu-circle.svg").default} alt="icon" className="table-menu-circle" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex-div">
                                                <img src={require("../../images/send-icon.svg").default} alt="transaction icon" className="tranx-activity-icon" />
                                                <div className="tranx-activity-details">
                                                    <div className="tranx-activity">Sent Money to Unilever</div>
                                                    <small className="tranx-activity-status">Processed</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span>18902789012</span>
                                        </td>
                                        <td>
                                            <span>Transfer</span>
                                        </td>
                                        <td>
                                            <div className="flex-div">
                                                <div className="tranx-activity-details">
                                                    <div className="tranx-activity tranx-amount pending-transaction">- ₦10,000</div>
                                                    <small className="tranx-activity-status">20 Aug, 02:30 PM</small>
                                                </div>
                                                <img src={require("../../images/menu-circle.svg").default} alt="icon" className="table-menu-circle" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default DashboardHome;