import { ways } from "../data";
import Teach from "./Teach";

export default function TeachingSection() {
  return (
    <section>
      <h3>Обучение</h3>
      <ul>
        {ways.map((way) => (
          <Teach key={way.title} {...way} />
        ))}
      </ul>
    </section>
  );
}
