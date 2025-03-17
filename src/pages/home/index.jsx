import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router";
import profileImg from "../../assets/thousandyard.jpg";
import { Sun, Moon } from "lucide-react";

import "./styles.css";

export function Home() {
  const { toggleTheme } = useTheme();

  return (
    <>
      <div id="container">
        <img id="image" src={profileImg} alt="" width={112} />

        <h1 className="title">@vtrvitrola</h1>

        <label className="switch">
          <input type="checkbox" onClick={toggleTheme} />
          <span className="slider round"></span>
        </label>

        <div id="botoes">
          <button className="botaoLink">Inscreva-se no NLW</button>
          <button className="botaoLink">Baixe meu e-book</button>
          <button className="botaoLink">Veja meu portifólio</button>
          <button className="botaoLink">Conheça o explorer</button>
        </div>
      </div>
      <Link to="/about">About</Link>
    </>
  );
}
