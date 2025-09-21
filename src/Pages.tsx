import Header from "./UI components/Header.tsx";
import Hero from "./UI components/Hero.tsx";
import Carts from "./UI components/Carts.tsx";
import History from "./UI components/History.tsx";
import BussinesLunch from "./UI components/BussinesLunch.tsx";
import Meals from "./UI components/Meals.tsx";
import OurMenu from "./UI components/OurMenu.tsx";
import ReviewPart from "./UI components/ReviewPart.tsx";
import MenuGallery from "./UI components/MenuGallery.tsx";

function Pages() {
    return (
        <>
                <Header/>
                <Hero/>
                <Carts/>
                <History/>
                <BussinesLunch/>
                <Meals/>
                <OurMenu/>
                <ReviewPart/>
                <MenuGallery/>
        </>
    )
}
export default Pages
