import { useState } from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
    let page = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        page.push(i)
    }

    console.log(page)
    return (
        <div className="pagination">
            <div className="container-pagination">
                {
                    page.map((page, index) => {
                        return <button className="btn-pagination" key={index} onClick={() => setCurrentPage(page)}>{page}</button>
                    })
                }
            </div>
        </div>
    );
};

export default Pagination;