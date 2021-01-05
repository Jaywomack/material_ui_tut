import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 20px',
  },
});

const Form = () => {
  // Handling Age state
  const [age, setAge] = React.useState('');
  const handleChange = (e) => {
    setAge(e.target.value);
  };
  // Classes styles hook
  const classes = useStyles();

  return (
    <div>
      <FormControl>
        <InputLabel id='age-label'>Age</InputLabel>
        <Select
          variant='outlined'
          labelId='age-label'
          id='age-select'
          value={age}
          onChange={handleChange}
          className={classes.root}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={1}>10</MenuItem>
        </Select>
        <h1>Age = {age}</h1>
      </FormControl>
    </div>
  );
};

export default Form;
// fetch('https://developers.zomato.com/api/v2.1/cities', {
//   headers: {
//     Accept: 'application/json',
//     'User-Key': '63ded2eb1be8fa0fbca89375cbd1a994',
//   },
// })
//   .then((res) => res.json())
//   .then((json) => console.log(json));
