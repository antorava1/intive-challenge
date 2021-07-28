import React, { useState, useEffect} from 'react';
//import { withNamespaces } from 'react-i18next';
import AppBar from '@material-ui/core/AppBar';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import InfoCard from './components/Cards/InfoCard';
//import i18n from './i18n';



  const App = () => {
    const [users, setUsers] = useState([]);

    const getUsers = () => {
      axios.get('https://randomuser.me/api/?results=20')
      .then((response) => {
        console.log(response)
        setUsers(response.data.results)
      })
    }

    /* // Cambio de idioma
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    } */

    useEffect(() => {
      getUsers()
  }, [])


  return (
    <>
      <AppBar class="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid">
          <h3 className= "navbar-brand">Intive - Challenge</h3>
        </div>
      </AppBar> 
      <div className="container">
        {/* <div class="btn-group" role="group">
          <Button class="btn btn-primary btn-sm my-2 my-sm-1" onClick={() => changeLanguage('es')}>{t('esp')}</Button>
          <Button class="btn btn-secondary btn-sm my-2 my-sm-1" onClick={() => changeLanguage('en')}>{t('eng')}</Button>
        </div> */}
        <div className="row">
          {users.map((results, index) => 
            <InfoCard
              firstName={results.name.first}
              lastName={results.name.last}
              image={results.picture.large}
              city={results.location.city}
              country={results.location.country}
              gender={results.gender}
              age={results.dob.age}
              birthdate={results.dob.date}
              phone={results.phone}
              cell={results.cell}
              nationality={results.nat}
              username={results.login.username} 
              email={results.email}
              key={index}
            />
          )}
        </div>
        <div className="d-flex justify-content-center">
        {/* PAGINATION */}
        </div>
      </div>
    </>
  )
}

export default (App);
