import React from 'react'
import { Link } from 'react-router-dom'

function Pagination({productsPerPage, totalProducts, paginate}) {
    
 const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }                {console.log(productsPerPage)}


    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <Link onClick={() => paginate(number)} to='/products' className='page-link'>
                    {number}
                    </Link>
                </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
