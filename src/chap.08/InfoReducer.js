import React, { useEffect } from 'react';
import useInputs from './useInfo';

const Info = () => {
  const [state, onChange] = useInputs({
    username: '',
    nickname: '',
  });

  const { username, nickname } = state;

  useEffect(() => {
    console.log('렌더링 됨');
    return () => {
      console.log('clean up');
    };
  }, []);

  return (
    <div>
      <input value={nickname} name="nickname" onChange={onChange} />
      <input value={username} name="username" onChange={onChange} />
      <h3>{nickname}</h3>
      <h3>{username}</h3>
    </div>
  );
};

export default Info;
