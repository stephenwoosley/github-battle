var React = require('react');

class Popular extends React.Component {
  render() {
    let languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul className='languages'>
        {languages.map((lang) => {
          return (
            <li>
              {lang}
            </li>
          )
        })}
      </ul>
    )
  }
}

module.exports = Popular;
