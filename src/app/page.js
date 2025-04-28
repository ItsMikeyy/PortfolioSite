import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-8 justify-center w-full items-center py-8">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </div>
  )
}
