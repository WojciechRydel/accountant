import styled from 'styled-components'

export const MainContainer = styled.div`
  max-width: 72rem;
  margin: auto;
  padding: .9rem 2rem;

  & h1 {
    text-align: center;
    font-size: 3rem;
  }
`

export const Actions = styled.div`
  margin: 2rem 0;
`

export const Form = styled.form`
  & input {
    margin: 1rem 0;
    display: block;
    font-size: 2em;
    width: 100%;
    box-sizing: border-box;
    padding: 1rem 1.2rem;
  }

  & button[type=submit] {
    background: green;
    width: 100%;
    color: white;
    padding: .9rem 1.2rem;
    outline: none;
    border: none;
    font-size: 2em;
  }
`
