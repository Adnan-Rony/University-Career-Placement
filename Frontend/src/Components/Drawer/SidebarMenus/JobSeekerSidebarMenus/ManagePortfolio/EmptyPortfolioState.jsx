import { Plus, Briefcase, Sparkles, ArrowRight } from "lucide-react";
import { Link } from 'react-router'

export const EmptyPortfolioState = () => {
  return ( <div className=" min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md border border-gray-200 p-12 rounded-2xl">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center">
          {/* Icon Container */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-40"></div>
              <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 rounded-full p-8 backdrop-blur-sm">
                <Briefcase className="w-12 h-12 text-purple-600 mx-auto" />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Build Your Portfolio
          </h2>

          {/* Subheading */}
          <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed">
            Showcase your best work and impress potential employers. Start creating your portfolio today.
          </p>

          {/* Features List */}
          <div className="mb-8 space-y-3 text-left">
            <div className="flex items-center gap-3 text-gray-700">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-purple-600 text-sm">✓</span>
              </div>
              <span className="text-sm">Highlight your best projects</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-purple-600 text-sm">✓</span>
              </div>
              <span className="text-sm">Stand out to employers</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-purple-600 text-sm">✓</span>
              </div>
              <span className="text-sm">Increase your visibility</span>
            </div>
          </div>

          {/* Primary Button */}
          <Link  to={"/portfolio-builder/create"}
            className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 mb-4"
          >
            <Plus className="w-5 h-5" />
            Create Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>

    
        </div>


      </div>
    </div>)
       
  }
{/* 


    /* <p className="text-gray-500 text-lg">
        You don't have any portfolio yet.
      </p>
      <Link 
      to={"/create-portfolio"}
        
        className="ml-4 px-4 py-2 bg-purple-600 text-white rounded"
      >
        Create Portfolio
      </Link>
      
      
      
      */ }