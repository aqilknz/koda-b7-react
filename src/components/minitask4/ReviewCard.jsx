import React from 'react'

function ReviewCard({ data }) {
  if (!data.email && !data.review) {
    return null
  };

  return (
    <div className="mt-8 w-full max-w-lg p-6 bg-white rounded-xl shadow-lg border-t-4 border-l-4 border-pink-600">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Review</h2>
      
      <div className="space-y-4">
        <div className="pb-3 border-b border-gray-100">
          <span className="text-xs font-black text-pink-600 uppercase">Email</span>
          <p className="text-gray-700 font-medium">{data.email}</p>
        </div>
        
        <div>
          <span className="text-xs font-black text-pink-600 uppercase">Review</span>
          <p className="text-gray-600 italic">"{data.review}"</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard