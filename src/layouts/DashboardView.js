import '../css/styles.css';
import '../css/fonts.css';
import '../css/dashboard.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-design-icons/iconfont/material-icons.css';

import '../css/dashboard.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import $ from 'jquery';

import SideBar from '../components/SideBar';
import TopNav from '../components/TopNav';

import DashboardHome from '../dashboard-pages/home/Index';
import GettingStarted from '../dashboard-pages/home/GettingStarted';
import PendingTasks from '../dashboard-pages/home/PendingTasks';
import KycSuccessful from '../dashboard-pages/home/KycSuccessful';
import Wallet from '../dashboard-pages/Wallet';
import Customers from '../dashboard-pages/Customers';
import Transactions from '../dashboard-pages/Transactions';
import TransactionsEmpty from '../dashboard-pages/TransactionsEmpty';

function DashboardView() {

    $(window).scroll(function () {
        $('.auth-nav-header').toggleClass('scrolled-nav', $(this).scrollTop() > 50);
    });
    

    return (
        <Router>
        <div className="App">
            {/*---==== Contents Sections  ====---*/}
                {/* <Switch>
                    <Route exact path="/">
                        <AuthView />
                    </Route>
                    <Route exact path="/dashboard">
                        <DashboardView />
                    </Route>
                </Switch> */}
            {/*---==== end of Contents Sections  ====---*/}

            <div id="body-wrapper" className='dashboard-page'>
                {/* <!--=== SideBar Section ===--> */}
                <SideBar/>
                {/* <!--=== end of SideBar Section ===--> */}

                {/* <!--=== Main Content ===--> */}
                <section id="content-body">
                    {/* <!--=== Top-Nav Section ===--> */}
                    <TopNav />
                    {/* <!--=== end of Top-Nav Section ===--> */}

                    <div className="page-content-block-wrapper">
                        <Switch>
                            {/*---==== Contents Sections  ====---*/}
                            <Route exact path="/dashboard">
                                <Redirect to="/dashboard/home" />
                            </Route>
                            <Route path="/dashboard/home">
                                <DashboardHome />
                            </Route>
                            <Route path="/dashboard/getting-started">
                                <GettingStarted />
                            </Route>
                            <Route path="/dashboard/pending-tasks">
                                <PendingTasks />
                            </Route>
                            <Route path="/dashboard/kyc-successful">
                                <KycSuccessful />
                            </Route>
                            <Route path="/dashboard/wallet">
                                <Wallet />
                            </Route>
                            <Route path="/dashboard/customers">
                                <Customers />
                            </Route>
                            <Route path="/dashboard/transactions">
                                <Transactions />
                            </Route>
                            <Route path="/dashboard/transactions-empty">
                                <TransactionsEmpty />
                            </Route>
                            {/*---==== end of Contents Sections  ====---*/}
                        </Switch>
                    </div>
                </section>
                {/* <!--=== end of Main Content ===--> */}
            </div>
        </div>
        </Router>
    );
}

export default DashboardView;
