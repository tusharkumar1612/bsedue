export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-indigo-100 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        {/* Logo Animation */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">B</span>
          </div>
          <span className="text-lg font-bold text-gray-900">
            BSEdu<span className="text-indigo-600">world</span>
          </span>
        </div>
        
        <p className="text-gray-500 text-sm">Loading...</p>
      </div>
    </div>
  );
}

