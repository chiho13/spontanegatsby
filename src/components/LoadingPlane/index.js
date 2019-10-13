import React from 'react';
import styled, {keyframes} from 'styled-components';

const animatePlane = keyframes`
    to{
        transform:translateY(55px);
    }  
`;


const fade = keyframes`
    0%{ opacity: 0;}
    10%{ opacity: 1;}
    90%{ opacity:1;}
    100%{ opacity:0;}
`;

const move = keyframes`
    from{ 
        left:200px; 
    }
    to{ 
        left:0px; 
    }
`;


const LoadingPlaneStyle = styled.div`
    position:relative;
    display:block; 
    margin:0 auto; 
    width:300px;
    height:200px; 

.plane,
.cloud{
  position:absolute;
}

.plane{ 
  animation-duration: 1s;
  animation-name: ${animatePlane};
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function:linear;
  
  animation-fill-mode:forwards;	   
  display:block;
  margin:0 auto;
  transform: translateY(80px);
  left:30%;
}

.cloud{ 
    animation-duration:10s; 
    animation-name:${move}, ${fade};
    animation-direction: normal;
    animation-iteration-count:infinite;
    animation-timing-function:linear; 
    animation-fill-mode:both;	  
    
    display:block;
    background:url(data:image/svg+xml;base64,PHN2ZyBpZD0iY2xvdWQiIHZpZXdCb3g9IjAgMCA1MiA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MnB4IiBoZWlnaHQ9IjQwcHgiPgoJPGRlZnM+CgkJPGZpbHRlciBpZD0iZjEiIHg9Ii0xMDAlIiB5PSItMTAwJSIgd2lkdGg9IjMwMCUiIGhlaWdodD0iMzAwJSI+IAoJCQk8ZmVPZmZzZXQgcmVzdWx0PSJvdXQiIGluPSJTb3VyY2VHcmFwaGljIiBkeD0iMCIgZHk9IjEiLz4KCQkJPGZlQ29sb3JNYXRyaXggcmVzdWx0PSJvdXQiIGluPSJvdXQiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgIDAgMCAwIDAgMCAgMCAwIDAgMCAwICAwIDAgMCAwLjQgMCIvPgoJCQk8ZmVHYXVzc2lhbkJsdXIgcmVzdWx0PSJvdXQiIGluPSJvdXQiIHN0ZERldmlhdGlvbj0iMiIvPgoJCQk8ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJvdXQiIG1vZGU9Im5vcm1hbCIgcmVzdWx0PSJkcCIvPgoJCTwvZmlsdGVyPgoJPC9kZWZzPiAKCTxwYXRoIGlkPSJmZy1jbG91ZCIgZmlsdGVyPSJ1cmwoI2YxKSIgZD0iTTYuMyAzNS4xQzQuNyAzNC4yLTAuNCAzMi4zIDEuNCAyNSAzLjEgMTguMSA4LjcgMTkuNSA4LjcgMTkuNSA4LjcgMTkuNSAzLjIgMTQuMSAxMC40IDYuOCAxNi45IDAuMiAyMy4xIDQuNiAyMy4xIDQuNiAyMy4xIDQuNiAzMC0xLjcgMzUuMiAyLjQgNDQuNiA5LjcgNDIuOCAyNS4zIDQyLjggMjUuMyA0Mi44IDI1LjMgNDggMjIuNiA0OS44IDI4LjYgNTEgMzIuNyA0NiAzNS44IDQyLjggMzYuNyAzOS43IDM3LjUgOC45IDM2LjYgNi4zIDM1LjFaIiBzdHJva2U9IiNjY2NjY2MiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0iI2ZmZmZmZiIvPgo8L3N2Zz4=);
    height:40px;
    width:53px;
    margin:0 auto;  
  }
  .cloud--small{
    animation-duration:6s; 
    top:65px;
    transform: scaleX(0.5) scaleY(0.5); 
  }
  .cloud--medium{ 
    animation-duration:5s;
    animation-delay:1s;
    top:95px;
    transform: scaleX(0.7) scaleY(0.7); 
  }
  .cloud--large{
    animation-duration:4.5s;
    animation-delay:2.5s;
    top:95px;
    transform: scaleX(0.8) scaleY(0.8); 
  }
`;

function LoadingPlane() {
    return <LoadingPlaneStyle>
        <span class="cloud cloud--small"></span>
        <svg xmlns="http://www.w3.org/2000/svg" id="plane" class="plane" viewBox="0 0 104 47" x="0" y="0" width="104" height="47" background-color="#ffffff00">
            <g id="avion">
                <path d="M20 36C25 38 69 43 80 40 92 38 106 33 104 21 103 13 95 13 90 9 85 5 79 2 76 1 70-1 65 0 60 2 57 3 25 14 23 13 21 12 12 2 9 3 5 4 1 5 1 6 2 7 15 34 20 36Z" fill="#007bff" />
                <path d="M23 36C28 37 69 43 80 40 88 38 98 34 102 29 82 32 22 36 23 36Z" stroke="#ffffff00" stroke-width="1" fill="#12549b" />
                <path d="M42 39C48 40 60 40 67 40 71 32 72 26 72 26L44 29C44 29 44 35 42 39Z" stroke="#ffffff00" stroke-width="1" fill="#0c3b4d" />
                <path d="M7 16C7 16 9 20 10 22 13 27 16 13 16 13L7 16Z" stroke="#ffffff00" stroke-width="1" fill="#0355ad" />
                <path d="M40 29C40 29 41 34 34 42 27 51 48 46 58 39 74 28 72 25 72 25L40 29Z" stroke="#ffffff00" stroke-width="1" fill="#0359b5" />
                <path d="M5 14C5 14 6 15 3 19 1 22 10 20 13 17 19 11 17 11 17 11L5 14Z" stroke="#ffffff00" stroke-width="1" fill="#0b4d93" />
                <path d="M90 10C88 8 83 4 80 3 78 3 68 7 68 8 70 12 80 8 90 10Z" stroke="#ffffff00" stroke-width="1" fill="#0c3b4d" />
                <path d="M89 9C87 7 82 3 79 2 77 2 67 6 67 7 69 11 79 7 89 9Z" stroke="#ffffff00" stroke-width="1" fill="#afe2ff" />
            </g>
        </svg>
        <span class="cloud cloud--medium"></span>
        <span class="cloud cloud--large"></span>
    </LoadingPlaneStyle>
};

export default LoadingPlane;