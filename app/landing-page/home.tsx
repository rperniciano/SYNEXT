import Header from "@/components/header/Header";
import Navigation from "@/components/navigation/navigation";
import WhoAreWe from "@/components/who-are-we-section/who-are-we";

export default function HomePage() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <WhoAreWe></WhoAreWe>
    </div>
  );
}
