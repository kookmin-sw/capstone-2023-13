import React from 'react';
class mainGdevelop extends React.Component {
  render() {
    return (
      <div>
        <iframe
          title="mainGDevelop"
          src="../../maingdevelop/index.html"
          className="hi"
          width="100%"
          height="1080px"
          position= "absolute"
          top="0"
          left="0"
          z-index="-1"
          pointer-events="none"
        />
      </div>
    );
  }
}

export default mainGdevelop;