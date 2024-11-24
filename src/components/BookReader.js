import React, { useState } from 'react'

const BookReader = ( { onBookmark }) => {
    const [content] = useState(`
        Chapter 1: A Beginning
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius...
        `);
        const handleBookmark = () => {
            onBookmark(content.slice(0, 20));
        }
  return (
    <div>
        <div className='book-content'>{content}</div>
        <button className='bookmark-btn' onClick={handleBookmark}>
            Bookmark this page
        </button>
    </div>
  );
};

export default BookReader;