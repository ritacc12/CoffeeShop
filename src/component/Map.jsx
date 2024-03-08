//import React from "react";
// import { APIProvider, Map } from "@vis.gl/react-google-maps";

import zIndex from "@mui/material/styles/zIndex";

export default function Location() {
  return (
    <>
      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.1361335502156!2d121.46857630898437!3d25.029453763889993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a841cced1cf3%3A0x96a163c736ef6b99!2z5p2_5qmL55-z6ZuV5YWs5ZyS!5e0!3m2!1szh-TW!2stw!4v1709804631404!5m2!1szh-TW!2stw"
          style={{
            marginTop: "5px",
            width: "650px",
            height: "45vh",
            loading: "lazy",
            borderRadius: "10px",
            referrerpolicy: "no-referrer-when-downgrade",
          }}
        ></iframe>
      </div>
    </>
  );
}
