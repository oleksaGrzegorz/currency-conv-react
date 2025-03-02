import styled from "styled-components";
import background from "./images/money.png";

export const StyledForm = styled.form`
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  margin: 0 auto;
  max-width: 600px;
  padding: 10px;
  border-radius: 15px;
  text-align: center;
  border: 2px solid black;
  margin-top: 20px;
`;

export const Legend = styled.legend`
  font-style: oblique;
  font-size: 40px;
  background-color: rgb(255, 255, 255);
  border-radius: 60%;
  padding: 2px;
  text-align: center;
  border: 1px dotted;
`;

export const Input = styled.input`
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
`;

export const Select = styled.select`
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px;
  margin-left: 15px;
  background-color: hsl(118, 63%, 66%);
  margin-top: 350px;
  border-radius: 5px;

  &:hover {
    background-color: hsl(118, 63%, 80%);
  }
`;

export const ResultView = styled.p`
  background-color: rgb(180, 244, 182);
  padding: 5px;
  margin: 0 auto;
  max-width: 50%;
  font-size: large;
  border: 1px solid black;
`;

export const Loading = styled.div`
  background-color: white;
  font-size: 30px;
  height: 500px;
  border-radius: 10%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

