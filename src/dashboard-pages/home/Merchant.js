import { NavLink } from "react-router-dom";
import { useEffect } from "react";
// import $ from 'jquery'
import M from 'materialize-css';

import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts'

import '../../css/modals.css';
import '../../css/merchantDashboard.css';


const MerchantHome = () => {
    useEffect(()=> {
        var elemSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemSelect, {
            coverTrigger: false
        });
    }, []);

    const AreaChartOption = {
        color: ['#89163B', '#353D46'],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Total Inflow', 'Total Outflow'],
          show: false
        },
        grid: {
          left: '-3%',
          right: '2%',
          top: '0',
          bottom: '0',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value',
            show: false
          }
        ],
        series: [
          {
            name: 'Cash Inflow',
            type: 'line',
            // stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 1
            },
            showSymbol: true,
            areaStyle: {
              opacity: 0.7,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(255, 225, 235, 0.5)'
                },
                {
                  offset: 1,
                  color: 'rgba(255, 225, 235, 0.1)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [140, 202, 151, 204, 190, 200, 215]
          },
          {
            name: 'Product Outflow',
            type: 'line',
            // stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 1
            },
            showSymbol: true,
            areaStyle: {
              opacity: 0.7,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(249, 249, 249, 0.5)'
                },
                {
                  offset: 1,
                  color: 'rgba(249, 249, 249, 0.1)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [80, 92, 85, 70, 60, 100, 130]
          },
        ]
    };

    // const balanceType = document.querySelector("#balance-type");
    // function showDiv(){
    //     if(balanceType.value === 1){
    //      document.getElementById('collection-block').style.display = "block";
    //      document.getElementById('commision-block').style.display = "none";
    //     } else{
    //      document.getElementById('collection-block').style.display = "none";
    //      document.getElementById('commision-block').style.display = "block";
    //     }
    //  } 
    
    return ( 
        <div className="page-content-wrapper">
            <div className="container">
                <div className="section-row-wrapper grid-row-2 ">
                    <div className="wallet-card">
                        <div className="balance-wrapper merchant-balance-wrapper">
                            <div className="input-field" id="balance-select-wrapper">
                                Wallet Balance
                            </div>
                            <div id="collection-block">
                                <h4 className="wallet-balance bold-txt">
                                    <small >₦</small>35,000,000.09
                                </h4>

                                <div className="flex-div balance-btns-wrapper">
                                    <button className="balance-btn pry-btn">
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

                    <div className="section-block expense-overivew-block">
                        <div className="expense-block-header section-block-header-2 flex-div">
                            <div className="expense-div flex-div">
                                <span className="disc pry-bg"></span>
                                <span className="eid-txt">Cash Inflow</span>
                                <b className="eid-amount">₦10,000,000.00</b>
                            </div>
                            <div className="income-div flex-div">
                                <span className="disc sec-bg"></span>
                                <span className="eid-txt">Product Outflow</span>
                                <b className="eid-amount">₦120,000,000.00</b>
                            </div>
                            <div className="flex-div daterange-filter">
                                <span className="daterange-filter-dates">1 April 22 - 30 Oct 22</span>
                                <img src={require("../../images/calendar.svg").default} alt="calendar" className="daterange-icon" />
                            </div>
                        </div>

                        <div id="total-chart-wrapper" className="chart-wrapper">
                            <ReactECharts height="150" width="100%" option={AreaChartOption} />
                        </div>
                    </div>
                </div>

                <div className="section-row-wrapper grid-row-2 grid-row-2b">
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
                            <span>PRODUCTS INVENTORY (Carton)</span>
                        </div>
                        <div className="flex-div inventory-item-wrapper">
                            <div className="inventory-item">
                                <h4 className="fig-title">24</h4>
                                <span className="fig-txt">Knoor</span>
                            </div>
                            <div className="inventory-item">
                                <h4 className="fig-title">23</h4>
                                <span className="fig-txt">Closeup</span>
                            </div>
                            <div className="inventory-item">
                                <h4 className="fig-title">10</h4>
                                <span className="fig-txt">Sunlight</span>
                            </div>
                            <div className="inventory-item">
                                <h4 className="fig-title">30</h4>
                                <span className="fig-txt">Lipton</span>
                            </div>
                            <div className="inventory-item">
                                <h4 className="fig-title">60</h4>
                                <span className="fig-txt">Nescafe</span>
                            </div>
                            <div className="inventory-item">
                                <h4 className="fig-title">30</h4>
                                <span className="fig-txt">Lipton</span>
                            </div>
                            <div className="inventory-item">
                                <h4 className="fig-title">60</h4>
                                <span className="fig-txt">Nescafe</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-row-wrapper grid-row-1">
                    <div className="section-block recent-tranx-wrapper">
                        <div className="section-block-header flex-div">
                            <span>RECENT TRANSACTION</span>
                            <NavLink to="/#" className="flex-div view-all-link">
                                <span>VIEW ALL &rsaquo;</span>
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
                                                    <div className="tranx-activity">Collection from Tosin</div>
                                                    <small className="tranx-activity-status">Received</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span>08148620099</span>
                                        </td>
                                        <td>
                                            <span>Collection</span>
                                        </td>
                                        <td>
                                            <span>Commission</span>
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
                                                    <div className="tranx-activity">Collection from Emeka</div>
                                                    <small className="tranx-activity-status">Received</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span>1078234098</span>
                                        </td>
                                        <td>
                                            <span>Collection </span>
                                        </td>
                                        <td>
                                            <span>Deposit </span>
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
                                            <span>Withdrawal</span>
                                        </td>
                                        <td>
                                            <span>CUS1209</span>
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
 
export default MerchantHome;