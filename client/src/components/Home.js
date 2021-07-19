import Map from "./Map.js";
import Nav from "./Nav.js";
import "../App.css";

//home page component with the nav and map components imported
export default function Home() {
  return (
    <>
      <div id="text-wrap">
        <h1>BTVeg!</h1>
        <h2>
          Where to get the best vegan food in the <div id="qc">Queen City</div>
        </h2>
        <h3>Listed and vetted restaurants:</h3>

        <Nav />
      </div>
      <Map />
    </>
  );
}
