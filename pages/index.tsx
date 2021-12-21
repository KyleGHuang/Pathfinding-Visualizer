import Navbar from "../components/navbar";

export default function Home() {
  return (
    <html lang="en-US">
      <head>
        <meta charSet="utf-8" />
        <title>Pathfinding Visualizer</title>
      </head>
      <div className="w-screen h-full bg-white overflow-x-hidden overflow-y-hidden flex flex-col justify-start items-center space-y-20 mb-16">
        <Navbar></Navbar>
      </div>
    </html>
  );
}
