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
        Producto no existente
      </h1>
    </div>
  );
}
