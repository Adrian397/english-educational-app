import { StyledProps } from "@utils/styledProps";
import styled from "styled-components";

export const Score = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  p:nth-of-type(1) {
    font-size: 1.7rem;
  }

  strong {
    color: #be63f9;
  }
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

export const Heading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Quiz = styled.div<StyledProps>`
  position: relative;
  width: 60rem;
  height: ${({ isCompleted }) => (isCompleted ? "436px" : "auto")};
  background-color: #eee5fd;
  border-radius: 8px;
  padding: 2rem;

  button {
    padding: 0.5rem 1.5rem;
    letter-spacing: 0.2px;
    border-radius: 8px;
    border: none;
    background-color: #be63f9;
    color: #f5e6fe;
    font-weight: bold;
    cursor: pointer;
    transition: all 120ms ease;
    text-transform: uppercase;
  }

  h3 {
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    color: #333;
    margin-bottom: 2rem;
    line-height: 1.5;
    font-weight: 500;
  }
`;

export const Questions = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    text-align: left;
    padding: 1rem;
    background-color: white;
    line-height: 1.5;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    color: #333;
    text-transform: uppercase;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
`;
