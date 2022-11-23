import { useRef } from "react";
export function MapItem({ resx }: any) {
  return (
    <div>
      {resx.map(function (item: any, index: any) {
        return (
          <div id="group_m4" key={index}>
            <div id="m4_msg">
              <p>{item.message}</p>
            </div>
            <p id="time">{item.timestamp}</p>
            <p id="user">{item.username}</p>
          </div>
        );
      })}
    </div>
  );
}
