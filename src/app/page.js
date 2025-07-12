import Hero from "@/components/Hero";
import About from "@/components/About";
import GameTeaser from "@/components/GameTeaser";
export default function Home() {
  return (
    <>
      <Hero />
      <About
        overline={"About"}
        title={"A Journey Yet to Begin"}
        description={"War & Peace is an upcoming 2D narrative platform that blends emotional storytelling with symbolic visuals.\n Guided by a family’s bond, you'll traverse war-torn landscapes and search for hope among ruins.\n Inspired by art styles like Gris, our game will speak through silence, color, and choice."}
        withTopGradient={true} />
      <About
        overline={"About"}
        title={"A Journey Yet to Begin"}
        description={"War & Peace is an upcoming 2D narrative platform that blends emotional storytelling with symbolic visuals.\n Guided by a family’s bond, you'll traverse war-torn landscapes and search for hope among ruins.\n Inspired by art styles like Gris, our game will speak through silence, color, and choice."}
        isLTR={false} />
      <GameTeaser/>
    </>
  );
}
