import { useInput } from '@/hooks/useInput';
import React, { useState } from 'react'

type UserInfo = {
  name: string;
  email: string;
}

function Custom02() {
  // const [userInfo, setUserInfo] = useState<UserInfo>({
  // name: '';
  // email: ''
  // });

  const example01 = useInput('');
  const {

    value: name, 
    handleReset: nameReset, 
    bind: nameBind
  } = example01;

  const {
    value: email,
    handleReset: emailBind
  } = useInput('');

  const person = {nickname: '홍기수', age: 25};
  const {nickname, age} = person;
  console.log(nickname);
  console.log(age);

  // 구조분해 할당 시 가져오는 데이터와 명칭 변경
  const {nickname: nn} = person;
  console.log(nn);

  const handleAllReset = () => {
    nameReset();
    emailReset();
  }
  const emailReset = () => {
    
  }

  return (
    <div>
      <p>Name: {name}</p>
      <input 
      type="text" 
      name='name' 
      placeholder='사용자 이름' 
      {...nameBind}
      />
      <button onClick={nameReset}>이름 초기화</button>
      
      <p>Email: {email}</p>
      <input type="text" 
      name='name' 
      placeholder='사용자 이메일' 
      {...emailBind}
      />
      <button onClick={emailReset}>이메일 초기화</button>
      <button onClick={handleAllReset}>전체 초기화</button>
    </div>
  )
}

export default Custom02