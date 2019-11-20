import React, { Component } from 'react'
import { Close } from "@material-ui/icons/";
import './style.css'
import { SupervisorAccountTwoTone } from '@material-ui/icons';
class Modal extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            realeaseButton : true,
            dateExist : false
        }
    }

    render() {

        const className = this.props.showModal ? "modal-container modal--start" : "modal-container modal--end"

        const { showModal, onClose, data, dateExist } = this.props;        
        return (
            <React.Fragment>
                {
                    showModal
                        ?
                        <div className={className}>
                            <div className="content-modal">
                                <div className="close-icon" onClick={() => onClose(false)}>
                                    <Close />
                                </div>
                                <h3>O que ser fazer com este serviços ? </h3>
                                <input type="date" value={data} disabled={dateExist} onChange={ e => this.setState({ realeaseButton: false })} />
                                <div className="button-beside">
                                    <button id="cancel-button" onClick={ () => onClose(false)} value="Cancelar">Cancelar</button>
    
                                    <button id="done-button" onClick={ () => onClose(false)} disabled={this.state.realeaseButton} >{dateExist ? "Finalizar" : "Definir"}</button>
                                </div>
                            </div>
                        </div>
                        :
                        null
                }
            </React.Fragment>
        )
    }
}

export default Modal;