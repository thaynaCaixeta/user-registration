import React from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core/"

function RegisterForm() {
    return (
        <form>
            <TextField id="name" label="Name" variant="outlined" margin="normal" fullWidth />

            <TextField id="last-name" label="Last name" variant="outlined" margin="normal" fullWidth />

            <TextField id="identification" label="Id" variant="outlined" margin="normal" fullWidth />

            <FormControlLabel label="Promotions" control={<Switch name="Promotions" color="primary" defaultChecked />} />

            <FormControlLabel label="Newsletter" control={<Switch name="Newsletter" color="primary" defaultChecked />} />

            <Button variant="contained" color="primary" type="submit">Register</Button>
        </form>
    );
};

export default RegisterForm;

