import React, { useState, useEffect} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import AppBar from '@material-ui/core/AppBar';
import InfoCard from './components/Cards/InfoCard';


  const App = () => {
    const [users, setUsers] = useState([]);

    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 20;
    const pagesVisited = pageNumber * usersPerPage;

    const pageCount = Math.ceil(
      users.length / usersPerPage
    );

    const changePage = ({selected}) =>  {
      setPageNumber(selected)
    };

    //Muestro usuarios por página 
    const showUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map(
      (results, index) => {
        return(
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
        )
      }
    )

    //GET API
    const getUsers = () => {
      axios.get('https://randomuser.me/api/?results=500')
      .then((response) => {
        console.log(response)
        setUsers(response.data.results)
      })
    }

    useEffect(() => {
      getUsers()
  }, [])

  return (
    <>
      <AppBar class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <h3 className= "navbar-brand">Intive - Challenge</h3>
        </div>
      </AppBar> 
      <div className="container">
        <div className="row">
          {showUsers}
        </div>
        <div className="d-flex justify-content-center">
          <ReactPaginate class="pagination"
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            activeClassName={"page-item active"}
            pageLinkClassName={"page-link"}
          />
        </div>
      </div>
    </>
  )
}

export default (App);
