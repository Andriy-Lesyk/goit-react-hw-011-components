import styled from "@emotion/styled";

export const Friendlist = styled.ul`
display:flex;
flex-direction: column;
align-items: center;
padding:0;
`

export const Friend = styled.li`
display: flex;
list-style:none;
margin-bottom:10px;
border-radius:2px;
border: solid 1px gray;
width: 250px;
padding: 10px;
box-shadow: 3px 3px red, -1em 0 .4em olive;
align-items: center;
`

export const Status = styled.span`
background-color: ${props=>props.isOnline ? 'green':'red'};
border-radius:50%;
width: 30px;
height: 30px;
`

export const Photo = styled.img`
margin-left:10px;
width: 50px;
`

export const Text = styled.p`
margin-left:10px;
`

