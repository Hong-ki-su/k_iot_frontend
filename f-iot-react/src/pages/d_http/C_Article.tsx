import React from 'react'

/*
백엔드 H_Article 로직과 연결

1. 백엔드 API 구조 이해 
1) POST - api/v1/articles: 게시글 생성
요청 바디 article 
응답(ArticleDeleteResponse 생성된 게시글 정보)

2) GET - api/v1/articles 게시글 전체 조회
요청 바디 없음
응답 게시글 목록

3) GET - api/v1/articles{id} 게시글 단건 조회
요청 바디 없음 
응답 게시글 단건

4) PUT - api/v1/articles(id)
요청바디 (articleUpdateRequest)
응답(ArticleDetailResponse 수정된 게시글 정보)

5) DELETE - api/v1/articles(id): 게시글 삭제
요청 없음
응답 (성공 여부)
*/

function C_Article() {
  return (
    <div>C_Article</div>
  )
}

export default C_Article