import logo from '../images/payrail-logo.svg';

import 'materialize-css/dist/css/materialize.min.css';
import 'material-design-icons/iconfont/material-icons.css';

import M from 'materialize-css';

import { NavLink } from "react-router-dom";

// https://github.com/ambassify/react-avatar
import Avatar from 'react-avatar';

const SideBar = () => {

    document.addEventListener('DOMContentLoaded', function() {
        var elemsCollapsible = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elemsCollapsible);

        var elemsDropdown = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elemsDropdown, {
            constrainWidth: true,
            coverTrigger: false,
            hover: true
        });
    });

    return (
        <section id="side-bar">
            <div className="container">
                <div className='user-block-wrapper'>
                    <div className="dropdown-trigger flex-div" data-target="user-dropdown">
                        <div className="user-details flex-div">
                            <Avatar name="Olamide Olagunju" className="no-user-avatar" color={['white']} fgColor={['#353D46']} />
                        </div>
                        <div className="user-name-details">
                            <div className="user-name-txt bold-txt truncate">Olamide Olagunju</div>
                            <div className="user-role">Agent</div>
                        </div>
                        <div className="caret-div">
                            <img src={require("../images/caret-down-red.svg").default} alt="caret" className="topnav-caret" />
                        </div>
                    </div>
                    <ul id='user-dropdown' className='dropdown-content'>
                        <li>
                            <NavLink to="#!">Go to profile</NavLink>
                        </li>
                        <li className="divider" tabIndex="-1"></li>
                        <li>
                            <NavLink to="#!">Log out</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="nav-list-wrapper">
                    <div className="nav-list-1">
                        <ul className="collapsible">
                            <li className="link-wrapper">
                                <div className="collapsible-header pg-link">
                                    <div className="flex-div">
                                        <img src={require("../images/home-icon.svg").default} alt="icon" className="link-img" />
                                        <span className="link-txt">Home</span>
                                    </div>
                                    <img src={require("../images/caret-down.svg").default} alt="caret" className="caret-icon" />
                                </div>
                                <div className="collapsible-body">
                                    <ul>
                                        <li className="pg-sub-link">
                                            <NavLink exact to="/dashboard/getting-started">
                                                Get Started
                                                <img src={require("../images/curvy.svg").default} alt="curved-path" className="curved-path" />
                                            </NavLink>
                                        </li>
                                        <li className="pg-sub-link">
                                            <NavLink exact to="/dashboard/home">
                                                Overview
                                                <img src={require("../images/curvy.svg").default} alt="curved-path" className="curved-path" />
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="link-wrapper">
                                <NavLink to="/dashboard/wallet" className="pg-link">
                                    <div className="flex-div">
                                        <img src={require("../images/wallet-icon.svg").default} alt="icon" className="link-img" />
                                        <span className="link-txt">Wallet</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="link-wrapper">
                                <NavLink to="/customers" className="pg-link">
                                    <div className="flex-div">
                                        <img src={require("../images/customers-icon.svg").default} alt="icon" className="link-img" />
                                        <span className="link-txt">Customers</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="link-wrapper">
                                <NavLink to="/transactions" className="pg-link">
                                    <div className="flex-div">
                                        <img src={require("../images/tranx-icon.svg").default} alt="icon" className="link-img" />
                                        <span className="link-txt">Transactions</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="link-wrapper">
                                <NavLink to="/payout" className="pg-link">
                                    <div className="flex-div">
                                        <img src={require("../images/payout-icon.svg").default} alt="icon" className="link-img" />
                                        <span className="link-txt">Payout</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="link-wrapper">
                                <NavLink to="/#" className="pg-link">
                                    <div className="flex-div">
                                        <img src={require("../images/support-icon.svg").default} alt="icon" className="link-img" />
                                        <span className="link-txt">Support</span>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="brand-logo">
                    <NavLink to="/dashboard">
                        <img src={logo} alt="Payrail" className="brand-img" />
                    </NavLink>
                    <div className="sidebar-footer">
                        © Angala Financial Technologies Limited.
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SideBar;