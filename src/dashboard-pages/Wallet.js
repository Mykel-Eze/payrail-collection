import { NavLink } from "react-router-dom";
import { useEffect } from "react";
// import $ from 'jquery'
import M from 'materialize-css';

import '../css/modals.css';
import '../css/wallet.css'

const Wallet = () => {
    useEffect(()=> {
        var elemSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemSelect, {
            coverTrigger: false
        });
    }, []);

    const CopyToClipboard = (selectedId) => {
        /* Get the text field */
        var copyText = document.getElementById(selectedId);
    
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
    
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
        
        /* Alert the copied text */
        M.toast({html: 'Account number copied'})
    }
    
    return ( 
        <div id="wallet-page" className="page-content-wrapper">
            <div className="container">
                <div className="section-row-wrapper grid-row-2">
                    <div className="wallet-card">
                        <div className="balance-wrapper">
                            <h4 className="section-title">Agent Wallet</h4>
                            <div className="input-field" id="balance-select-wrapper">
                                <span>Total Balance</span>
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
                            <span>Bank Details</span>
                            <span className="flex-div copy-wrapper pointer" onClick={()=> CopyToClipboard("acct-number")}>
                                <img src={require("../images/copy-icon.svg").default} alt="copy" className="copy-icon" />
                                <span>Copy</span>
                            </span>
                        </div>

                        <div className="payment-reminder-table">
                            <div className="payment-reminder-row flex-div">
                                <div>Bank name:</div>
                                <div>Angala MFB</div>
                            </div>
                            <div className="payment-reminder-row flex-div">
                                <div>Account name:</div>
                                <div>Bola Grocery Store</div>
                            </div>
                            <div className="payment-reminder-row flex-div">
                                <div>Account number:</div>
                                <div>1812788912</div>
                                <input type="text" id="acct-number" defaultValue="1812788912" hidden />
                            </div>
                        </div>

                        <div className="payment-reminder-footer flex-div">
                            <div className="flex-div pr-modal-trigger">
                                <img src={require("../images/statement.svg").default} alt="icon" />
                                <span>Statement</span>
                            </div>
                            <div className="flex-div pr-modal-trigger">
                                <img src={require("../images/settings-2.svg").default} alt="icon" />
                                <span>Settings</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-row-wrapper grid-row-2">
                    <div className="section-block-2 success-rate-wrapper-block">
                        <div className="flex-div justify-content-btw">
                            <div className="srwb-item">
                                <div className="section-block-header">COMPLETED</div>
                                <div className="srwb-item-cont">
                                    <h4 className="fig-title">720</h4>
                                </div>
                            </div>
                            <div className="srwb-item">
                                <div className="section-block-header">PENDING PAYOUT</div>
                                <div className="srwb-item-cont">
                                    <h4 className="fig-title"><small className="currency">₦</small>20,000.00</h4>
                                </div>
                            </div>
                            <div className="srwb-item right-align">
                                <div className="section-block-header">PAID OUT</div>
                                <div className="srwb-item-cont">
                                    <h4 className="fig-title pry-color"><small className="currency">₦</small>2,000,000.00</h4>
                                </div>
                            </div>
                        </div>

                        <div className="flex-div justify-content-btw">                            
                        </div>
                    </div>

                    <div className="section-block-2 bill-payment-wrapper-block">
                        <div className="section-block-header-2 flex-div">
                            <span>PAYMENT REMINDER</span>
                            <span>TOTAL AMOUNT</span>
                        </div>

                        <div className="flex-div justify-content-btw bpwb-block">
                            <h4 className="fig-title">20 <br /> <small className="fig-small">Customers</small></h4>
                            <h4 className="fig-title"><small className="currency">₦</small>699,980.00</h4>
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
                                                <img src={require("../images/received-icon.svg").default} alt="transaction icon" className="tranx-activity-icon" />
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
                                            <span>Payout</span>
                                        </td>
                                        <td>
                                            <span>Commission </span>
                                        </td>
                                        <td>
                                            <div className="flex-div">
                                                <div className="tranx-activity-details">
                                                    <div className="tranx-activity tranx-amount">- ₦10,000</div>
                                                    <small className="tranx-activity-status">01 Sept, 04:25 AM</small>
                                                </div>
                                                <img src={require("../images/menu-circle.svg").default} alt="icon" className="table-menu-circle" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex-div">
                                                <img src={require("../images/received-icon.svg").default} alt="transaction icon" className="tranx-activity-icon" />
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
                                            <span>Deposit </span>
                                        </td>
                                        <td>
                                            <span>Wallet Funding </span>
                                        </td>
                                        <td>
                                            <div className="flex-div">
                                                <div className="tranx-activity-details">
                                                    <div className="tranx-activity tranx-amount">+ ₦10,000</div>
                                                    <small className="tranx-activity-status">28 Aug, 01:50 PM</small>
                                                </div>
                                                <img src={require("../images/menu-circle.svg").default} alt="icon" className="table-menu-circle" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex-div">
                                                <img src={require("../images/send-icon.svg").default} alt="transaction icon" className="tranx-activity-icon" />
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
                                            <span>Collection</span>
                                        </td>
                                        <td>
                                            <span>CUS1209</span>
                                        </td>
                                        <td>
                                            <div className="flex-div">
                                                <div className="tranx-activity-details">
                                                    <div className="tranx-activity tranx-amount">- ₦10,000</div>
                                                    <small className="tranx-activity-status">20 Aug, 02:30 PM</small>
                                                </div>
                                                <img src={require("../images/menu-circle.svg").default} alt="icon" className="table-menu-circle" />
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
 
export default Wallet;