import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core/";

function RegisterForm({ onSubmit, onBlur }) {

    const [name, setName] = useState("");
    const [lastName, setlastName] = useState("");
    const [identification, setidentification] = useState("");
    const [promotions, setPromotions] = useState(true);
    const [newsletter, setNewsletter] = useState(true);
    const [error, setError] = useState({ identification: { valid: true, helperText: "" } });

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                onSubmit({ name, lastName, identification, promotions, newsletter });
            }}>
            <TextField id="name" label="Name" value={name} variant="outlined" margin="normal" fullWidth
                onChange={(event) => setName(event.target.value)} />

            <TextField id="last-name" label="Last name" variant="outlined" margin="normal" fullWidth
                onChange={(event) => setlastName(event.target.value)} />

            <TextField id="identification" label="Id" variant="outlined" margin="normal" fullWidth
                onChange={(event) => setidentification(event.target.value)}
                onBlur={(event) => {
                    const isValid = onBlur(identification);
                    setError({ identification: isValid });
                }}
                error={!error.identification.valid}
                helperText={error.identification.helperText} />

            <FormControlLabel label="Promotions" control={<Switch name="Promotions" color="primary"
                checked={promotions}
                onChange={(event) => setPromotions(event.target.checked)} />} />

            <FormControlLabel label="Newsletter" control={<Switch name="Newsletter" color="primary"
                checked={newsletter}
                onChange={(event) => setNewsletter(event.target.checked)} />} />

            <Button variant="contained" color="primary" type="submit">Register</Button>
        </form>
    );
};

export default RegisterForm;

