import styled from "styled-components";

const EmptyWrapper = styled.div`

width: 100%;
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 64px 24px;
gap: 16px;
height: 244px;
margin-left: auto;
margin-right: auto;
border-top: 1px solid var(--gray-400);
border-radius: 8px;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
`

const TextWrapper = styled.div`


height: 44px;

font-family: 'Inter';

font-style: normal;
font-size: 16px;
line-height: 140%;
text-align: center;
color: var(--gray-300);
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
`;

export {
  EmptyWrapper,
  TextWrapper
}