import styled from 'styled-components'

export const LoginForm = styled.form`
  input {
  padding: 12px 20px;
  width: 200px;
  border: none;
  border-radius: 40px;
  background-color: #E5E5E5;
  margin-bottom: 4px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
}
  
input:focus {
  background-color: #D1F6FF;
  outline: none;
}
button {
  padding: 12px 20px;
  border-radius: 40px;
  width: 150px;
  border: none;
  margin-left: auto;
  margin-right: auto;
  display: block;
  color: #858585;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
} 
button:focus {
  background-color: #D1F6FF;
  outline: none;
}
`