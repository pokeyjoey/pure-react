import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import './index.css';

// add the tweet prop, destructured
function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <NameWithHandle author={tweet.author}/>
        <Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton count={tweet.retweets}/>
          <LikeButton count={tweet.likes}/>
          <MoreOptionsButton/>
        </div>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.shape ({
    message: PropTypes.string,
    gravatar: PropTypes.string,
    author: PropTypes.shape({
      handle: PropTypes.string,
      name: PropTypes.string
    }),
    likes: PropTypes.number,
    retweets: PropTypes.number,
    timestamp: PropTypes.string
  })
}

function Avatar( { hash }) {
  var url = `https://www.gravatar.com/avatar/${hash}`
  return (
    <img
      src={url}
      className="avatar"
      alt="avatar" />
  );
}

Avatar.propTypes = {
  hash: PropTypes.string
};

function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  );
}

Message.propTypes = {
  text: PropTypes.string
};

function NameWithHandle( {author} ) {
  return (
    <span className="name-width-handle">
      <span className="name">{author.name}</span>
      <span className="handle">{author.handle}</span>
    </span>
  );
}

NameWithHandle.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired
  }).isRequired
};

const Time = ( {time} ) => {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">
      {timeString}
    </span>
  );
};

Time.propTypes = {
  time: PropTypes.string
};

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);

function getRetweetCount(count) {
  if (count > 0) {
    return (
      <span className="retweet-count">
        {count}
      </span>
    );
  } else {
    return null;
  }
}

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet"/>
      {getRetweetCount(count)}
  </span>
);

RetweetButton.propTypes = {
  count: PropTypes.number
};

const LikeButton = ( { count } ) => (
  <span className="like-button">
    <i className="fa fa-heart"/>
    {count > 0 && 
      <span className="like-count">
        {count}
      </span>}
  </span>
);

LikeButton.propTypes = {
  count: PropTypes.number
};

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);

var testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person"
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37"
};

ReactDOM.render(<Tweet tweet={testTweet}/>,
  document.querySelector('#root')
);
