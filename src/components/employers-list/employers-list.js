
import EmployersListItem from '../employers-list-item/employers-list-item';

import'./employers-list.css';

const EmployersList = ({data, onUdalit}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <EmployersListItem 
            key={id} 
            {...itemProps}
            onUdalit={() => onUdalit(id)}    
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {
                elements
            }
        </ul>
    )
}

export default EmployersList