import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader 
  className="CakeBlock"
    speed={2}
    width={360}
    height={500}
    viewBox="0 0 360 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="1" y="-6" rx="3" ry="3" width="347" height="267" /> 
    <rect x="441" y="16" rx="0" ry="0" width="3" height="2" /> 
    <rect x="-2" y="294" rx="11" ry="11" width="350" height="21" /> 
    <rect x="11" y="333" rx="0" ry="0" width="3" height="12" /> 
    <rect x="-2" y="332" rx="8" ry="8" width="355" height="100" /> 
    <rect x="8" y="499" rx="0" ry="0" width="30" height="21" /> 
    <rect x="0" y="452" rx="8" ry="8" width="110" height="31" /> 
    <rect x="187" y="446" rx="25" ry="25" width="166" height="39" />
  </ContentLoader>
)

export default Skeleton;