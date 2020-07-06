
import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import styles from './App.module.css';
import { fetchData } from './api';
import { Cards, Chart, CountryPicker } from './components';
import coronaImage from './images/covid_19.png';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import { Link } from 'react-router-dom';

class App extends Component {
  state = {
    data: {},
    country: '',

  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });

  }
  handleCountryChange = async (country) => {
    console.log('country-->', country);
    let fetchedData;
    if (country === 'global') {
      fetchedData = await fetchData();
      this.setState({ data: fetchedData });
    } else {
      fetchedData = await fetchData(country);
      this.setState({ data: fetchedData, country: country });
    }
  }

  render() {
    const { data, country } = this.state;
    console.log('data-->', data);
    return (
      <>
        <div className={styles.container}>
          <img src={coronaImage} className={styles.image} alt="COVID-19" />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />

          {/* <Link to="https://github.com/meghathakur111">
            <GitHubIcon />
          </Link> */}

        </div>
      </>
    );
  }
}

export default App;