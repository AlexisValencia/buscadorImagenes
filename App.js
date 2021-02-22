import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';



class App extends Component{

  //State es un objeto
  state = {
    termino: '',
    imagenes:[],
    pagina:''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start');
  }

  // Enfocado para la paginacion de la visualizacion de las imagenes
  paginaAnterior = () => {
    //leer el state de la pagina actual
    let pagina =this.state.pagina;
    //si la pagina es === 1 no ir hacia atrás
    if(pagina === 1) return null;
    //resta 1 a la pagina actual
    pagina--;
    //agregar el cambio al state
    this.setState({pagina}, () => {this.consultarApi()});
    this.scroll();
  }

  paginaSiguiente= () => {
    //leer el state de la pagina actual
    let pagina =this.state.pagina;
    //sumar 1 a la pagina actual
    pagina++;
    //agregar el cambio al state
    this.setState({pagina}, () => {this.consultarApi()});
    this.scroll();
  }



  //Para utilizar una API utilizamos Fetch
  consultarApi = () => {
    const pagina = this.state.pagina;
    const url =`https://pixabay.com/api/?key=18750193-53af8f360938e9126737bb3d2&q=${this.state.termino}&per_page=10&page=${pagina}`;
    
    //Fetch para obtener los valores del objeto pertenecientes a la API
    fetch(url)
    .then(respuesta => respuesta.json() )
    .then(resultado => this.setState({ imagenes: resultado.hits}))
  }

  datosBusqueda = (termino)=>{
    //El State se cambia de esta forma
    this.setState({
      termino:termino,
      //Para que inicie en la primer imagen, esto servira para la paginacion
      pagina: 1
      //Funcion CallBack, una vez se tiene el state guardado, se manda a ejecutar la funcion de consultar Api
    }, () => {
      this.consultarApi();
    })
  }



  render(){
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscardor de imágenes @AlexisValencia</p>
          <Buscador
          //Esto se conoce como un props, para comunicar los datos del componente principal al hijo
            datosBusqueda={this.datosBusqueda}
          />
          <div className="row justify-content-center">
            <Resultado
              imagenes= {this.state.imagenes}
              paginaAnterior={this.paginaAnterior}
              paginaSiguiente={this.paginaSiguiente}
            />
          </div>

        </div>
      </div>
    ); 
  }
}

export default App;
