import React, {useState} from 'react';
import AddForm from './AddForm';

        const HeaderBar = function({addBookingToState}) {

    const [buttonClicked, setButtonClicked] = useState(false);

    const handleAdd = () => {
        if(buttonClicked === true){
            setButtonClicked(false)
        }
        if(buttonClicked === false){
            setButtonClicked(true)
        }       
    }

    const renderForm = () => {
        if(buttonClicked === true){
            console.log(buttonClicked)
            return(
                <>
                <AddForm addBookingToState={addBookingToState}/>
                </>
            )
        }
    }

    return (
        <>
            <h1>App</h1>
            <button onClick={handleAdd}>Add</button>
            {renderForm()}
        </>
    )
}

export default HeaderBar;


