import styled from 'styled-components'


export const ListHeader= styled.div`
justify-content: center;
background-color: #E4EEE3;
margin-left: auto;
margin-right: auto;
height: 230px;
width:100%;
padding-top: 50px;
`
export const ListH1= styled.h1`
text-align: center;
color:#010606;
font-size: 48px;

@media screen and(max-width: 768px) {
    font-size:40px;
}

@media screen and(max-width: 480px) {
    font-size:32px;
}


`
export const ListBtn= styled.button`
border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 20px 22px;
  color: #010606;
  font-size: 26px;
  outline: none;
  border: none;
  curser: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 40%;
  margin-right: auto;


  &:hover{
    transition: all 0.2s ease-in-out;
    background: #0D8A03;
    color: #010606;
  }

`
export const ListInput= styled.input`

  padding-left: 15px;
  padding-right: 15px;
  font-size: 30px;
 

`