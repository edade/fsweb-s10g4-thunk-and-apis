import React, { useState } from "react";

function Item({ data }) {
  const [showPunchline, setShowPunchline] = useState(false);
  return (
    <div
      onClick={() => setShowPunchline(!showPunchline)}
      className="shadow-md bg-white text-center"
    >
      <p className="text-2xl p-10">{data.setup}</p>
      {showPunchline && <p className="text-2xl p-10">{data.punchline}</p>}
    </div>
  );
}

export default Item;
