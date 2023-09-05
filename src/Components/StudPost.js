import './StudPost.css';

function StudPost(props) {
    const {Item, onBgClick} = props;
    return (
        <div className='stud-post'>
            <div className="stud-post-bg" onClick={onBgClick}/>
            <div className="stud-post-content">
                <h4>{Item.title}</h4>
                <img src={Item.itemUrl}/> 
            </div>
                </div>
    )
}

export default StudPost;