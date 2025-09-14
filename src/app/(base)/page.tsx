import {
    HeroSection,
    PainPoint,
    Gamification,
    Features,
    FooterCTA,
    Testimonials,
} from "./components";


const Metadata = {
    title: "Monstro X",
    description: "Monstro X",
}


export async function generateMetadata() {

    return {
        title: Metadata.title,
        description: Metadata.description,
    }
}

export default function Home() {
    return (

        <>

            <HeroSection />
            <Testimonials />
            <PainPoint />
            <Gamification />
            <Features />
            <FooterCTA />
        </>
    );
}