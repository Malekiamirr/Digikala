import { useState } from 'react';

import RegisterEmail from '../../components/RegisterEmail';

import RegisterPassword from '../../components/RegisterPassword';

function Login() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordPage, setShowPasswordPage] = useState(false);
  const toggleShowPasswordPage = () => {
    setShowPasswordPage(!showPasswordPage);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen gap-4">
      {!showPasswordPage ? (
        <RegisterEmail
          setEmail={setEmail}
          setName={setName}
          togglePage={() => setShowPasswordPage(true)}
        />
      ) : (
        <RegisterPassword
          setPassword={setPassword}
          togglePage={() => toggleShowPasswordPage(false)}
          name={name}
          email={email}
        />
      )}
    </div>
  );
}

export default Login;
