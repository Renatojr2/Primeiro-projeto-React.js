import React, { Component } from 'react';
import TechItem from './techItem';

//toda vez que uma variavel do componet precisa ser manipulada em react nos chamos de estado
class TeckList extends Component {
  //meu estado e imutaval, para ele receber mutações presiso usar o setstate
  state = {
    newTech: '',
    tech: [],
  }
  //ciclo de vida dos componentes

  //executa assim que o componente aparece em tela
  componentDidMount() {
    const tech = localStorage.getItem('tech')
    if (tech) {
      this.setState({ tech: JSON.parse(tech) })
    }
  }

  //executa sempre quando houver alterações nas props ou estado
  componentDidUpdate(_, prevState) {
    if (prevState.tech != this.state.tech) {
      localStorage.setItem('tech', JSON.stringify(this.state.tech))
    }

  }

  //executa quando o componebt deixa de existir
  componentWillUmMount() {

  }

  handleDelete = (tech) => {
    this.setState({ tech: this.state.tech.filter(t => t != tech) })

  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.setState({
      tech: [... this.state.tech, this.state.newTech],
      newTech: ''
    })

  }
  //metodo para pegar valor do input
  handleInputChange = (e) => {
    this.setState({ newTech: e.target.value })

  }

  /*toda vez que percorremos um array ele precisa de uma chave unica*/
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <ul>
          {this.state.tech.map((tech) =>
            <TechItem key={tech} tech={tech} onDelete={() => this.handleDelete(tech)} />
          )}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    )
  }
}

export default TeckList
