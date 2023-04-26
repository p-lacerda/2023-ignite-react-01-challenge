import styled from "styled-components";

const Container = styled.div`
margin-bottom: 1rem;
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
padding: 16px;
gap: 12px;
width: 736px;
height: 72px;
background: var(--gray-500);
border: 1px solid var(--gray-400);
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
border-radius: 8px;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

[type=checkbox] {
  width: 17px;
  height: 17px;
  color: var(--purple-dark);
  vertical-align: middle;
  -webkit-appearance: none;
  background: none;
  border: 0;
  outline: 0;
  flex-grow: 0;
  border-radius: 50%;
  background-color: #FFFFFF;
  transition: background 300ms;
  cursor: pointer;
}


[type=checkbox]::before {
  content: "";
  color: transparent;
  display: block;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  border: 0;
  background-color: transparent;
  background-size: contain;
  box-shadow: inset 0 0 0 1px #CCD3D8;
}


/* Checked */

[type=checkbox]:checked {
  background-color: currentcolor;
}

[type=checkbox]:checked::before {
  box-shadow: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cpath d='M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z' fill='%23fff'/%3E %3C/svg%3E");
}


/* Disabled */

[type=checkbox]:disabled {
  background-color: #CCD3D8;
  opacity: 0.84;
  cursor: not-allowed;
}


/* IE */

[type=checkbox]::-ms-check {
  content: "";
  color: transparent;
  display: block;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  border: 0;
  background-color: transparent;
  background-size: contain;
  box-shadow: inset 0 0 0 1px #CCD3D8;
}

[type=checkbox]:checked::-ms-check {
  box-shadow: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cpath d='M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z' fill='%23fff'/%3E %3C/svg%3E");
}
`;

const TextWrapper = styled.p<{ completedTask: boolean }>`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 140%;
color: ${({ completedTask }) => completedTask ? 'var(--gray-300)' : 'var(--gray-100)'};
text-decoration: ${({ completedTask }) => completedTask ? 'line-through' : 'none'};
`

export {
  Container,
  TextWrapper
}