import React, { Component } from 'react';
import { CardItem, Thumbnail, Text, Left, Body } from 'native-base';

export default class CatCard extends Component {
  render() {
    return (
      <CardItem style={{ backgroundColor: "lightblue"}}>
        <Left>
          <Thumbnail source={{uri: 'https://robohash.org/'+this.props.id+'?set=set4'}} 
            style={{height: 300, width: null, flex: 0.7}}
          />
          <Body >
            <Text style={{ fontSize: 30 }}>"{this.props.name}"</Text>
            <Text style={{ fontSize: 20 }} note>Username        :{this.props.username}</Text>
            <Text style={{ fontSize: 20 }} note>Email                 :{this.props.email}</Text>
            <Text style={{ fontSize: 20 }} note>Phone Num      :{this.props.phone}</Text>
            <Text style={{ fontSize: 20 }} note>Website            :{this.props.website}</Text>
            <Text style={{ fontSize: 20 }} note>Address            :{this.props.address_street}, {this.props.address_suite}, {this.props.address_city}, Zip: {this.props.address_zipcode}, Lat: {this.props.lat}, Lng: {this.props.lng}</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Company Details</Text>
            <Text style={{ fontSize: 20 }} note>Name            :{this.props.company_name}</Text>
            <Text style={{ fontSize: 20 }} note>Motto            :{this.props.company_catch}</Text>
            <Text style={{ fontSize: 20 }} note>BS                  :{this.props.company_bs}</Text>
          </Body>
        </Left>
      </CardItem>
    );
  }
}