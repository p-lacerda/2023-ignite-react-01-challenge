import styled from "styled-components";

const Background = styled.div`
position: absolute;
height: 200px;
left: 0px;
right: 0px;
top: 0px;

/* Gray 700 */

background: var(--gray-700);
z-index: -1;
`

const LogoWrapper = styled.div`
position: absolute;
width: 126px;
height: 48px;
top: 72px;
`

export {
  Background,
  LogoWrapper
}