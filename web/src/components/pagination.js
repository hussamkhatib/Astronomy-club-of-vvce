import React from 'react'

const Pagination = ({ postsPerPage, totalPosts,paginate}) => {
    const pageNumbers = [];
      
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log('a'+pageNumbers)
    return (
          <nav>
      <ul>
        {pageNumbers.map(number => (
          <li  onClick={() => paginate(number)} key={number}>
           
          </li>
        ))}
      </ul>
    </nav>
    )
}

export default Pagination
