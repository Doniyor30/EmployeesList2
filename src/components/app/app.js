import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPenal from '../search-penal/search-penal';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import { useState } from 'react';

const App = () => {
    const [data, setData] = useState([
        {name: 'Doni', salary: 800, increase: false, id: 1},
        {name: 'Sarvar', salary: 1500, increase: true, id: 2},
        {name: 'Abdusalom', salary: 2000, increase: false, id: 3},
    ]);
 
    const udalitItem = (id) => {
        setData(data.filter(item => item.id !== id));
    }

    const addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            id: Date.now()
        };
        setData([...data, newItem]);
    }
    
    return (
        <div className="app">
            <AppInfo />
            <div className='search-penal'>
                <SearchPenal/>
                <AppFilter/>
            </div>
            <EmployersList data={data} onUdalit={udalitItem}/>
            <EmployersAddForm onAdd={addItem}/>
        </div>
    );
}

export default App;
