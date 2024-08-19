import Button from "./assets/Button";

const FilterButtons = ({ filter, filterBtnSelected }) => {
    return (
        <div className="p-4">
            <div className="flex">
                <Button
                    onClick={() => filterBtnSelected('New')}
                    className="mr-2"
                    text='New'
                    active={filter === 'New'}
                />
                <Button
                    onClick={() => filterBtnSelected('All')}
                    className="mr-2"
                    text='All'
                    active={filter === 'All'}
                />
                <Button
                    onClick={() => filterBtnSelected('Completed')}
                    className="mr-2"
                    text='Completed'
                    active={filter === 'Completed'}
                />
                <Button
                    onClick={() => filterBtnSelected('Deleted')}
                    text='Deleted'
                    active={filter === 'Deleted'}
                />
            </div>
        </div>
    );
};

export default FilterButtons;
