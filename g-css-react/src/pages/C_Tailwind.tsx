import React from 'react'


//! Tailwind CSS
// : Utility-First CSS 프레임워크 
// - 마리 디자인된 컴포넌트가 아니라
// 원자적 유틸리티 클래스를 조합해 UI를 만드는 방식

// cf) Bootstap / MUI처럼 컴포넌트를 제공하는 것이 아니라
// CSS 속성이 바로 클래스로 제공됨

// 장점
// 1) 개발 속도 향상 (스타일 시각화가 빠름)
// : HTML/JSX에서 바로 스타일링 가능 (클래스만 봐도 디자인이 보임)

// 2) CSS 파일 거의 없음
// : 따로 CSS 파일 필요 없음

// $) 디자인이 시스템 운영 쉬움
// : 팀간 UI 스타일 일관성 보장
// : 모든 spacing

// 2) 익숙해질 때까지 시간이 필요
// : tailwind 규칙 암기에 시간 소요

// 3) 디자인 설계 없이는 똑같은 UI만 복사
// : 

const buttonStyle = {
  padding: '4',
  background: 'blue',
  color: 'white',
  borderRadius: '4px'
}

function C_Tailwind() {
  return (
    <div>
      <button style={buttonStyle}>객체로 스타일 지정하는 버튼</button>
      <button className='button'>클래스로 지정하는 버튼</button>
      <button className='p-4 bg-blue-500 text-white rounded-lg'>
        tailwind CSS 적용한 버튼
      </button>

      <div className='p-4 bg-blue-500 text-white rounded-lg'></div>
    </div>
  )
}

export default C_Tailwind