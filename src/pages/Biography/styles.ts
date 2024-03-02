import styled from "styled-components";

export const Container = styled.button<{
  loading?: boolean;
}>`
  border: 0;
  padding: 0.25rem;
  border-radius: 4px;
  background: var(--background);
  opacity: ${(props) =>
    props.disabled ? 0.7 : 1};
  transition: opacity 0.2s ease;
  font-weight: bold;
  color: var(--white);
  cursor: ${({ loading }) =>
    loading ? "progress" : "pointer"};

  &:hover {
    opacity: 0.7;
  }

  span {
    font-size: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`