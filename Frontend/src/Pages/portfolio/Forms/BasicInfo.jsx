import { User, Mail, Phone, MapPin, ImageIcon, FileText } from 'lucide-react';
import { UseMyPortfolio } from '../../../hooks/usePortfolio';
import { ImageUpload } from './ImageUpload';

const BasicInfo = ({ register,portfolioData ,setValue}) =>
  
  
  
{  return (

  <section className="relative overflow-hidden border
   border-gray-200 rounded-xl p-4">
    {/* Header */}
    <div className="mb-8 pb-6 border-b border-gray-200">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg">
          <User className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-800 bg-clip-text text-transparent">
          Basic Information
        </h2>
      </div>
     
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Full Name */}
      <div className="lg:col-span-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Full Name
        </label>
        <input
          {...register("basicInfo.name")}
          
          placeholder="Enter your full name"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
        />
      </div>

      {/* Professional Title */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Professional Title
        </label>
        <input
          {...register("basicInfo.title")}
          placeholder="e.g., Product Designer"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
        />
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-500" />
          Location
        </label>
        <input
          {...register("basicInfo.location")}
          placeholder="City, Country"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <Mail className="w-4 h-4 text-gray-500" />
          Email
        </label>
        <input
          {...register("basicInfo.email")}
          type="email"
          placeholder="your.email@example.com"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <Phone className="w-4 h-4 text-gray-500" />
          Phone
        </label>
        <input
          {...register("basicInfo.phone")}
          type="tel"
          placeholder="+1 (555) 000-0000"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
        />
      </div>

      {/* Short Bio */}
      <div className="lg:col-span-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <FileText className="w-4 h-4 text-gray-500" />
          Short Bio
        </label>
        <textarea
          {...register("basicInfo.bio")}
          placeholder="A brief headline about you (50-100 characters)"
          maxLength={120}
          rows={2}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
        />
        <p className="text-xs text-gray-500 mt-1">Keep it concise and impactful</p>
      </div>

      {/* About Yourself */}
      <div className="lg:col-span-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <FileText className="w-4 h-4 text-gray-500" />
          About Yourself
        </label>
        <textarea
          {...register("basicInfo.about")}
          placeholder="Tell us more about your background, experience, and what you're passionate about..."
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
        />
        <p className="text-xs text-gray-500 mt-1">Share your story in 2-3 paragraphs</p>
      </div>

      {/* Profile Image URL */}
      {/* <div className="lg:col-span-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <ImageIcon className="w-4 h-4 text-gray-500" />
          Profile Image URL
        </label>
        <input
          {...register("basicInfo.picture")}
          placeholder="https://example.com/image.jpg"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
        />
       
      </div> */}

      <div className="lg:col-span-2">
  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
    <ImageIcon className="w-4 h-4 text-gray-500" />
    Profile Image
  </label>

  <ImageUpload
    value={portfolioData?.basicInfo?.picture} 
    onChange={(url) => setValue("basicInfo.picture", url)} 
  />
</div>
    </div>
  </section>
);}

export default BasicInfo;
