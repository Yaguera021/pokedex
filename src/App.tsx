import Pokedex from "./components/Pokedex";
import SideCard from "./components/SideCard";

function App() {
  return (
    <section className='bg-slate-300 h-screen overflow-y-auto font-playfair'>
      <main className='max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] '>
        <Pokedex />
        <SideCard />
      </main>
    </section>
  );
}

export default App;
