import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core/"

const onSubmit = function (event) {
    event.preventDefault();
}

function RegisterForm() {

    const [name, setName] = useState();
    const [lastName, setlastName] = useState();
    const [identification, setidentification] = useState();

    const validateName = function (event) {
        let tmpName = event.target.value;
        if (tmpName.length >= 3) {
            tmpName = tmpName.substr(0, 3);
        }
        setName(tmpName);
    }

    return (
        <form
            onSubmit={onSubmit}>
            <TextField id="name" label="Name" value={name} variant="outlined" margin="normal" fullWidth
                onChange={validateName} />

            <TextField id="last-name" label="Last name" variant="outlined" margin="normal" fullWidth />

            <TextField id="identification" label="Id" variant="outlined" margin="normal" fullWidth />

            <FormControlLabel label="Promotions" control={<Switch name="Promotions" color="primary" defaultChecked />} />

            <FormControlLabel label="Newsletter" control={<Switch name="Newsletter" color="primary" defaultChecked />} />

            <Button variant="contained" color="primary" type="submit">Register</Button>
        </form>
    );
};

export default RegisterForm;

