'use client'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Snackbar, Alert, Card, CardContent, Container, Typography } from '@mui/material';
import useLoginStore from '@/store/auth';
import { useRouter } from 'next/navigation';
import { loginValidationSchema } from '@/components/validation/login';

interface LoginFormValues {
    username: string;
    password: string;
}

const LoginForm = () => {
    const { loginUser } = useLoginStore();
    const router = useRouter();
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const [snackbarMessage, setSnackbarMessage] = useState<string>('');
    const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>('success');
    const [generalError, setGeneralError] = useState<string>(''); // Additional state for general errors

    const formik = useFormik<LoginFormValues>({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: loginValidationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const name = await loginUser(values.username, values.password);
                if (name) {
                    setSnackbarMessage(`Welcome ${name}!`);
                    setAlertSeverity('success');
                    router.push('/');
                } else {
                    setSnackbarMessage(`Invalid credentials.`);
                    setAlertSeverity('error');
                }
                setOpenSnackbar(true);
            } catch (error) {
                if (error instanceof Error) {
                    setGeneralError(error.message); // Set general error
                    setSnackbarMessage(error.message);
                    setAlertSeverity('error');
                    setOpenSnackbar(true);
                }
            }
            setSubmitting(false);
        },
    });

    const handleCloseSnackbar = (event?: React.SyntheticEvent<any, Event> | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <Container maxWidth="sm" sx={{ marginTop: 8 }}>
            <Card raised sx={{ p: 3 }}>
                <CardContent>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            fullWidth
                            id="username"
                            name="username"
                            label="Username"
                            placeholder="e.g., emilys"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            error={formik.touched.username && Boolean(formik.errors.username)}
                            helperText={formik.touched.username && formik.errors.username}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            placeholder="e.g., emilyspass"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            margin="normal"
                        />
                        {generalError && <div>{generalError}</div>}
                        <Button color="primary" variant="contained" fullWidth type="submit" disabled={formik.isSubmitting}>
                            Login
                        </Button>
                    </form>
                    <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
                        Use the following demo credentials for testing:
                        <br />
                        <strong>Username:</strong> emilys | <strong>Password:</strong> emilyspass
                    </Typography>
                </CardContent>
            </Card>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={alertSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default LoginForm;
