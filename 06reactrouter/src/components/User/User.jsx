import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const {userId} = useParams()
  return (
    <div className=' container mx-auto bg-orange-600  font-semibold text-center text-3xl py-4'>
      User: {userId}
    </div>
  );
}

export default User;
