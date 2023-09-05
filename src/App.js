import { react, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './Components/AppHeader';
import Studitems from './Components/Studitems';
import StudPost from './Components/StudPost';
import Item from './data/Item';
import AppSearch from './Components/AppSearch';



function App() {
    const [selectedStud, setSelectedStud] = useState(Item[null]);
    const [searchText, setSearchText] = useState('');

    function onStudOpenClick(theStud) {
        setSelectedStud(theStud);
    }

    function onStudCloseClick() {
        setSelectedStud(null);
    }

    const itemElement = Item.filter((item) => {
        return item.title.toLowerCase().includes(searchText) || item.title.toUpperCase().includes(searchText);
    }).map((item, index) => {
        return <Studitems key={index} item={item} onStudClick={onStudOpenClick} />;
    });
    let studPost = null;
    if (!!selectedStud) {
        studPost = <StudPost Item={selectedStud} onBgClick={onStudCloseClick} />
    }

    return (
        <div className='app'>
            <AppHeader />
            <section className='app-section'>
                <div className='app-contrainer'>
                    <AppSearch value={searchText} onValueChange={setSearchText} />
                    <div className='app-grid'>
                        {itemElement}
                    </div>
                </div>
            </section>
            {studPost}
        </div>
    )
}



export default App
