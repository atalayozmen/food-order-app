import React from "react";


const Logo = React.memo((props) => {
  return (
    <React.Fragment>
        <h1>{props.children}</h1>
    </React.Fragment>
  );
});

export default Logo
