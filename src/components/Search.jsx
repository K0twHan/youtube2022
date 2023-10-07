import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find a user'/>
      </div>
      <div className="userChat">
        <img src="data:image/jpeg;base64,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" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search