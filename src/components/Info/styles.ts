import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 6rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Tasks = styled.div`
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 8px;
`;

const CreatedTasks = styled(Tasks)`
  p {
    color: var(--blue);
  }

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px 8px;
    gap: 10px;
    color: var(--gray-200);
    background: var(--gray-400);
    border-radius: 999px;
  }
`;

const CompletedTasks = styled(Tasks)`
  p {
    color: var(--purple);
  }

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px 8px;
    gap: 10px;
    color: var(--gray-200);
    background: var(--gray-400);
    border-radius: 999px;
  }
`;

export { Container, InfoWrapper, Tasks, CreatedTasks, CompletedTasks };