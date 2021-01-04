import React from "react";
import styled from "styled-components";
import Snackbar from "./components/Snackbar";
import GlobalStyles from "./components/GlobalStyles";
import { useDispatch } from "react-redux";
import { toggleSnackbarOpen } from "./redux/uiActions";

function App() {
  const dispatch = useDispatch();
  const TYPES = ["default", "success", "warning", "error"];
  const [message, setMessage] = React.useState("");
  const [direction, setDirection] = React.useState("bottom-center");
  const [type, setType] = React.useState("default");

  // ############################ FUNCTIONS ################################

  function handleMessage(ev) {
    setMessage(ev.target.value);
  }

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function handleTypeChange() {
    let currentIndex = TYPES.indexOf(type);
    if (currentIndex >= 0 && currentIndex < TYPES.length - 1) {
      setType(TYPES[currentIndex + 1]);
    } else {
      setType(TYPES[0]);
    }
  }

  function handleDirection(ev) {
    setDirection(ev.target.value.toLowerCase());
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    dispatch(toggleSnackbarOpen(message || `This is the ${type} message!`));
  }

  // ########################### BUTTON COLORS ##########################

  let COLORS = {};
  switch (type) {
    case "success": {
      COLORS = {
        primary: "hsl(147, 57%, 60%)",
        secondary: "hsl(147, 57%, 55%)",
      };
      break;
    }

    case "warning": {
      COLORS = {
        primary: "hsl(47, 100%, 50%)",
        secondary: "hsl(47, 100%, 45%)",
      };
      break;
    }

    case "error": {
      COLORS = {
        primary: "hsl(359, 100%, 70%)",
        secondary: "hsl(359, 100%, 65%)",
      };
      break;
    }

    default: {
      COLORS = {
        primary: "hsl(200, 100%, 65%)",
        secondary: "hsl(200, 100%, 60%)",
      };
      break;
    }
  }

  // ############################## COMPONENT #########################

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
              placeholder="Write some custom text here..."
            />
          </div>
        </Row>
        <Row>
          <label>Direction</label>
          <div>
            <select onChange={handleDirection}>
              <option>Bottom-Center</option>
              <option>Bottom-Right</option>
              <option>Bottom-Left</option>
              <option>Top-Center</option>
              <option>Top-Right</option>
              <option>Top-Left</option>
            </select>
          </div>
        </Row>
        <Row>
          <label>Type</label>
          <div>
            <TypeButton type="button" onClick={handleTypeChange} color={COLORS}>
              {capitalizeFirstLetter(type)}
            </TypeButton>
          </div>
        </Row>
        <Button type="submit">Click Me</Button>
      </Content>
      <Footer>
        Made by
        <a href="https://giathinhnguyen.com/" target="_blank" rel="noreferrer">
          {" "}
          Gia Thinh Nguyen
        </a>
      </Footer>
      <Snackbar timeout={30000} anchor={direction} type={type} />
      <GlobalStyles />
    </Wrapper>
  );
}

// ########################################################################
// ############################### STYLES #################################
// ########################################################################

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

  @media (min-width: 800px) {
    width: 70%;
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
      font-size: 1rem;
      line-height: 1.6;
      outline: none;
      border: 1px solid rgba(145, 145, 145, 0.5);
      border-radius: 12px;
      width: 80%;
      padding: 0.3rem 0.5rem;
      &::placeholder {
        opacity: 0.5;
      }

      &:focus::placeholder {
        color: transparent;
      }
    }
  }
`;

// ########### HEADER STUFF #############

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
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  font-weight: 100;
  margin: 1rem;
`;

// #################### BUTTONS ###############

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
  outline: none;
  &:hover {
    background-color: hsla(200deg, 100%, 60%, 0.7);
  }
`;

const TypeButton = styled.button`
  text-align: center;
  width: 8rem;
  height: auto;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.color.primary};
  color: #fff;
  border: 1px solid ${(props) => props.color.secondary};
  box-shadow: 1px 2px 5px 0px rgba(145, 145, 145, 0.7);
  border-radius: 12px;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${(props) => props.color.secondary};
  }
`;

// ################ FOOTER ###############

const Footer = styled.div`
  width: 95%;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & a {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    font-weight: bold;

    &:hover {
      color: hsla(200deg, 100%, 60%, 1);
    }
  }
`;

export default App;
