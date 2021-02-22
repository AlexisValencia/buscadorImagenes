import React, { Component } from 'react';


class Buscador extends Component {
    //Ref Aqui permitira leer los valores de los inputs con React
    busquedaRef = React.createRef();

    //Método que obtiene los datos del formulario
    obtenerDatos = (e) => {
        e.preventDefault();
        //Para leer los valores del Ref this.busquedaRef.current.value
        //Para enviar los datos la padre, App, se utiliza props y la función creada en App "datosBusqueda"
        //Tomamos el valor del input y lo enviamos al componente principal
        this.props.datosBusqueda(this.busquedaRef.current.value);
    };
    render() { 
        return ( 
            //Se pone en el form el evento que queremos utilizar, en este caso queremos capturar el click en buscar para enviar datos 
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Busca tu imagen."></input>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar" ></input>
                    </div>
                </div>
            </form>

        );
    }
}
 
export default Buscador;