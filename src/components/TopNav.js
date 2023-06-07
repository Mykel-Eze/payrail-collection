import "../css/top-nav.css";

import { NavLink } from "react-router-dom";
import M from "materialize-css";
import { useEffect } from "react";
import MakeCollections from "./modals/MakeCollections";
import CustomerDetails from "./modals/CustomerDetails";
// import $ from "jquery";

const TopNav = () => {
    useEffect(()=> {
        var elemsDropdown = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elemsDropdown, {
            coverTrigger: false,
            hover: true,
            constrainWidth: false
        });
        var elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);
    }, []);

    return(
        <nav className="top-nav">
            <div className="flex-div align-content-center justify-content-btw">
                <div id="search-form">
                    <div className="rel search-block flex-div">
                        <img src={require("../images/search.svg").default} alt="icon" className="search-btn-img" />
                        <input id="search" type="search" className="search-input" placeholder="Search Customer, payout, transactions" />
                    </div>
                </div>

                <div className="user-session-wrapper flex-div">
                    <NavLink to="/dashboard/settings" className="topnav-btn hover-scale">
                        <img src={require("../images/settings.svg").default} alt="icon" className="topnav-btn-img tbi-default*" />
                    </NavLink>
                    <NavLink to="/#" className="topnav-btn hover-scale">
                        <img src={require("../images/notification.svg").default} alt="icon" className="topnav-btn-img" />
                    </NavLink>
                    <div className="create-account-wrapper">
                        {/* <a href="#make-collections-modal" className="create-account-btn pry-bg modal-trigger">
                            <span>MAKE COLLECTION</span>
                        </a> */}
                        <a href="#make-collections-modal" className="create-account-btn pry-bg modal-trigger">
                            <span>MAKE COLLECTION</span>
                        </a>
                    </div>
                </div>
            </div>

            <MakeCollections />
            <CustomerDetails />
        </nav>
    );
}

export default TopNav;