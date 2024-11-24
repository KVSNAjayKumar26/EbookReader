import React from 'react'

const BookmarkList = ({ bookmarks }) => {
  return (
    <div>
        <h3>Bookmarks</h3>
        <ul>
            {bookmarks.map((bookmark, index) => (
                <li key={index}>{bookmark}</li>
            ))}
        </ul>
    </div>
  );
};

export default BookmarkList;