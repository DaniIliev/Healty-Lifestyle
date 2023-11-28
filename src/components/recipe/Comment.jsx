export default function Comment({
    name,
    comment,
    ownerId
}){



    return(
        <div className="commmentContent">
            <div className="textContent">
                 <h6><strong>Name:</strong> {name}</h6>
                <p>{comment}</p>
            </div>
            <div className="buttonsEditDelete">
                <img src="/images/icons/trash.svg" alt="delete" className="delete" />
                <img src="/images/icons/pencil-solid.svg" alt="edit" className="edit"/>
            </div>
        </div>
    )
}