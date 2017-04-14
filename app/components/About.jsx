var React = require('react');
// about este un stateless functional component
var About = (props) => {
    return (
       <div>
        <h1 className="text-center">About</h1>
        <p>Aceasta este o aplicație construită cu React.js și OpenWeatherAPI.</p>
        <p>Câteva dintre utilitățile pe care le-am folosit:</p>
        <ul>
            <li>
                <a href="https://facebook.github.io/react">React.js</a> - Framework-ul Javascript utilizat.
            </li>
            <br/>
            <li >
                <a href="http://openweathermap.org">OpenWeatherMap API</a> - Am folosit OpenWeatherMap API pentru a căuta datele meteo după numele orașelor.
            </li>
            <br/>
            <li>
                <a href="https://expressjs.com/">Express.js</a> - Web framework pentru Node.js.
            </li>
            <br/>
            <li>
                <a href="https://jquery.com/">jQuery</a> Librărie JavaScript pentru manipularea HTML-ului.
            </li>
        </ul>
       </div>
    )    
};

module.exports = About;