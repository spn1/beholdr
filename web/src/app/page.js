import { Card } from "@/components/home/Card";

const Home = () => {
  return (
    <main className="px-10 py-20 mx-auto h-screen bg-neutral-100">
      <div className="sm:container h-full md:mx-auto">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
          <div className="md:basis-1/2 align-middle">
            <h1 className="text-4xl mb-4">
              Dungeons & Dragons 5th Edition Rules Glossary
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="md:basis-1/2">
            <Card>Creatures</Card>
            <Card>Spells</Card>
            <Card>Items</Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
