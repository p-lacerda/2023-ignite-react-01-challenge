import styled from 'styled-components';

const AddTaskWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
padding: 0px;
gap: 8px;
position: absolute;
height: 54px;
width: 736px;
`

const AddTaskInput = styled.input`
  box-sizing: border-box;

  color: #FFFFFF;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 8px;
  height: 54px;
  background: var(--gray-500);
  border: 1px solid var(--gray-700);
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 1;
  `

const AddTaskButton = styled.button`
color: #FFFFFF;
font-weight: 700;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px;
gap: 8px;
width: 90px;
height: 52px;
cursor: pointer;
background: var(--blue-dark);
border-radius: 8px;
flex: none;
order: 1;
flex-grow: 0;
border: none;
`

  export {
    AddTaskWrapper,
    AddTaskInput,
    AddTaskButton
  }