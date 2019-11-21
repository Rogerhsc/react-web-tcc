import React, { Component } from 'react'
import { Close } from "@material-ui/icons/";
import './style.css'
import { SupervisorAccountTwoTone } from '@material-ui/icons';
class Modal extends React.Component {
    

    constructor(props){
        super(props)
        this.state = {
            realeaseButton : true,
            dateExist : false,
            dateValue: "",
        }
    }

    render() {

        const className = this.props.showModal ? "modal-container modal--start" : "modal-container modal--end"

        const { showModal, onClose, data, onClickDel, showDate, status, finishPend, finishSolic } = this.props;      
    
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
                                <h3>O que fazer com este serviços ? </h3>
                                {
                                    showDate
                                    ?
                                        <input type="date" value={data} onChange={ e => this.setState({ realeaseButton: false, dateValue: e.target.value })} />
                                    :
                                        null
                                }
                                <div className="button-beside">
                                    {
                                        !showDate
                                        ?
                                            <button id="cancel-button" onClick={ () => finishSolic({ status: "F" })} disabled={this.state.cancelOff} value="Cancelar">Cancelar</button>
                                        :
                                            <button id="cancel-button" onClick={ () => finishSolic({ status: "F" })} disabled={this.state.cancelOff} value="Cancelar">Cancelar</button>
                                    }
                                    
                                    {
                                        !showDate
                                        ?
                                            status === "A"
                                            ?
                                                <button id="done-button" onClick={ () => finishSolic({ status: "F" })} disabled={false} >Finalizar</button>
                                            :
                                                <button id="done-button" disabled={true} >Finalizar</button>
                                        :
                                            <button id="done-button" onClick={ () => finishPend({ start_service: this.state.dateValue })} disabled={this.state.realeaseButton} >Definir</button>
                                    }
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