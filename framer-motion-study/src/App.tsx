import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
} from "motion/react";
import PulsingButton from "./components/PulsingButton";
import BouncingLoader from "./components/BouncingLoader";
import { useState } from "react";
import { variants } from "./variants";
import FlippingCard from "./components/FlippingCard";
import AnimatedCard from "./components/AnimatedCard";
import StaggerAnimation from "./components/StaggerAnimation";
import ImageGallery from "./components/AnimatedGallery";
import RangeSlider from "./components/RangeSlider";
import DraggableBox from "./components/DraggableBox";
import ScrollAnimation from "./components/ScrollAnimation";
import AnimationComponent from "./components/AnimationComponent";
import SwipeableCard from "./components/SwipeableCard";
import GestureBasedImageGallery from "./components/GestureBasedImageGallery";
import Carousel from "./components/Carousel";
import Sidebar from "./components/Sidebar";

import ScrollCarousel from "./components/ScrollCarusel";
import StickyNav from "./components/StickyNav";
import ProgressSteps from "./components/ProgressSteps";
import { useCounterStore } from "./store";
import CountComponent from "./components/CountComponent";

const demoOptions = [
  { label: "Counter Demo", value: "counter" },
  { label: "Pulsing Button", value: "pulsing" },
  { label: "Bouncing Loader", value: "bouncing" },
  { label: "Flipping Card", value: "flipping" },
  { label: "Animated Card", value: "animatedCard" },
  { label: "Stagger Animation", value: "stagger" },
  { label: "Animated Gallery", value: "gallery" },
  { label: "Range Slider", value: "slider" },
  { label: "Draggable Box", value: "draggable" },
  { label: "Scroll Animation", value: "scrollAnim" },
  { label: "Animation Component", value: "animComponent" },
  { label: "Swipeable Card", value: "swipeable" },
  { label: "Gesture Image Gallery", value: "gestureGallery" },
  { label: "Carousel", value: "carousel" },
  { label: "Sidebar", value: "sidebar" },
  { label: "Scroll Carousel", value: "scrollCarousel" },
  { label: "Sticky Nav", value: "stickyNav" },
  { label: "Progress Steps", value: "progressSteps" },
];

const App = () => {
  const [selectedDemo, setSelectedDemo] = useState("counter");
  const count = useCounterStore((state) => state.count);

  let content: React.ReactNode = null;
  switch (selectedDemo) {
    case "counter":
      content = (
        <div>
          <h1>Count:{count}</h1>
          <CountComponent />
        </div>
      );
      break;
    case "pulsing":
      content = <PulsingButton />;
      break;
    case "bouncing":
      content = <BouncingLoader />;
      break;
    case "flipping":
      content = <FlippingCard />;
      break;
    case "animatedCard":
      content = <AnimatedCard />;
      break;
    case "stagger":
      content = <StaggerAnimation />;
      break;
    case "gallery":
      content = <ImageGallery />;
      break;
    case "slider":
      content = <RangeSlider />;
      break;
    case "draggable":
      content = <DraggableBox />;
      break;
    case "scrollAnim":
      content = <ScrollAnimation />;
      break;
    case "animComponent":
      content = (
        <div>
          <AnimationComponent />
          <div className="h-[500vh] w-full"></div>
        </div>
      );
      break;
    case "swipeable":
      content = <SwipeableCard />;
      break;
    case "gestureGallery":
      content = <GestureBasedImageGallery />;
      break;
    case "carousel":
      content = <Carousel />;
      break;
    case "sidebar":
      content = <Sidebar />;
      break;
    case "scrollCarousel":
      content = <ScrollCarousel />;
      break;
    case "stickyNav":
      content = <StickyNav />;
      break;
    case "progressSteps":
      content = <ProgressSteps />;
      break;
    default:
      content = null;
  }

  return (
    <div>
      {content}
      <div
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1000,
          background: "white",
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          padding: 8,
        }}
      >
        <select
          value={selectedDemo}
          onChange={(e) => setSelectedDemo(e.target.value)}
          style={{ padding: "4px 8px", borderRadius: 4, color: "#222" }}
        >
          {demoOptions.map((opt) => (
            <option key={opt.value} value={opt.value} style={{ color: "#222" }}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default App;
