// components/LoginForm.tsx
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { Button, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { loginValidationSchema } from '@/components/validation/login';
import { LoginFormValues } from '@/@types/auth';

const initialValues: LoginFormValues = {
    username: '',
    password: ''
};

const LoginForm = () => {
    const router = useRouter();

    const handleSubmit = (values: LoginFormValues, { setSubmitting }: FormikHelpers<LoginFormValues>) => {
        setSubmitting(true);
        console.log(values);
        // Note: `router.navigate` should be `router.push` if `navigate` isn't recognized.
        // The correct usage depends on your version of Next.js and type definitions available.
        router.push('/products'); // If `navigate` gives an error, use `push`
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, handleChange, handleBlur, values, touched, errors }) => (
                <Form>
                    <Field as={TextField}
                        name="username"
                        label="Username"
                        variant="outlined"
                        fullWidth
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.username && Boolean(errors.username)}
                        helperText={touched.username && errors.username}
                        margin="normal"
                    />
                    <Field as={TextField}
                        type="password"
                        name="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                        margin="normal"
                    />
                    <Button type="submit" color="primary" variant="contained" disabled={isSubmitting} fullWidth>
                        Login
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
