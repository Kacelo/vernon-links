import * as yup from 'yup';

const REQUIRED = 'is required';

export const signUpValidationSchema = yup.object().shape({
    password: yup
      .string()
      .required(`Password ${REQUIRED}`)
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
      ),
      username: yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      email: yup.string().email('Invalid email').required('Required'),
  });
