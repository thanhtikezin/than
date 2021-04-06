import React, { Component } from 'react';
import CatCard from './CatCard';

export default class CardList extends Component {
  constructor() {
    super()
    this.state = {
      cats: [],
      searchfield: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(photos => this.setState({cats: photos}));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchfield !== this.props.searchfield) {
      console.log(this.props.searchfield)
      this.setState({searchfield: this.props.searchfield});
    }
  }

  render() {
    const {cats, searchfield} = this.state;

    const filteredCats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return (
      filteredCats.map((photos, i) => {
        return (
          <CatCard
            key={filteredCats[i].id}
            id={filteredCats[i].id}
            name= {filteredCats[i].name}
            username= {filteredCats[i].username}
            email= {filteredCats[i].email}
            phone={filteredCats[i].phone}
            website={filteredCats[i].website}
            address_street={filteredCats[i].address.street}
            address_suite={filteredCats[i].address.suite}
            address_city={filteredCats[i].address.city}
            address_zipcode={filteredCats[i].address.zipcode}
            lat = {filteredCats[i].address.geo.lat}
            lng = {filteredCats[i].address.geo.lng}
            company_name = {filteredCats[i].company.name}
            company_catch = {filteredCats[i].company.catchPhrase}
            company_bs = {filteredCats[i].company.bs}

          />
        );
      })
    );
  }
}