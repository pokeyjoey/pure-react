import React from 'react';
import PropTypes from 'prop-types';

const FileIcon = ({type}) => {
  let icon = null;

  switch(type) {
      case "folder":
        icon = "fa-folder";
        break;
      case "file":
        icon = "fa-file-text-o";
        break;
      default:
        throw new Error("File types can be of only folder or file");
  };

  return (
    <span>
      <i className={`fa ${icon}`}/>
    </span>
  );
}
FileIcon.propTypes = {
  type: PropTypes.string.isRequired
};

export default FileIcon;
