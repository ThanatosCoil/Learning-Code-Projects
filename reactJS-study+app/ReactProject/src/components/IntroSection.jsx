import React from "react";

export default function IntroSection() {
  return (
    <section>
      <h1 className="centered">Результат</h1>
      <h3 className="centered" style={{ color: "#666" }}>
        743197642319786
      </h3>
    </section>
  );
}

// export default function IntroSection() {
//   return React.createElement("section", null, [
//     React.createElement("h1", { className: "centered" }, "Результат"),
//     React.createElement(
//       "h3",
//       { className: "centered", style: { color: "#666" } },
//       "743197642319786"
//     ),
//   ]);
// }
