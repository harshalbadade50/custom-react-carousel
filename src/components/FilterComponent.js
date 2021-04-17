import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function FilterComponent(props) {

    const classes = useStyles();
    let [categoryValue, setCategory] = useState("select");

    const handleChange = (event) => {
        props.setCategory(event.target.value);
        setCategory(event.target.value);
    }

    return(
        <div className="filter-section">
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categoryValue}
                    onChange={handleChange}
                >
                    <MenuItem value={"select"}>--Select--</MenuItem>
                    <MenuItem value={"Mens Wear"}>Mens Wear</MenuItem>
                    <MenuItem value={"Womens Wear"}>Womens Wear</MenuItem>
                    {/* <MenuItem value={"cat3"}>cat3</MenuItem> */}
                </Select>
            </FormControl>
        </div>
    )
}