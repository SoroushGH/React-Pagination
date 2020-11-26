import React, { useState, useEffect } from 'react';
import Frameworks from './components/Frameworks';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(20); //change the number to see more or less pose per page


  useEffect(() => {
    const fetchApiData = async () => {
      setLoading(true);
      const url = 'https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100';

      axios.get(url)
        .then(res => {
          setPosts(res.data.items);
          setLoading(false);
        })
        .catch(error => { //error handling to know more about what happend
          if (error.response) {
            console.log(`Problem With Response \n ${error.response.status}`)
          } else if (error.request) {
            console.log(`Problem With Request \n ${error}`)
          } else {
            console.log(`Error ${error.message}`)
          }
        })
    }

    fetchApiData();
  }, []);



  //Get current post
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1 className="text-center p-5">Most Popular JavaScript Frameworks!</h1>

      {/* active it, if you would like to use paginatio on the top as well */}
      {/* <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate} 
        /> */}

      <Frameworks
        posts={currentPosts}
        loading={loading}
      />

      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />

    </div>
  )
}

export default App;
