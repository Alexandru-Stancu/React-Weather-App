var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are some example locations:</p>
        <ol>
            <li>
                <Link to='/?location=Bucharest'>Bucharest, Romania</Link>
            </li>
            <li>
                <Link to='/?location=Constanta'>Constanta, Romania</Link>
            </li>
        </ol>
        </div>
    )
}

module.exports = Examples;