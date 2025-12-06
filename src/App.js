import "./App.scss";
import FeaturesCarousel from "./FeaturesCarousel";
import Features from "./Features";
import PromoCard from "./PromoCard";
import "./promoCard.scss";
import "./features.scss";
import useIsMobile from "./useIsMobile";
import dataJson from "./data.json";

function App() {
  const { features } = dataJson;
  const isMobile = useIsMobile();

  return (
    <div className="App">
      <div className="main-container">
        <h1 className="feature-title">Why Open a Demat Account with Choice?</h1>

        {isMobile ? (
          <FeaturesCarousel features={features} />
        ) : (
          <div className="grid-container">
            {features.map((item) => (
              <Features key={item.id} item={item} />
            ))}
            <PromoCard />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
