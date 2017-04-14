var React = require('react');

var WeatherForm = React.createClass({

    onFormSubmit: function (e) {
        e.preventDefault(); // opreste reloading-ul paginii
        var location = this.refs.location.value; // luam valoare din form input ref="location"
        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location); // apelam functia onSearch pe location
        }
    },

    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input ref="location" type="search" placeholder="enter city name" />
                    <button className="button expanded hollow">Get Weather</button>
                </form>
            </div>
        )
    }
})

module.exports = WeatherForm;