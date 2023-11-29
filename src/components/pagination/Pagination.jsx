


export const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage
}) => {
    let pages = []

    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }
    return(
        <div className="pagination">
            {pages.map((page,index) => {
                return <button className="paginationButton" key={index} onClick={() => setCurrentPage(page) }>{page}</button>
            })}
        </div>
    )
}