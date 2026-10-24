import AboutHospital from "@/components/home/AboutHospital";
import Doctors from "@/components/home/Doctros";
import Empanelments from "@/components/home/Empanelments";
import Gallery from "@/components/home/Gallery";
import GetInTouch from "@/components/home/GetInTouch";
import GoogleReviews from "@/components/home/GoogleReviews";
import HeroVideo from "@/components/home/HeroVideo";
import Services from "@/components/home/Services";


export default function Home() {
  return (
    <div >
       <HeroVideo />
       <AboutHospital />
       <Services/>
        <Doctors />
        <Empanelments />
        <Gallery />
        {/* <GoogleReviews /> */}
        <GetInTouch/>
    </div>
  );
}
