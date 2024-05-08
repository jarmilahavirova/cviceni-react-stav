import { useCasVSekundach } from "./hodiny";

/*
Zadání: Pomocí předchystané stavové proměnné, která se mění každou sekundu, zobraz aktuální čas
  ve formátu 7:49:05.

Nápověda: Pokud je v `casVSekundach` nula, pak je 0:00:00. Pokud je v `casVSekundach` 60, pak je
  0:01:00. Pokud je v `casVSekundach` 67, pak je 0:01:07.
*/

export const ZaverecnyBonus3 = () => {
  const casVSekundach = useCasVSekundach();
  const sekundy = String(casVSekundach % 60).padStart(2, 0);
  const minuty = String(Math.floor(casVSekundach / 60) % 60).padStart(2, 0);
  const hodiny = Math.floor(casVSekundach / 3600);

  return (
    <>
      Čas právě teď: <b>{`${hodiny}:${minuty}:${sekundy}`}</b>
    </>
  );
};
