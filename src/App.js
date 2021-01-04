import React from "react";
import styled from "styled-components";
import Snackbar from "./components/Snackbar";
import GlobalStyles from "./components/GlobalStyles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { toggleSnackbarOpen } from "./redux/uiActions";

function App() {
  const dispatch = useDispatch();
  const TYPES = ["default", "success", "warning", "error"];
  const [message, setMessage] = React.useState("");
  const [direction, setDirection] = React.useState("bottom-center");
  const [type, setType] = React.useState("default");
  const [charCount, setCharCount] = React.useState(message.length || 0);

  // ############################ FUNCTIONS ################################

  function handleMessage(ev) {
    setMessage(ev.target.value);
    setCharCount(ev.target.value.length);
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
      <Header />
      <Content onSubmit={handleSubmit}>
        <Row>
          <Label>Message</Label>
          <RowContent>
            <InputField
              type="text"
              value={message}
              onChange={handleMessage}
              placeholder="Write text here..."
            />
            <p>{charCount}</p>
          </RowContent>
        </Row>
        <Row>
          <Label>Direction</Label>
          <RowContent>
            <select onChange={handleDirection}>
              <option>Bottom-Center</option>
              <option>Top-Center</option>
              {charCount <= 50 && (
                <>
                  <option>Bottom-Right</option>
                  <option>Top-Right</option>
                  <option>Bottom-Left</option>
                  <option>Top-Left</option>
                </>
              )}
            </select>
            <p>{charCount > 50 && <span>Disabled L-R</span>}</p>
          </RowContent>
        </Row>
        <Row>
          <Label>Type</Label>
          <RowContent>
            <TypeButton type="button" onClick={handleTypeChange} color={COLORS}>
              {capitalizeFirstLetter(type)}
            </TypeButton>
          </RowContent>
        </Row>
        <Divider />
        <Button type="submit">CLICK ME</Button>
      </Content>
      <Footer />
      <Snackbar timeout={3000} anchor={direction} type={type} />
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
  padding: 2rem 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @media (min-width: 800px) {
    width: 80%;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0;
`;

const RowContent = styled.div`
  flex: 7;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & p {
    font-size: 0.8rem;
    padding-left: 0.5rem;
    & span {
      text-align: center;
      color: red;
    }
  }
`;

const InputField = styled.input`
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
`;

const Label = styled.label`
  flex: 3;
  font-family: "Poppins", sans-serif;
  text-align: center;
  font-weight: bold;
  margin-right: 0.5rem;
  font-size: 1.1rem;
`;

const Divider = styled.div`
  height: 1px;
  width: 80%;
  border-radius: 50%;
  background-color: lightgray;
  margin: 1.5rem;
`;

// #################### BUTTONS ###############

const Button = styled.button`
  text-align: center;
  width: auto;
  height: auto;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  color: #fff;
  /* margin-top: 2rem; */
  background-color: hsla(200deg, 100%, 65%, 0.7);
  border: 1px solid hsla(200deg, 100%, 65%, 0.7);
  box-shadow: 1px 2px 5px 0px rgba(145, 145, 145, 0.7);
  border-radius: 12px;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: hsla(200deg, 100%, 60%, 0.7);
    color: black;
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

export default App;
