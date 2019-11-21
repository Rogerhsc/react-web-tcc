import React, { Component } from 'react'
import { findWorks } from '../requests/request'
import {  } from "@material-ui/icons";
import './style.css'
import Header from './../header/index';
import ButtonGraph from '../buttonGraph';
import Graph from '../graph';

export default class Analitics extends Component {

  constructor(props) {
    super(props);

    this.state = {
      total: "",
      typeCount: [],
      valueForMonth: [],
      servicesCanceled: [],
      servicesSuccessful: [],
      servicesInProgress: []
    }
  }

  componentDidMount() {
    const userId = parseInt(this.props.match.params.userId)
    findWorks().then(res => {
      console.log(res)
      const filterArray = res.data.filter(v => {
        return v.worker_id === userId && (v.status === "F")
      })
      
      console.log(filterArray)
      debugger;
      this.setState({
        total: filterArray.map(v => {
          return v.service.price
        }),
        typeCount: this.compressArray(filterArray.map( v => {
          return v.service.type
        })),
        servicesCanceled: res.data.filter(v => {
          return v.worker_id === userId && (v.status === "C")
        }),
        servicesSuccessful: res.data.filter(v => {
          return v.worker_id === userId && (v.status === "F")
        }),
        servicesInProgress: res.data.filter(v => {
          return v.worker_id === userId && (v.status === "A")
        }),
      })
    });
  }

  formatDate(date) {
      
      if(date !== undefined && date !== null){
        var dataOne = date.split("T")[0];
        var dataTwo = dataOne.split("-");

        var object = {
          year: dataTwo[0],
          month: dataTwo[1],
          day: dataTwo[2]
        }
        return object
      }
      return null;
  }

  nowDate() {
    const data = new Date();

    const month = data.getMonth() + 1
    const year = month > 12 ? data.getFullYear() + 1 : data.getFullYear()

    var object = {
      year,
      month: month > 12 ? 1 : month,
      day: data.getDate()
    }

    return object
  }

  compressArray(original) {

    var compressed = [];
    // make a copy of the input array
    var copy = original.slice(0);

    // first loop goes over every element
    for (var i = 0; i < original.length; i++) {

      var myCount = 0;
      // loop over every element in the copy and see if it's the same
      for (var w = 0; w < copy.length; w++) {
        if (original[i] == copy[w]) {
          // increase amount of times duplicate is found
          myCount++;
          // sets item to undefined
          delete copy[w];
        }
      }

      if (myCount > 0) {
        var a = new Object();
        a.value = original[i];
        a.count = myCount;
        compressed.push(a);
      }
    }

    return compressed;
  };

  render() {
    const { total, typeCount, servicesCanceled, servicesInProgress, servicesSuccessful} = this.state
    return (
      <div className="container">
        <Header userId={`${this.props.match.params.userId}`} route={`${this.props.match.params.userId}/analitcs`}></Header>
        <div className="contentTituloAnalitics">
          <div className="title">
            <b>Analitics</b>
          </div>
          <div className="subTitle">
            <a>Você no controle da sua vida!!</a>
          </div>
        </div>
        <div className="contentComponents">
          <div className="total-recebimentos">
            <h2>Receita Atual</h2>
            <span>R$ {

              total.length > 0
                ?
                total.reduce((v, i) => {
                  return parseFloat(v) + parseFloat(i)
                })
                :
                "0.00"
            }
            </span>
          </div>
          <div className="buttonGrapsContent">
            <div className="buttonGraps">
              <Graph></Graph>
            </div>
          </div>
          <div className="txtLabel">
            Sobre seu serviço
          </div>
          <div className="another-informations">
            &#128517; servicos cancelados: { servicesCanceled.length }
            <br />&#128513; servicos finalizados: { servicesSuccessful.length }
            <br />&#128528; servicos em andamento: { servicesInProgress.length }
          </div>

          <div className="txtLabel">
            Recebimentos Mensais
          </div>
          <div className="buttonGrapsContent">
            <div className="dataBox">
              {
                
              }
            </div>
          </div>

          <div className="txtLabel">
            Serviços Prestados
          </div>

          <div className="buttonGrapsContent">
            <div className="dataBox">
              {
                typeCount.map( (v,i) => {
                  return(
                    <ButtonGraph label={v.value} val={v.count} />
                  )
                })
              }
            </div>
          </div>
        </div>
        <footer></footer>
      </div>

    )
  }
}
