import { useEffect } from "react";
import $ from "jquery";
import M from "materialize-css"

import LocationSearchBox from "../../components/LocationSearchBox";

const PendingTask = () => {
    useEffect(()=> {
        $("#user-pix-filepath").change(function(){
            var uploadedImageSrc1 = window.URL.createObjectURL(this.files[0]);
            $("#personal-details .upload-logo").hide();
            $("#personal-details .uploaded-img-div").show();
            $("#uploaded-img").attr("src", uploadedImageSrc1);
        });

        var elemSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemSelect);

        var elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);

        // var location_inp = $("#locations-inp").val()
        $("#locations-inp").change(function(){
            $("#residential_address").val($(this).val())
        })
        
    },[])


    return (
        <div className="page-content-wrapper">
            <div className="container">
                <div className="page-header-wrapper">
                    <div className="left-align">
                        <h2 className="page-title">Complete your KYC</h2>
                        <span>
                            Olamide, it’s important you update your profile to increase your transaction and loan purpose
                        </span>
                    </div>
                </div>

                <div className="pending-tasks-wrapper">
                    <div className="kyc-form-wrapper">
                        <form action="/dashboard/kyc-successful" id="kyc-form" className="dashboard-form">
                            <div className="row">
                                <fieldset id="personal-details">
                                    <div className="flex-div form-header justify-content-btw">
                                        <div className="flex-div change-avatar-wrapper">
                                            <div className="file-field input-field">
                                                <div className="btn">
                                                    <div className="upload-logo">
                                                        <img src={require("../../images/default-pix.svg").default} alt="default" />
                                                    </div>
                                                    <div className="uploaded-img-div">
                                                        <img src="" alt="user-img" id="uploaded-img" />
                                                    </div>
                                                    <input type="file" id="user-pix-filepath" accept="image/x-png,image/gif,image/jpeg" />
                                                </div>
                                            </div>
                                            <div className="username-wrapper">
                                                <h4 className="username">Olamide Olagunju</h4>
                                                <span>Agent ID: 091092</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-field single-field">
                                        <input id="residential_address" type="text" defaultValue="4 Murtala Mohameed Ojodu Berger" readOnly className="form-inp-field modal-trigger" data-target="location-search-box" />
                                        <label htmlFor="residential_address" className="active">Residential Address</label>
                                        <img src={require("../../images/location-icon.svg").default} alt="location icon" className="location-inp-icon" />
                                    </div>
                                    <div className="select-field input-field single-field">
                                        <select id="nationality">
                                            <option value="" disabled selected>Please Specify</option>
                                            <option value="Nigeria">Nigeria</option>
                                            <option value="Ghana">Ghana</option>
                                            <option value="Togo">Togo</option>
                                        </select>
                                        <label htmlFor="nationality" className="active">Nationality</label>
                                        <img src={require("../../images/caret-1.svg").default} alt="caret" className="inp-caret-icon" />
                                    </div>
                                    <div className="input-field multiple-fields">
                                        <div className="rel">
                                            <select id="id-type">
                                                <option value="" disabled selected>Choose form of ID</option>
                                                <option value="Driver's License">Driver's License</option>
                                                <option value="International Passport">International Passport</option>
                                                <option value="Voter's Card">Voter's Card</option>
                                                <option value="NIN">NIN</option>
                                            </select>
                                            <img src={require("../../images/caret-1.svg").default} alt="caret" className="inp-caret-icon" />
                                        </div>
                                        <div className="rel">
                                            <input id="id-number" type="text" placeholder="ID Number" className="sub-inp-field" />
                                        </div>
                                        <div className="file-field rel">
                                             <input type="file" />
                                            <div className="btn choose-file-btn">
                                                <span>Choose file</span>
                                            </div>
                                            <div className="file-path-wrapper">
                                                <input className="file-path sub-inp-field last-inp-field" placeholder="Upload ID" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-field multiple-fields">
                                        <div className="rel">
                                            <select id="id-type">
                                                <option value="" disabled selected>Choose proof of address</option>
                                                <option value="Driver's License">Driver's License</option>
                                                <option value="International Passport">International Passport</option>
                                                <option value="Voter's Card">Voter's Card</option>
                                                <option value="NIN">NIN</option>
                                            </select>
                                            <img src={require("../../images/caret-1.svg").default} alt="caret" className="inp-caret-icon" />
                                        </div>  
                                        <div className="file-field rel">
                                             <input type="file" />
                                            <div className="btn choose-file-btn">
                                                <span>Choose file</span>
                                            </div>
                                            <div className="file-path-wrapper">
                                                <input className="file-path sub-inp-field last-inp-field" placeholder="Upload Proof of Address" type="text" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="submit-btn-wrapper flex-div">
                                        <button type="submit" className="submit-btn pry-btn">Save</button>
                                    </div>
                                </fieldset>
                            </div>
                        </form>

                        <LocationSearchBox />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PendingTask;