import React from 'react';
//import { withNamespaces } from 'react-i18next';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import Button from '@material-ui/core/Button';
import './Modal.css';


function UserInfoModal({closeModal, id, userName, userLastName, userImage, userGender, userAge, userBirthdate, userPhone, userCell, userNationality, userCity, userCountry, userUsername, userEmail}) {
    return(

        <div className="modal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                
                <Modal isOpen={true}>
                        <ModalHeader className="modal-header" style={{display: 'block'}}>
                            <Button class="btn-close btn-primary" style={{float: 'right'}} onClick={() => closeModal(false)}/>
                            <h5 className="modal-title">{userName} {userLastName}</h5>
                        </ModalHeader> 
                            <ModalBody className="modal-body">   
                                <div>
                                    <img src= {userImage} alt= {"user img"} style={{"maxWidth": "75px", "margin-top" : "center"}}/>
                                    
                                </div>                       
                                <div className="form-group row">
                                    <div className="col-sm-4">
                                        <label htmlFor="height">Género</label>
                                        <input className="form-control" type="text" name="height" id="height" readOnly value={userGender}/>
                                    </div>
                                    <div className="col-sm-4">
                                        <label htmlFor="type">Edad</label>
                                        <input className="form-control" type="text" name="height" id="height" readOnly value={userAge}/>
                                    </div>
                                    <div className="col-sm-4">
                                        <label htmlFor="type">F de Nac</label>
                                        <input className="form-control" type="text" name="height" id="height" readOnly value={userBirthdate}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-5">
                                        <label htmlFor="height">Teléfono</label>
                                        <input className="form-control" type="text" name="height" id="height" readOnly value={userPhone}/>
                                    </div>
                                    <div className="col-sm-5">
                                        <label htmlFor="type">Celular</label>
                                        <input className="form-control" type="text" name="height" id="height" readOnly value={userCell}/>
                                    </div>
                                    <div className="col-sm-2">
                                        <label htmlFor="type">Nacionalidad</label>
                                        <input className="form-control" type="text" name="height" id="height" readOnly value={userNationality}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6">
                                        <label htmlFor="height">Ciudad</label>
                                        <input className="form-control" type="text" name="height" id="height" readOnly value={userCity}/>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="type">País</label>
                                        <input className="form-control" type="text" name="height" id="height" readOnly value={userCountry}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6">
                                        <label htmlFor="type">Usuario</label>
                                        <input className="form-control" type="text" name="height" id="height" readOnly value={userUsername}/>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="type">Email</label>
                                        <input className="form-control" type="text" name="height" id="height" readOnly value={userEmail}/>
                                    </div>
                                </div>
                            </ModalBody>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => closeModal(false)}>Volver</button>
                            </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
};
        
export default UserInfoModal;