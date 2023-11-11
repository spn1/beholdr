import { Card } from "@/components/home/Card";

const Home = () => {
  return (
    <main className="p-10 md:py-20 mx-auto h-screen bg-neutral-100">
      <div className="sm:container h-full md:mx-auto">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
          <div className="md:basis-1/2 align-middle text-center">
            <h1 className="text-6xl mb-4">D&D 5e Rules Glossary</h1>
            <p className="text-2xl">
              Find the perfect creature to challenge your players, spell to
              cause destruction, or item to reward ingenuity
            </p>
          </div>
          <div className="md:basis-1/2 align-middle">
            <img
              src="/images/tome.png"
              alt="beholder"
              className="aspect-square w-96 h-96 mx-auto drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
