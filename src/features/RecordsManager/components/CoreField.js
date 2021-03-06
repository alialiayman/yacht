import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { ErrorMessage } from 'formik';

const CoreField = ({ field, mode, onChange, onBlur, value }) => {


    return (
        <React.Fragment>
            {((['text', 'tel', 'email'].includes(field.type)) &&
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        type={field.type}
                        name={field.name}
                        label={field.label}
                        autoFocus={field.autoFocus}
                        disabled={mode === 2 || (field.isReadOnly)}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                    />
                    <ErrorMessage name={field.name} component="div" />
                </Grid>)}
            {((['textarea'].includes(field.type)) &&
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        type={field.type}
                        name={field.name}
                        label={field.label}
                        multiline
                        rowsMax={4}
                        autoFocus={field.autoFocus}
                        disabled={mode === 2 || (field.isReadOnly)}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                    />
                    <ErrorMessage name={field.name} component="div" />
                </Grid>)}

            {((['number'].includes(field.type)) &&
                <Grid item xs={4}>
                    <TextField
                        type={field.type}
                        name={field.name}
                        label={field.label}
                        autoFocus={field.autoFocus}
                        disabled={mode === 2 || (field.isReadOnly)}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                    />
                    <ErrorMessage name={field.name} component="div" />
                </Grid>)}

            {((['date'].includes(field.type)) &&
                <Grid item xs={4}>
                    <TextField
                        type={field.type}
                        name={field.name}
                        label={field.label}
                        autoFocus={field.autoFocus}
                        disabled={mode === 2 || (field.isReadOnly)}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <ErrorMessage name={field.name} component="div" />
                </Grid>)}

            {((['checkbox'].includes(field.type)) &&
                <Grid item xs={4}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={value}
                                onChange={onChange}
                                name={field.name}
                                color="primary"
                                disabled={mode === 2 || (field.isReadOnly)}
                            />
                        }
                        label={field.label}
                    />
                    <ErrorMessage name={field.name} component="div" />
                </Grid>)}
        </React.Fragment>

    )
}

export default CoreField;