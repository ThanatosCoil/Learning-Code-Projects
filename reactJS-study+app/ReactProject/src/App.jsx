import Header from "./components/Header/Headers";
import TeachingSection from "./components/TeachingSection";
import ButtonSection from "./components/ButtonSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import { useState } from "react";
import EffectSection from "./components/EffectSection";

export default function App() {
  const [visible, setVisible] = useState(true);
  const [tab, setTab] = useState("effect");

  // setTimeout(() => {
  //   setVisible(false);
  // }, 3000);

  return (
    <>
      {visible && <Header />}
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === "main" && (
          <>
            <TeachingSection />
            <ButtonSection />
          </>
        )}

        {tab === "feedback" && <FeedbackSection />}

        {tab === "effect" && <EffectSection />}
      </main>
    </>
  );
}
