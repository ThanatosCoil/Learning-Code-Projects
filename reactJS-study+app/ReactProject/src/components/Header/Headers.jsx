import { useEffect, useState } from "react";
import logo from "/vite.svg";
import { styled } from "styled-components";
// import "./Headers.css";

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

export default function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
      console.log("cleaning...");
    };
  }, []);

  return (
    <HeaderContainer>
      <img src={logo} alt="LOX" />
      <span>Time: {time.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
