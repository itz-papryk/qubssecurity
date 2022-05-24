import React, { useEffect, useRef, useState } from "react";
import "./MainScreen.sass";
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { CSSPlugin } from "gsap/CSSPlugin";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

const mainContent = {
  scan: {
    title: "SCAN",
    content:
      "służy do sprawdzania na żądanie wszystkich plików, folderów i dysków. Skanery mogą być włączane również automatycznie, o zaplanowanych przez nas porach oraz w odpowiedniej konfiguracji. Istnieje również możliwość uruchomienia skanowania w czasie, gdy system nie jest zajęty wykonywaniem innych zadań. Skanery antywirusowe w trakcie przeglądania plików znajdujących się w systemie potrafią rozpoznać charakterystyczne dla wirusów ciągi bitów. Podejrzane pliki są gromadzone, następnie skaner przekazuje informacje o nich do systemu administracyjnego, a ten pozwala użytkownikowi podjąć decyzję co zrobić z danymi plikami. Poza wyszukiwaniem sygnatur skanery potrafią korzystać z bardziej złożonych metod poszukiwania wirusów. Do metod tych należy analiza heurystyczna, wykrywanie wirusów polimorficznych, skanowanie rekurencyjne.służy do sprawdzania na żądanie wszystkich plików, folderów i dysków. Skanery mogą być włączane również automatycznie, o zaplanowanych przez nas porach oraz w odpowiedniej konfiguracji. Istnieje również możliwość uruchomienia skanowania w czasie, gdy system nie jest zajęty wykonywaniem innych zadań. Skanery antywirusowe w trakcie przeglądania plików znajdujących się w systemie potrafią rozpoznać charakterystyczne dla wirusów ciągi bitów. Podejrzane pliki są gromadzone, następnie skaner przekazuje informacje o nich do systemu administracyjnego, a ten pozwala użytkownikowi podjąć decyzję co zrobić z danymi plikami. Poza wyszukiwaniem sygnatur skanery potrafią korzystać z bardziej złożonych metod poszukiwania wirusów. Do metod tych należy analiza heurystyczna, wykrywanie wirusów polimorficznych, skanowanie rekurencyjne.",
  },
  scam: {
    title: "SCAM",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloremque ex laudantium molestias nobis quae quis recusandae vitae voluptatem voluptatibus! Asperiores enim eveniet maiores nisi non numquam placeat quasi, rerum.\n",
  },
  internet: {
    title: "INTERNET",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloremque ex laudantium molestias nobis quae quis recusandae vitae voluptatem voluptatibus! Asperiores enim eveniet maiores nisi non numquam placeat quasi, rerum.\n",
  },
  about: {
    title: "O APCE",
    content:
      "Programy antywirusowe często są wyposażone w dwa niezależnie funkcjonujące moduły, przy czym różni producenci stosują różne nazewnictwo:\n" +
      "\n" +
      "skaner – bada pliki na żądanie lub co jakiś czas; służy do przeszukiwania zawartości urządzeń pamięci masowej (np. dysk twardy, pendrive); mogą także typować pliki jako zawierające podejrzany kod za pomocą metod heurystycznych.\n" +
      "monitor/skaner rezydentny – bada pliki w sposób samoczynny; służy do kontroli bieżących operacji komputera.\n" +
      "Programy antywirusowe mają możliwość aktualizacji definicji nowo odkrytych wirusów, często na bieżąco, przez pobranie ich z serwerów producenta oprogramowania za pośrednictwem Internetu.",
  },
};

