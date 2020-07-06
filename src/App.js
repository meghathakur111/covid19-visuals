
import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { fetchData } from './api';
import { Cards, Chart, CountryPicker } from './components';
import coronaImage from './images/covid_19.png';
import github from './images/github.png';
import linkein from './images/linkein.png';
import { height, style } from '@material-ui/system';

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
          <div className={styles.img}>
            <a href="https://github.com/meghathakur111/covid19-visuals" className={styles.footer}>
              <img src={github} />
            </a>
            <a href="https://www.linkedin.com/in/megha-thakur-86ab5213a/" >
              <img src={linkein} className={styles.footer} />
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default App;