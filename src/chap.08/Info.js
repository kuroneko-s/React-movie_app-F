import React, { useEffect, useState } from 'react';

const Info = () => {
  const [nickname, setNickname] = useState('');
  const [username, setUsername] = useState('');

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    console.log('렌더링 됨');
    return () => {
      console.log("clean up")
    }
  }, [nickname]);

  return (
    <div>
      <input value={nickname} name="nickname" onChange={onChangeNickname} />
      <input value={username} name="username" onChange={onChangeUsername} />
      <h3>{nickname}</h3>
      <h3>{username}</h3>
    </div>
  );
};

export default Info;
