import React from "react";
import "../App.css";
import Mensen1 from "../Websidefoto/mensen/O45A0207mensen.JPG";
import Mensen2 from "../Websidefoto/mensen/O45A0199mensen.JPG";
import Blekksprut from "../Websidefoto/blekksprut/Blekksprut.JPG";
import Blekksprut1 from "../Websidefoto/blekksprut/blekksprutdetalj.JPG";
import Sculpture from "../components/Sculpture";

export default function HomePage() {
  return (
    <div>
      <div>
      <Sculpture
          url={Blekksprut1}
          url1={Blekksprut}
          alt="blekksprut"
          title="Blekksprut"
          accessibility="Unavailable"
          text={" When I was a little girl, I once saw a white octopus while snorkelling. My parents never believed me. As an adult, I learnt that the octopus actually loses its color when it dies. I preferred to make one in color though."}
          width="273"
          height="170"
          photographer="Marie von Krogh"
        ></Sculpture>
        <Sculpture
          url={Mensen1}
          url1={Mensen2}
          alt="Mensen1"
          title="MENSEN"
          accessibility="Available"
          text={" When I was a little girl, I once saw a white octopus while snorkelling. My parents never believed me. As an adult, I learnt that the octopus actually loses its color when it dies. I preferred to make one in color though."}
          width="273"
          height="170"
          photographer="Marie von Krogh"
        ></Sculpture>
      </div>
    </div>
  );
}
