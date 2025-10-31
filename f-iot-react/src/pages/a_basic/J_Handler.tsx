import React from 'react'

//! 이벤트 핸들러
// : 사용자와 상호작용(클릭, 입력, 제출 등)에 반응하여 실행되는 함수 

 // HTML) <button onClick={}></button>
// JSX) <button onClick={}></button> //? cameCase로 작성
 
//! 이벤트 등록 방법
// 1) 함수 이름 전달
// : <button onclick={handleButtonClick}></button>

//? 함수 호출 X: 호출 시 즉시 실행

interface ButtonProps {
  children: React.ReactNode;
  onButtonClick: () => void;
}

// 이벤트 핸들러를 자식 컴포넌트에 전달
// 부모 컴포넌트) 이벤트 핸들러를 정의
// 자식 컴포넌트) 해당 핸들러를 props
function ButtonComponent({children, onButtonClick}: ButtonProps) {
  return (
    <button onClick={onButtonClick}>
      {children}
    </button>
  )
}

//! props.children을 사용하여 이벤트 재사용
// : 부모 컴포넌트에서 속성 (props)로 message값과 해당 컴포넌트 태그들 사이의 내용을 전달받음
// # 자식 컴포넌트
interface ConsoleProps {
  message: string;
  children: React.ReactNode;
}

function ConsoleButton({message, children}: ConsoleProps) {
  return (
    <button onClick={( () => console.log(`${message}`))}>
      {children}
    </button>
  )
}

// # 부모 컴포넌트

function J_Handler() {
  function handleButtonClick() {
    console.log('버튼이 클릭하였습니다');
  }

  // 자식 컴포넌트에 전달할 이벤트 핸들러 함수 (화살표 함수 사용 권장)
  const buttonHandler = () => {
    console.log('부모로 부터 전달하는 이벤트 핸들러 함수');
  }

  /*
  cf) 이벤트 핸들러 명명규칙 (권장 사항)
  1. on 시작
  : props로 전달받은 이벤트 핸들러 (이벤트 바인딩 용)
  - 컴포넌트 외부에서 전달받은 이벤트 핸들러
  EX) onButtonClick, onFormSubmit
  2 -handler
  : 내부 함수 (실제 처리 함수)
  - 내부에서 정의된 로직 함수
  EX) buttonClickHandler, formSubmitHandler
  3. handler-
  : 내부 함수 (단일 컴포넌트 내부에서만 쓰이는 함수)
  */

  return (
    <div>
      <button onClick={handleButtonClick}>클릭해주세요</button>

      <hr />
      <ButtonComponent onButtonClick={buttonHandler}>
        클릭 이벤트 전달
      </ButtonComponent>

      <hr />
      <ConsoleButton message='A 버튼 클릭'>A 버튼</ConsoleButton>
      <ConsoleButton message='B 버튼 클릭'>B 버튼</ConsoleButton>

      <hr />
      <form onSubmit={(e) => {
      e.preventDefault(); // 세로고침 방지
      console.log('전송완료');
      }}>
      <button type='submit'>제출하기</button>
      <input type="submit" />
      </form>
    </div>
  )
}

export default J_Handler