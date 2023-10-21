import { Card } from "@/components/home/Card";

const Home = () => {
  return (
    <main className="px-10 py-20 mx-auto h-screen bg-neutral-100">
      <div className="sm:container md:mx-auto h-full">
        <div className="flex flex-col md:flex-row gap-8 h-full">
          <div className="md:basis-1/2">
            <h1 className="text-4xl">Dungeons & Dragons Rules Index</h1>
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
