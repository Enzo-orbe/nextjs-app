import React from "react";
import { css } from "@emotion/core";

export default function Error404() {
  return (
    <div>
      <h1
        css={css`
          margin-top: 5rem;
          text-align: center;
        `}
      >
        Nesecitas iniciar sesion para ingresar a esta pagina
      </h1>
    </div>
  );
}
