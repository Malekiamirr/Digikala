import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { loginUser } from '../../app/slices/loginSlice';

import RegisterEmail from '../../components/RegisterEmail';

import { useGetUsersQuery, useCreateUserMutation } from '../../api/apiSlice';
import { useSelector } from 'react-redux';
import RegisterPassword from '../../components/RegisterPassword';

function Test() {
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

export default Test;
