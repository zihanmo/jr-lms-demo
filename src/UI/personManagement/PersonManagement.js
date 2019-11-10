import React from 'react';
import debounce from 'debounce';
import { Button, Dropdown, Tab } from 'semantic-ui-react';

const PersonManagement = ({
    handlePersonToAddChange = () => {},
    handleSearchChange = () => {},
    isSearching,
    personsToAdd = [],
    personToAdd,
}) => {
    const renderAddTabContent = () => {
        const options = personsToAdd.map(person => ({
            key: person._id,
            text: person.fullName,
            value: person._id,
        }));

        const onSearchChange = debounce((event, { searchQuery }) => {
            if (!isSearching && searchQuery && searchQuery.length > 2) {
                handleSearchChange(searchQuery);
            }
        }, 500);

        return (
            <>
                <Dropdown
                    disabled={isSearching}
                    loading={isSearching}
                    onSearchChange={onSearchChange}
                    onChange={(event, data) => handlePersonToAddChange(data.value)}
                    selection
                    placeholder="search name"
                    search
                    options={options}
                    value={personToAdd}
                />
                <Button>Add</Button>
            </>
        )
    };

    const panes = [
        { menuItem: 'Add', render: () => <Tab.Pane>{renderAddTabContent()}</Tab.Pane> },
        { menuItem: 'Remove', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    ];

    return <Tab panes={panes} />
};

export default PersonManagement;
