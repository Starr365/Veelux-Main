import Button from "./components/shared/Button";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function NotFound() {
    return (
        <main className="min-h-screen text-white relative">
            <Navbar />

            <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center pt-28">
                <div className="relative z-10 flex flex-col items-center">
                    {/* Large 404 Text */}
                    <h1 className="text-[120px] md:text-[180px] lg:text-[240px] font-bold italic text-white leading-none tracking-tighter mb-4 opacity-10">
                        404
                    </h1>

                    {/* Main Message */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight mb-6">
                        Lost in Time?
                    </h2>

                    {/* Description */}
                    <p className="text-white/40 text-sm md:text-base lg:text-[15px] font-light max-w-[400px] mb-10 leading-relaxed">
                        The page you are looking for has slipped through the gears of time.
                        Return to the present and explore our premium collection.
                    </p>

                    {/* Return Button */}
                    <Button href="/">
                        Return To Home
                    </Button>
                </div>
            </div>

            <Footer />
        </main>
    );
}
