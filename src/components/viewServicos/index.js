import React, { Component } from 'react'

import './style.css';

import Data from '../auxFiles/work.json';
import Header from './../header/index';
import ItensServico from './../itensServicos/index';
import { Link } from 'react-router-dom';

let works = Data.works;

export default class ViewServicos extends Component {
    render() {
        return (
            <div className="container">
                <Header></Header>
                <div className="content">

                    <div className="rowContent">
                        {
                            works.map((v, i) => {
                                return (
                                    <ItensServico key={i} itenName={v.name} itenImg={"defaultImg.png"}></ItensServico>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
