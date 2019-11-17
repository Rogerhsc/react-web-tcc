import React, { Component } from "react";
import "./style.css";
import ReturnHeader from "./../returnHeader/index";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import { GroupAdd, AttachMoney, HowToReg } from "@material-ui/icons";
import { findServicesById } from '../requests/request'

export default class PerfilAnuncio extends Component {

  constructor(props) {
    super(props) 
    this.state = {
      image: "",
      name: "",
      idade: "",
      description: "",
      price_type: "",
      price: "",
      works_done: [],
    }
  }

  componentDidMount() {
    findServicesById(parseInt(this.props.match.params.perfil)).then( data => {
      this.setState({
        image: data.user.file[0].path,
        name: data.user.name,
        idade: this.calcAge(data.user.birth_date),
        description: data.description,
        price_type: data.price_type,
        price: data.price,
        works_done: data.user.userworker,
      })
    });
  }

  calcAge(birthDate) {
    var data = birthDate.split("T")[0];

    var dd = data.split("-")[2];
    var mm = data.split("-")[1];
    var yyyy = data.split("-")[0];

    var dataInDate = new Date(`${yyyy},${mm},${dd}`);
    var timeDate = new Date() - dataInDate.getTime();
    var newDate = new Date(timeDate);

    return Math.abs(newDate.getUTCFullYear() - 1970);
  }

  render() {
    const params = this.props.match.params;
    const { description, name, image, idade, price, price_type, works_done } =  this.state;

    return (
      <div className="containerMenu">
        <ReturnHeader
          lastRoute={`/${params.userId}/servicos/${params.categoria}`}
        ></ReturnHeader>
        <div className="perfilAvaliacao">
          <div className="perfilStars">
            <Typography component="legend">Avaliação</Typography>
            <Rating value={5} readOnly></Rating>
          </div>
          <div className="perfilQtdServicos">
            <Typography component="legend">Serviços Realizados</Typography>
            <div className="txtQtdServicos">
              <GroupAdd></GroupAdd>
              <b>55</b>
            </div>
          </div>
        </div>

        <div className="perfilImage">
          <img src={image}></img>
        </div>
        <div className="perfilAnuncioTxtNome">
          <p>
            <b>
              {name}
              <br />
              {idade} Anos
            </b>
          </p>
        </div>

        <div className="perfilAnuncioDesc">
          {description}
        </div>

        <div className="perfilAnuncioTxtNome">
          <p>
            <b>Serviços Realizados</b>
          </p>
        </div>

        <div className="perfilAnuncioRealizado">
            {
              works_done.map((v, i) => {  
                return(
                  <Link key={i} to={`${params.perfil}/${v.id}`}>
                    <img src={require("../../image/defaultImg.png")} />
                  </Link>
                )
              })
            }
        </div>
        <div className="perfilAvaliacao">
          <div className="txtTipoServico">
            <b>Tipo Servico</b>
            {price_type}
          </div>

          <div className="txtValorServico">
            <AttachMoney fontSize="large"></AttachMoney>
            <b>{price}</b>
          </div>
        </div>
        
        <form>
          <div className="buttonsGroup-one">
            <div className="customButtom-two">
              <Link to={`/${params.userId}/${params.perfil}/chat`}>
                <b>Contratar</b>
                <HowToReg fontSize="large"></HowToReg>
              </Link>
            </div>
          </div>
        </form>
        <footer></footer>
      </div>
    );
  }
}
