import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-8 justify-center w-full items-center">
        <Hero />
        <Skills />
        <Experience />
      </div>
    </div>
  )
}
