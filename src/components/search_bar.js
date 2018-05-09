import React, { Component } from 'react'; 
// { Component } is equivalent to 'const Component = React.Component'

class SearchBar extends Component {
    constructor(props) {
        super(props); // Parent class constructor

        this.state = { term: '' };
    }

    render() {
        //return <input onChange={this.onInputChange} />; // onChange is a property with value this.onInputChange()
        return (
            <div className="search-bar">
                <input
                    value={this.state.term} //input is now a controlled element because its value is dependent on the state
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    } // Must include a render function to return a JSX inside a class.

    //event handler
    onInputChange(term) {
        this.setState({term}); //equivalent to this.setState({term: term})
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;