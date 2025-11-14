import React from 'react'

// 최소값 <= 선호값 <= 최대값을 보장하는 css 함수
// > 반응형에 주로 사용 (타이포그래피, 간격, 너비)

//? clamp() 사용방법
// property(속성): clamp(min, preferred, max);
// 1) min: 허용되는 최소값
// 2) preferred: 브라우저가 먼저 계산하려고 하는 값
// 3) max: 허용되는 최대값 
// >> 브라우저는 preferred 값을 계산한 뒤, 그 값이 min보다 작으면 max보다 크면 max를 사용

function B_Clamp() {
  /*
  clamp (1rem, 2.5vw, 2rem)

  >> 1rem == 16px (2rem == 32px)

  1) 320px 화면 (모바일 480px)
  : 2.5vw == 320 * 0.025 === 8px
  > 비교 
    min 16px / preferred 8px / max 32px >> 16px

    2) 768px 화면 (테블릿: 768px ~ 1024px)
    : 2.5vw == 768 * 0.025 == 19.2px
    >> 19.2px

    3) 1440px 화면 (pc: 1024px 이상)
    : 2.5vw === 1440 * 0.025 === 36px
    >> 32px (최대값)
  */
  return (
    <div style={{
      width: 'clamp(280px, 60vw, 1200px)',
      margin: '0 auto'
    }}
    >
      <h1 style={{
        fontSize: 'clamp(1.125rem, 2.5vw, 2rem)'
      }}>유동 타이포그래피</h1>

      <button style={{
        padding: 'clamp(0.5rem, 1vw, 1rem)'
      }}>버튼 패딩을 뷰포트에 맞춰 유동적으로</button>

    </div>
  )
}

export default B_Clamp