import './Studitem.css';

function Studitem(props) {
    const { item, onStudClick } = props;
    return (
        <div className='stud-item'>
                    <h4>{item.title}</h4>
                    <img src={item.itemUrl} onClick={() => {onStudClick(item)}}/>
                </div>
    )
}

export default Studitem; 