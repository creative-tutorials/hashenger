import React from "react";
export function Toast({ isActive, MessageLog, style }: any) {
  return (
    <div className={isActive ? style.Error : style.Hidden}>
      <p id={style.logs}>{MessageLog}</p>
    </div>
  );
}
