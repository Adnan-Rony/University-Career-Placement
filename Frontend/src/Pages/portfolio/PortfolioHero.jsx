import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ensure react-router-dom
import Button from "../../Components/Ui/Button";

export default function PortfolioHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className=" relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 " />

      <div className=" relative z-10 max-w-6xl mx-auto
       px-4 sm:px-6 lg:px-8 ">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-purple-100 text-purple-700 border border-purple-200">
                Create Your Professional Portfolio
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 bg-clip-text text-transparent">
                Build Your Career Story
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Showcase your skills, projects, and achievements with a
              professionally designed portfolio in minutes. Stand out to
              employers and clients.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/portfolio-builder/create" className="w-full sm:w-auto">
                <Button size="lg" variant="gradient" className="py-6">
                  Start from Scratch
                </Button>
              </Link>

              <Link to="/" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="py-6">
                  Use Existing Data
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/40">
              <div>
                <div className="text-2xl font-bold text-purple-600">5000+</div>
                <p className="text-sm text-muted-foreground">
                  Portfolios Created
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">98%</div>
                <p className="text-sm text-muted-foreground">
                  User Satisfaction
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <p className="text-sm text-muted-foreground">
                  Support Available
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div
            className={`space-y-4 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Card 1 - Start from Scratch */}
            <div className="group bg-card/50 backdrop-blur-sm border border-purple-200 rounded-xl p-6 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-lg group-hover:bg-purple-200 transition-colors">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">
                    Start from Scratch
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out an intuitive 8-step form covering personal info,
                    skills, experience, projects, and achievements.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {["Personal Info", "Education", "Skills"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Use Existing Data */}
            <div className="group bg-card/50 backdrop-blur-sm border border-indigo-200 rounded-xl p-6 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-lg group-hover:bg-indigo-200 transition-colors">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">
                    Auto-Generate Portfolio
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Instantly generate a professional portfolio from your
                    existing profile data. Perfect for quick setup.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {["Auto-fill", "Fast", "Easy"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-indigo-100 text-indigo-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Features */}
            <div className="group bg-card/50 backdrop-blur-sm border border-purple-200 rounded-xl p-6 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-lg group-hover:bg-purple-200 transition-colors">
                  ✓
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">
                    Rich Features
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Preview in real-time, edit any section, download as PDF, and
                    share your portfolio online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
