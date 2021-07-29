import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import Button from '@material-ui/core/Button';
import './UserInfoModal.css';


function UserInfoModal({
    closeModal, 
    userName, 
    userLastName, 
    userImage, 
    userGender, 
    userAge,
    userBirthdate, 
    userPhone, 
    userCell, 
    userNationality, 
    userCity, 
    userCountry,
    userUsername, 
    userEmail
    }) 
    {
    return(
        <div className="modal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <Modal isOpen={true} style={{"width": "50rem"}}>
                        <ModalHeader className="modal-header bg-dark" style={{display: 'block'}}>
                            <Button class="btn-close btn-danger" style={{float: 'right'}} onClick={() => closeModal(false)}/>
                            <h5 className="modal-title text-danger">{userName} {userLastName}</h5>
                        </ModalHeader> 
                        <ModalBody className="modal-body">   
                            <div>
                                <img src= {userImage} alt= {"user img"} style={{"maxWidth": "75px", "marginTop" : "center", "marginBottom" : "10px"}}/>
                                
                            </div>                       
                            <div className="form-group row">
                                <div className="col-sm-4">
                                    <label htmlFor="height">Gender</label>
                                    <input className="form-control" type="text" name="height" id="height" readOnly value={userGender}/>
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="type">Age</label>
                                    <input className="form-control" type="text" name="height" id="height" readOnly value={userAge}/>
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="type">Date</label>
                                    <input className="form-control" type="text" name="height" id="height" readOnly value={userBirthdate}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6">
                                    <label htmlFor="height">Phone</label>
                                    <input className="form-control" type="text" name="height" id="height" readOnly value={userPhone}/>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="type">Cell</label>
                                    <input className="form-control" type="text" name="height" id="height" readOnly value={userCell}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-4">
                                    <label htmlFor="height">City</label>
                                    <input className="form-control" type="text" name="height" id="height" readOnly value={userCity}/>
                                </div>
                                <div className="col-sm-5">
                                    <label htmlFor="type">Country</label>
                                    <input className="form-control" type="text" name="height" id="height" readOnly value={userCountry}/>
                                </div>
                                <div className="col-sm-3">
                                    <label htmlFor="type">Nat</label>
                                    <input className="form-control" type="text" name="height" id="height" readOnly value={userNationality}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-12">
                                    <label htmlFor="type">Username</label>
                                    <input className="form-control" type="text" name="height" id="height" readOnly value={userUsername}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-12">
                                    <label htmlFor="type">Email</label>
                                    <input className="form-control" type="text" name="height" id="height" readOnly value={userEmail}/>
                                </div>
                            </div>
                        </ModalBody>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={() => closeModal(false)}>Go Back</button>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
};
        
export default UserInfoModal;