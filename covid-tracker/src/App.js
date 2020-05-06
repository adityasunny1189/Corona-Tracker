import React from 'react';
import './App.css';
import SearchBox from './components/search-box/search-box.components'
import CardList from './components/card-list/card-list.components'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Country: [],
      searchField: '',
    }
  }

  handleClick = (e) => {
    this.setState({searchField: e.target.value})
  }

  componentDidMount() {
    fetch('https://covid19.mathdro.id/api/confirmed')
    .then(res => res.json())
    .then(user => this.setState({Country: user}))
  }

  render() {
    const {Country, searchField} = this.state;
    const filteredCountry = Country.filter(cont => 
      cont.countryRegion.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className='App'> 
        <h1> CORONA TRACKER </h1>
        <SearchBox 
          placeholder = "Search Country"
          handleClick = {this.handleClick}
        />
        <CardList Country = {filteredCountry} />
      </div>
    )
  }
}

export default App;
