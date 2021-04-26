import React from 'react';
import { SearchBar } from 'react-native-elements';

export default class Search extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Search..."
        onChangeText={this.updateSearch}
        value={search}
        inputStyle={{backgroundColor: 'white'}}
        inputContainerStyle={{backgroundColor: 'white', borderWidth:4, borderBottomWidth:4, borderBottomColor:'skyblue', borderColor:'skyblue', borderRadius: 25, width:300,}}
        containerStyle={{backgroundColor:'#000'}}
      />
    );
  }
}
