import React from "react";
import styled from "styled-components";
import Snackbar from "./components/Snackbar";
import GlobalStyles from "./components/GlobalStyles";
import { useDispatch } from "react-redux";
import { toggleSnackbarOpen } from "./redux/uiActions";

function App() {
  const dispatch = useDispatch();

  const [message, setMessage] = React.useState("");

  function handleMessage(ev) {
    setMessage(ev.target.value);
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    dispatch(toggleSnackbarOpen(message || "Hello World"));
  }

  return (
    <Wrapper>
      <Header>
        <Title>Simple Snackbar</Title>
        <Subheader>Watchout! It's a snackbar 😲</Subheader>
      </Header>
      <Content onSubmit={handleSubmit}>
        <Row>
          <label>Message</label>
          <div>
            <input
              type="text"
              value={message}
              onChange={handleMessage}
              placeholder="Write some text here..."
            />
          </div>
        </Row>
        <Row>
          <label>Direction</label>
          <div>
            <select>
              <option>This</option>
              <option>That</option>
            </select>
          </div>
        </Row>

        <Button type="submit">Click Me</Button>
      </Content>

      <Snackbar timeout={3000} />
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const Content = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  width: 95%;
  height: auto;
  margin-bottom: 2rem;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0;

  & label {
    flex: 2;
    font-family: "Poppins", sans-serif;
    text-align: center;
    font-weight: bold;
    margin-right: 0.5rem;
    font-size: 1.1rem;
  }

  & div {
    flex: 8;
    & input {
      font-size: 1.1rem;
      line-height: 1.6;
      outline: none;
      border: 1px solid rgba(145, 145, 145, 0.5);
      border-radius: 12px;
      width: 100%;
      padding: 0.3rem 0.5rem;
      /* margin-left: 0.5rem; */
      &::placeholder {
        opacity: 0.5;
      }

      &:focus::placeholder {
        color: transparent;
      }
    }
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subheader = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  font-weight: 100;
  margin: 2rem;
`;

const Button = styled.button`
  text-align: center;
  width: auto;
  height: auto;
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  margin-top: 2rem;
  background-color: hsla(200deg, 100%, 65%, 0.7);
  border: 1px solid hsla(200deg, 100%, 65%, 0.7);
  box-shadow: 1px 2px 5px 0px rgba(145, 145, 145, 0.7);
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export default App;
