import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';

interface IFooterBottomShapeProps {
  className?: string;
}

const FooterBottomShape: React.FC<IFooterBottomShapeProps> = ({ className = "" }) => {

  const path1El = useRef<SVGPathElement>(null);
  const path2El = useRef<SVGPathElement>(null);
  
  
  useGSAP(()=>{
    gsap.to(path1El.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
    gsap.to(path2El.current, {
      y: 15,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  });

  return (
    <svg
      viewBox="0 0 338.66666 105.83333"
      version="1.1"
      id="svg1"
      className={className}
    >
      <defs id="defs1" />
      <g id="layer1">
        <path
          ref={path1El}
          style={{ fill: 'none', stroke: '#003380', strokeWidth: '1.47668', strokeOpacity: 1 }}
          d="m 0.30440174,13.56844 c 0,0 32.63015926,-30.436052 60.43282926,8.046197 27.802671,38.482248 40.529089,82.122173 72.284539,87.907003"
          id="path1"
        />
        <path
          ref={path2El}
          style={{ fill: 'none', stroke: '#595fa1', strokeWidth: '1.36257', strokeOpacity: 1 }}
          d="m -1.3930747,49.969052 c 0,0 24.1110277,-34.704666 53.5393517,-31.536413 29.428324,3.168252 19.784979,43.66699 84.036193,47.501662 64.25123,3.834672 93.76482,21.639768 99.62437,45.181379"
          id="path2"
        />
        <path
          style={{ opacity: 1, fill: '#37c8ab', fillOpacity: 1, stroke: 'none', strokeWidth: '1.058', strokeOpacity: 1 }}
          d="m 100.24022,20.847772 7.83162,-5.003718 51.9345,15.252171 -39.1996,30.391867 z"
          id="path15"
        />
        <g id="g15">
          <ellipse
            style={{ opacity: 1, fill: '#ffffff', fillOpacity: 1, stroke: 'none', strokeWidth: '0.851623', strokeOpacity: 1 }}
            id="path4"
            cx="119.00481"
            cy="14.856808"
            rx="1.3927246"
            ry="1.3104075"
          />
          <ellipse
            style={{ opacity: 1, fill: '#ffffff', fillOpacity: 1, stroke: 'none', strokeWidth: '0.851623', strokeOpacity: 1 }}
            id="ellipse4"
            cx="129.28824"
            cy="14.856808"
            rx="1.3927246"
            ry="1.3104075"
          />
          <ellipse
            style={{ opacity: 1, fill: '#ffffff', fillOpacity: 1, stroke: 'none', strokeWidth: '0.851623', strokeOpacity: 1 }}
            id="ellipse5"
            cx="139.66974"
            cy="14.856808"
            rx="1.3927246"
            ry="1.3104075"
          />
          <ellipse
            style={{ opacity: 1, fill: '#ffffff', fillOpacity: 1, stroke: 'none', strokeWidth: '0.851623', strokeOpacity: 1 }}
            id="ellipse10"
            cx="119.00481"
            cy="23.852648"
            rx="1.3927246"
            ry="1.3104075"
          />
          <ellipse
            style={{ opacity: 1, fill: '#ffffff', fillOpacity: 1, stroke: 'none', strokeWidth: '0.851623', strokeOpacity: 1 }}
            id="ellipse11"
            cx="129.28824"
            cy="23.852648"
            rx="1.3927246"
            ry="1.3104075"
          />
          <ellipse
            style={{ opacity: 1, fill: '#ffffff', fillOpacity: 1, stroke: 'none', strokeWidth: '0.851623', strokeOpacity: 1 }}
            id="ellipse12"
            cx="139.66974"
            cy="23.852648"
            rx="1.3927246"
            ry="1.3104075"
          />
          <ellipse
            style={{ opacity: 1, fill: '#ffffff', fillOpacity: 1, stroke: 'none', strokeWidth: '0.851623', strokeOpacity: 1 }}
            id="ellipse13"
            cx="119.00481"
            cy="32.848488"
            rx="1.3927246"
            ry="1.3104075"
          />
          <ellipse
            style={{ opacity: 1, fill: '#ffffff', fillOpacity: 1, stroke: 'none', strokeWidth: '0.851623', strokeOpacity: 1 }}
            id="ellipse14"
            cx="129.28824"
            cy="32.848488"
            rx="1.3927246"
            ry="1.3104075"
          />
          <ellipse
            style={{ opacity: 1, fill: '#ffffff', fillOpacity: 1, stroke: 'none', strokeWidth: '0.851623', strokeOpacity: 1 }}
            id="ellipse15"
            cx="139.66974"
            cy="32.848488"
            rx="1.3927246"
            ry="1.3104075"
          />
        </g>
      </g>
    </svg>
  );
}

export default FooterBottomShape;