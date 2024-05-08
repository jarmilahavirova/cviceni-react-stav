import { useState } from "react";
import "./ukazatel-uspechu.css";

/*
Zadání 1: Použij prop `barva` ve style atributu.
Zadání 2: Přidej komponentě číselný stav od nuly do sta, který bude reprezentovat postup.
Zadání 3: Po kliknutí na tlačítko zvětši stav o deset. Nejvýše ale do sta.
Zadání 4. Nastav prvku `ukazatel-uspechu__postup` šířku podle stavové proměnné.
*/

const UkazatelPokroku = ({ barva }) => {
  const [ukazatelStavu, setukazatelStavu] = useState(10);

  const nastavUkazatel = () => {
    if (ukazatelStavu < 100) {
      setukazatelStavu(ukazatelStavu + 10);
    }
  };

  return (
    <div className="ukazatel-uspechu">
      <div className="ukazatel-uspechu__ramecek">
        <div
          className="ukazatel-uspechu__postup"
          style={{
            width: `${ukazatelStavu}%`,
            backgroundColor: barva,
          }}
        ></div>
      </div>
      <button
        onClick={nastavUkazatel}
        disabled={ukazatelStavu >= 100 ? true : false}
      >
        postoupit o 10 %
      </button>
    </div>
  );
};

export const Uloha7 = () => {
  return (
    <>
      <UkazatelPokroku barva="blue" />
      <UkazatelPokroku barva="green" />
      <UkazatelPokroku barva="purple" />
    </>
  );
};
