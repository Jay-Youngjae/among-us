// app/ui/Comment.jsx
import React from "react";

const Comment = ({ time, content }) => {
  const formatTime = (timeString) => {
    const date = new Date(timeString);
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="border-b border-gray-200 py-4">
      <div className="flex justify-between items-start mb-2">
        <span className="text-sm font-semibold text-gray-700">
          익명
        </span>
        <span className="text-xs text-gray-500">
          {formatTime(time)}
        </span>
      </div>
      <p className="text-gray-800 leading-relaxed">{content}</p>
    </div>
  );
};

export default Comment;