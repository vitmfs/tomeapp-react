import React, { FC } from 'react';

interface IProps {
  client: { email: string; phoneNumber: string };
}

type ChildProps = {
  name: string,
  id: number,
  bio?: string,
}

const TestCompTwo: FC<ChildProps> = ({ name, id, bio = 'Bio empty' }) => {
  return (
    <div>
      <h2>Name: {name}, Id: {id}</h2>
      <p>{bio}</p>
    </div>
  )
};

export default TestCompTwo;