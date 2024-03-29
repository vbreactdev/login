import GoogleLogin from 'react-google-login';

const Login = ({ setUser }) => (
  <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={({ profileObj }) => setUser(profileObj)}
    cookiePolicy={'single_host_origin'}
  />
);

export default Login;
