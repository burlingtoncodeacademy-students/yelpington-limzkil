import "../App.css";

// component purely to hold the navigation buttons

export default function Nav() {
  return (
    <div id="nav-wrap">
      {/* used <a> instead of <Link> because the page needed to refresh in order for the component to be dynamically rendered  */}
      <a href="/" className="btn">
        Home
      </a>
      <a href="/restaurants/pingala" className="btn">
        Pingala
      </a>
      <a href="/restaurants/revol-kitch" className="btn">
        Revolution Kitchen
      </a>
      <a href="/restaurants/knead" className="btn">
        Knead
      </a>
      <a href="/restaurants/tiny-thai" className="btn">
        Tiny Thai
      </a>
      <a href="/restaurants/stone-soup" className="btn">
        Zabby and Elf's Stone Soup
      </a>
      <a href="/restaurants/pho-hong" className="btn">
        Pho Hong
      </a>
      <a href="/restaurants/sing-peb" className="btn">
        A Single Pebble
      </a>
      <a href="/restaurants/honey-road" className="btn">
        Honey Road
      </a>
    </div>
  );
}