export default function MainScreen(props) {
  let nav = useRef(null);
  const [navNumber, setNavNumber] = useState(null);

  gsap.registerPlugin(CSSPlugin, CSSRulePlugin);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".main-wrapper", { opacity: 1, duration: 0.5 });
  }, []);

  const handleNavMouseEnter = (e) => {
    const target = CSSRulePlugin.getRule(`#nav-link${e}::before`);
    const tl = gsap.timeline();

    tl.to(target, {
      width: "100%",
      duration: 0.5,
    });
  };

  const handleNavMouseLeave = (e) => {
    const target = CSSRulePlugin.getRule(`#nav-link${e}::before`);
    const tl = gsap.timeline();

    tl.to(target, {
      width: "0%",
      duration: 0.5,
    });
  };

  const handleNavOnClick = (number) => {
    console.log(navNumber);
    const tl = gsap.timeline();

    if (navNumber === null) {
      tl.to(".main-content", { borderWidth: 3, duration: 0.5 })
        .to(
          ".main-content",
          { width: "100%", padding: "1em", duration: 1.5 },
          "-=.5"
        )
        .to(".context", { opacity: 1, duration: 1 }, "-=1.5");
    } else if (number !== navNumber) {
      tl.to(".main-content", { width: "0%", padding: 0, duration: 1.5 })
        .to(".context", { opacity: 0, duration: 1 }, "-=1.5")
        .to(".main-content", { width: "100%", padding: "1em", duration: 1.5 })
        .to(".context", { opacity: 1, duration: 1 }, "-=1.5");
    }
    setNavNumber(number);
  };

  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <div className="main-nav">
          <ul>
            <NavLink
              ref={(e) => (nav = e)}
              to={"/qubssecurity/scan"}
              onClick={() => handleNavOnClick(1)}
              onMouseEnter={() => handleNavMouseEnter(1)}
              onMouseLeave={() => handleNavMouseLeave(1)}
              id="nav-link1"
            >
              <li>scan</li>
            </NavLink>
            <NavLink
              ref={(e) => (nav = e)}
              to="/qubssecurity/scam"
              id="nav-link2"
              onClick={() => handleNavOnClick(2)}
              onMouseEnter={() => handleNavMouseEnter(2)}
              onMouseLeave={() => handleNavMouseLeave(2)}
            >
              <li>scam</li>
            </NavLink>
            <NavLink to={"/qubssecurity/"}>
              <h1>
                QUBS
                <br />
                SECRUITY
              </h1>
            </NavLink>
            <NavLink
              ref={(e) => (nav = e)}
              to="/qubssecurity/about"
              id="nav-link3"
              onClick={() => handleNavOnClick(3)}
              onMouseEnter={() => handleNavMouseEnter(3)}
              onMouseLeave={() => handleNavMouseLeave(3)}
            >
              <li>about</li>
            </NavLink>
            <NavLink
              ref={(e) => (nav = e)}
              to="/qubssecurity/buynow"
              id="nav-link4"
              onClick={() => handleNavOnClick(4)}
              onMouseEnter={() => handleNavMouseEnter(4)}
              onMouseLeave={() => handleNavMouseLeave(4)}
            >
              <li className="align-center">
                KUP
                <br />
                TERAZ!
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="main-content">
          <div className="context">
            <Routes>
              <Route
                path="/qubssecurity/scan"
                element={
                  <>
                    <TextComponent mainContenten={"scan"} />{" "}
                    <BuyNowButton text={"SKANUJ"} />
                  </>
                }
              />
              <Route
                path="/qubssecurity/scam"
                element={<TextComponent mainContenten={"scam"} />}
              />

              <Route
                path="/qubssecurity/about"
                element={<TextComponent mainContenten={"about"} />}
              />
              <Route
                path="/qubssecurity/buynow"
                element={
                  <>
                    <BuyNowButton text={"KUP TERAZ!!!"} />
                  </>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

const BuyNowButton = ({ text }) => {
  const [isBought, setIsBought] = useState(false);
  return (
    <div className="buy-now">
      <div className="buy-now-button" onClick={() => setIsBought(!isBought)}>
        {text}
      </div>
      <div className="buy-now-price">100$ za miesiąc</div>
      <div className="buy-now-text">{isBought && "KUPIONO!"}</div>
    </div>
  );
};

const TextComponent = ({ mainContenten }) => {
  const { scan, about, internet, scam } = mainContent;
  return (
    <>
      <div className={"context-title"}>
        <h1>
          {mainContenten === "scan"
            ? scan.title
            : mainContenten === "about"
            ? about.title
            : mainContenten === "internet"
            ? internet.title
            : mainContenten === "scam" && scam.title}
        </h1>
      </div>
      <div>
        <p>
          {mainContenten === "scan"
            ? scan.content
            : mainContenten === "about"
            ? about.content
            : mainContenten === "internet"
            ? internet.content
            : mainContenten === "scam" && scam.content}
        </p>
      </div>
    </>
  );
};
