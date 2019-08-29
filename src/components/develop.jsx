import React from "react";
import "../App.css";
import "antd/dist/antd.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button, Modal } from "antd";

class Developer extends React.Component {
  state = { pokemons: null, details: null, openModal: false };

  componentWillMount() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
        return response.json();
      })
      .then(empleados => {
        this.setState({ pokemons: empleados.results });
      });
  }

  render() {
    console.log(this.state.details);

    const handleOnDragStart = e => e.preventDefault();
    const responsive = {
      0: {
        items: 2
      },
      1024: {
        items: 3
      }
    };
    return (
      <div>
        <div className="caruselContent">
          <AliceCarousel responsive={responsive} mouseDragEnabled>
            {this.state.pokemons
              ? this.state.pokemons.map((item, index) => {
                  console.log(item);

                  return (
                    <div
                      onDragStart={handleOnDragStart}
                      className="card-develop"
                    >
                      <p className="developSection"> {item.name}</p>
                      <div className="content-card">
                        <br />
                        <br />
                        <br />
                        <div className="img-content">
                          <div className="title">
                            <h1> {item.name} </h1>
                          </div>
                        </div>
                        <Button
                          onClick={() => {
                            fetch(item.url)
                              .then(response => {
                                return response.json();
                              })
                              .then(empleados => {
                                this.setState({
                                  details: empleados,
                                  openModal: true
                                });
                                
                                
                              });
                          }}
                        >
                          Detalle
                        </Button>
                      </div>
                    </div>
                  );
                })
              : null}
          </AliceCarousel>
        </div>
        <Modal
          title={this.state.details ? this.state.details.name : ""}
          centered
          visible={this.state.openModal}
          onOk={() => this.setState({ openModal: false })}
          onCancel={() => this.setState({ openModal: false })}
        >
          {this.state.details ? (
            <div> 
              <p>Tipos: {this.state.details.types[0].type.name}   { this.state.details.types[1] ? this.state.details.types[1].type.name : null}</p>
              <p>Peso: {this.state.details.weight}</p>
              <p>Altura: {this.state.details.height} </p>
              <p>Numero en la pokedex: {this.state.details.order}</p>
            </div>
          ) : null}
        </Modal>
      </div>
    );
  }
}

export default Developer;
