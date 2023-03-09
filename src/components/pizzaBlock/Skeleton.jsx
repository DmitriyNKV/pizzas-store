import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="121" cy="126" r="121" />
    <rect x="47" y="113" rx="0" ry="0" width="0" height="1" />
    <rect x="1" y="260" rx="15" ry="15" width="255" height="25" />
    <rect x="0" y="310" rx="15" ry="15" width="260" height="88" />
    <rect x="0" y="419" rx="15" ry="15" width="95" height="30" />
    <rect x="117" y="412" rx="24" ry="24" width="144" height="45" />
  </ContentLoader>
);

export default Skeleton;
