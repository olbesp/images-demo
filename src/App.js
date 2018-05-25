import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SearchInput from './components/SearchInput/SearchInput';
import Background from './components/Background/Background';
import Images from './components/Images/Images';

class App extends Component {
  state = {
    query: '',
    images: null,
    animate: false,
    notFound: false,
    error: false
  }

  getData = (query = this.state.query) => {
    if (encodeURIComponent(query.trim())) {
      axios.get(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=e6f8e66e2e6ecff51cbc95ff75237658c9f271cd494ce3f555d36774b52cfa8e`)
        .then(response => {
          if (!response.data.results.length) {
            this.setState({
              images: null,
              notFound: true,
              error: false,
            });
          } else {
            console.log(response.data.results)
            this.setState({
              images: response.data.results,
              notFound: false,
              error: false,
              animate: true
            });
          }
        })
        .catch (error => {
          this.setState({
            images: null,
            error: true
          });
        });
    }
  }

  componentDidMount() {
    this.getData('dogs');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }

  inputChangedHandler = (e) => {
    this.setState({ query: e.target.value });
  }

  searchClickedHandler = () => {
    this.getData();
  }

  inputPressedHandler = (e) => {
    if ((e.which === 13 || e.charCode === 13) && this.state.query) {
      this.getData();
    }
  }

  render() {
    let searchResult = null;

    if (this.state.error) {
      searchResult = <h4 className="App__searchFail">Something went wrong...</h4>;
    }

    if (this.state.notFound) {
      searchResult = <h4 className="App__searchFail">Sorry, I can't find it</h4>;
    }

    if (this.state.images) {
      searchResult = <Images images={this.state.images} />;
    }
    
    return (
      <Background>
        <div className={["App", this.state.animate ? "animate" : null].join(' ')}>
          <header className="App__header">
            <h1 className="App__header__main">Image Searcher</h1>
            <h3 className="App__header__sub">Find anything you want</h3>
          </header>
          <SearchInput
            changed={this.inputChangedHandler}
            clicked={this.searchClickedHandler}
            keyPressed={this.inputPressedHandler}
          />
          {searchResult}
        </div>
      </Background>
    );
  }
}

export default App;
