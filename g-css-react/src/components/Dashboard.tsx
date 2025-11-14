import React from 'react'
import { CardContainer } from './Card';

function Dashboard({toggleTheme} : {toggleTheme: () => void}) {
  // 예시 데이터(mock data)
  const data = [
    {title: '오늘예약', value: '238'},
    {title: '주문 수', value: '54건'},
    {title: '매출액', value: '1,234,000원'},
  ];

  return (
    <Page>
    <Header>
      <h1>대시보드</h1>
      <ThemeToggle toggle={toggleTheme}/>
    </Header>

    <Grid>
    // 카드 컴포넌트의 구별을 위해 key 속성이 필수
    // key속성값은 고유값이어야 한다
    <CardContainer key={data.title}>
      <div style={{
        font-size: 'clamp(1.25rem, 2.5vw, 1.5rem)',
        fontWeight: 700
      }}>
      </div>
    </CardContainer>
    </Grid>
    </Page>
  )
}

{/*차트 섹션: Chart.js 버전 */}
<CardContainer>
  <CardTitle>매출(Recharts)</CardTitle>
</CardContainer>

export default Dashboard

const Page = styled.div`
  padding: clamp(1rem, 3vw, 2.5rem);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin: 0;
    font-size: clamp(1.25rem, 3vw, 1.75rem);
  }
`;

// 반응형 Grid 
// : auto-fit + minmax (미디어쿼리 없이 열 개수 자동 조정)
const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;