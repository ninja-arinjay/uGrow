import React, {useEffect} from 'react';
import { doSignOut } from '../firebase/FirebaseFunctions';

const SignOutButton = () => {
  const run = () =>{
    doSignOut();
  }
  useEffect(()=>{
    run();
  },[]);
  return (
    <></>
  );
};

export default SignOutButton;
