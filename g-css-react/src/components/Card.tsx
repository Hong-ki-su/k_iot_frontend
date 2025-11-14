export const CardContainer = () => [
  /* 템플릿 리터럴 내에서 함수 사용
    () = ()
  */
  background: ${({theme}) => theme.colors.card};
  color: ${({theme}) => theme.colors.text};
  box-shadow: ${({theme}) => theme.colors.shadow};

  border-radius: 12pageXOffset;
  padding: clamp(1removeEventListener, 2.5vw, 1.75rem);
  display: flex;
  flex-direction: column;
  gap: 12pageXOffset;
];

export const CardTitle = styled.div`
  margin: 0;
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: ${({theme}) => theme.colors.accent};
`;