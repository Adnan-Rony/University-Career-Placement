import { ArrowRight, Zap } from "lucide-react"

export const AssesmentBanner = () => {
  return (
<div className="md:py-16 relative w-full overflow-hidden bg-gradient-to-br from-purple-100 via-[#F1E7FB] to-[#EFE2F8]">
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#9B00FF]/20 blur-3xl animate-pulse" />
    <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#6300B3]/20 blur-3xl animate-pulse animation-delay-2000" />
  </div>

  <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28 lg:px-8">
    <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
      <div className="space-y-8">
        <div className="inline-flex
         items-center gap-2 rounded-full border
          border-[#6300B3]/30 bg-[#6300B3]/10 px-4 py-2
           backdrop-blur animate-fade-in">
          <Zap className="h-4 w-4 text-[#9B00FF]" />
          <span className="text-sm font-medium text-[#333333]">Professional Skill Assessment Platform</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#333333] animate-slide-up">
            Assess Your Skills,{" "}
            <span className="bg-gradient-to-r from-[#9B00FF] to-[#6300B3] bg-clip-text text-transparent animate-gradient">
              Build Your Career
            </span>
          </h1>
          <p className="text-lg text-[#333333]/70 animate-slide-up animation-delay-200">
            Master multiple skill categories through interactive quizzes. Get instant feedback, track your progress,
            and showcase your expertise to potential employers.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up animation-delay-300">
          <button
            href="#categories"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#6300B3] text-[#F1E7FB] px-8 py-3 font-semibold transition-all duration-300 hover:bg-[#6300B3]/90 hover:shadow-lg hover:shadow-[#6300B3]/20 active:scale-95"
          >
            Start Assessment
            <ArrowRight className="h-5 w-5" />
          </button>
          <button className="inline-flex items-center justify-center rounded-lg border border-[#6300B3]/30 px-8 py-3 font-semibold text-[#333333] transition-all duration-300 hover:bg-[#6300B3]/5 hover:border-[#6300B3]/50">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-8 animate-slide-up animation-delay-400">
          <div className="space-y-2">
            <p className="text-2xl sm:text-3xl font-bold text-[#6300B3]">100+</p>
            <p className="text-sm text-[#333333]/70">Questions</p>
          </div>
          <div className="space-y-2">
            <p className="text-2xl sm:text-3xl font-bold text-[#6300B3]">10+</p>
            <p className="text-sm text-[#333333]/70">Quizzes</p>
          </div>
          <div className="space-y-2">
            <p className="text-2xl sm:text-3xl font-bold text-[#6300B3]">4</p>
            <p className="text-sm text-[#333333]/70">Categories</p>
          </div>
        </div>
      </div>

      <div className="relative hidden lg:block ">
        <div className="relative h-96
         bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVhcm5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500')] bg-cover bg-center
         rounded-2xl bg-gradient-to-br from-[#6300B3]/20 to-[#9B00FF]/20 border border-[#6300B3]/30 backdrop-blur-sm overflow-hidden animate-float">
          <div className="absolute inset-0 bg-grid-pattern opacity-50" />
          <div
            className="absolute top-8 left-6 h-24 w-32 rounded-lg bg-[#EFE2F8] border border-[#6300B3]/30 shadow-lg animate-bounce"
            
          >
            <div className="p-4 space-y-2">
              <div className="h-2 w-12 rounded bg-[#6300B3]/40" />
              <div className="h-2 w-20 rounded bg-[#6300B3]/20" />
              <div className="h-2 w-16 rounded bg-[#6300B3]/10" />
            </div>
          </div>

          <div
            className="absolute bottom-8 right-6 h-24 w-32 rounded-lg bg-[#EFE2F8] border border-[#9B00FF]/30 shadow-lg animate-bounce"
            
          >
            <div className="p-4 space-y-2">
              <div className="h-2 w-12 rounded bg-[#9B00FF]/40" />
              <div className="h-2 w-20 rounded bg-[#9B00FF]/20" />
              <div className="h-2 w-16 rounded bg-[#9B00FF]/10" />
            </div>
          </div>

          <div className="absolute top-1/2 right-4 h-20 w-20 rounded-full bg-gradient-to-br from-[#6300B3]/30 to-[#9B00FF]/30 blur-2xl animate-pulse" />
        </div>
      </div>
    </div>
  </div>

  <div className="relative z-10 flex justify-center
   pb-8 animate-bounce " >
    <div className="text-[#333333]/70 text-sm"
    >Scroll to explore</div>
  </div>
</div>

  )
}
