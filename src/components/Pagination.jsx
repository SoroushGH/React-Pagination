import React from 'react';

const Pagination = ({ postPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil((totalPosts / postPerPage)); i++) {
        pageNumbers.push(i)
    }


    return (
        <div className="row">
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a className="page-link" onClick={() => paginate(number)} href='#'>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>

    )
}

export default Pagination;