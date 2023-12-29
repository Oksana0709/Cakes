import React from "react";
import styles from './Header.module.scss'

const Header = () => {
 return (
     <div className={styles.header__section}>

<svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252.72 85.47"> <g id="Слой_2" data-name="Слой 2"> <g id="Слой_1-2" data-name="Слой 1"> <polygon points="9.23 16.05 9.23 1.7 241.52 1.7 241.52 16.05 243.22 16.05 243.22 0 7.53 0 7.53 16.05 9.23 16.05"></polygon> <polygon points="241.52 56.69 241.52 83.77 9.23 83.77 9.23 56.69 7.53 56.69 7.53 85.47 243.22 85.47 243.22 56.69 241.52 56.69"></polygon> <path d="M100.09,66.38a2.54,2.54,0,0,1-.2,1,2.42,2.42,0,0,1-.55.82,2.62,2.62,0,0,1-.82.55,2.55,2.55,0,0,1-1,.2H93.61V59.79h3.58a2.12,2.12,0,0,1,.87.18,2.3,2.3,0,0,1,1.22,1.21,2.26,2.26,0,0,1,.18.9,2.92,2.92,0,0,1-.2,1.08,1.83,1.83,0,0,1-.63.81,2,2,0,0,1,1.1.93A3,3,0,0,1,100.09,66.38ZM95,63.48H97.2a1.07,1.07,0,0,0,.83-.37,1.34,1.34,0,0,0,0-1.76A1.1,1.1,0,0,0,97.2,61H95Zm0,4.19a2.75,2.75,0,0,0,.39,0h2.17a1.06,1.06,0,0,0,.5-.12,1.43,1.43,0,0,0,.42-.31,1.61,1.61,0,0,0,.29-.47,1.86,1.86,0,0,0,.1-.58,1.7,1.7,0,0,0-.1-.57,1.61,1.61,0,0,0-.29-.47,1.43,1.43,0,0,0-.42-.31,1.06,1.06,0,0,0-.5-.12H95Z"></path> <path d="M106.12,68.94h-1.47l3.81-9.15h1.48l3.81,9.15h-1.46l-1.2-2.87h-3.78Zm1.7-4.12h2.75l-1.37-3.3Z"></path> <path d="M122.24,64l4.4,4.92h-1.82l-3.47-4-1.44,1.45v2.57h-1.36V59.79h1.36V64.7l1-1.07,3.81-3.84h1.77Z"></path> <path d="M137.06,59.79V61h-4.25v2.49h3.79v1.25h-3.79v3h4.25v1.25h-5.6V59.79Z"></path> <path d="M150,68.94h-1.69l-2.88-4h-1.6v4h-1.36V59.79h3.72a2.59,2.59,0,0,1,1,.2,2.69,2.69,0,0,1,.84.56,2.65,2.65,0,0,1,.56.82,2.43,2.43,0,0,1,.2,1,2.37,2.37,0,0,1-.14.85,2.44,2.44,0,0,1-.39.73,2.91,2.91,0,0,1-.6.56,2.63,2.63,0,0,1-.76.35Zm-3.81-5.22a1.19,1.19,0,0,0,.52-.11,1.37,1.37,0,0,0,.42-.29,1.26,1.26,0,0,0,.27-.43,1.41,1.41,0,0,0,.11-.54,1.31,1.31,0,0,0-.11-.52,1.41,1.41,0,0,0-.27-.44,1.37,1.37,0,0,0-.42-.29,1.19,1.19,0,0,0-.52-.11H143.8v2.75Z"></path> <path d="M157.38,64.65l-3.23-4.86h1.61l2.29,3.43,2.28-3.43H162l-3.23,4.86v4.29h-1.35Z"></path> <path d="M9.52,40.91a5.86,5.86,0,0,0,2.56-.6,8.58,8.58,0,0,0,2.54-2l2.67,2.53A11,11,0,0,1,13.62,44,9.09,9.09,0,0,1,9.38,45a8.52,8.52,0,0,1-3.68-.8,9.65,9.65,0,0,1-3-2.17,10.19,10.19,0,0,1-2-3.18A10.29,10.29,0,0,1,0,35a9.9,9.9,0,0,1,.75-3.85,10.5,10.5,0,0,1,2-3.16,9.64,9.64,0,0,1,3-2.16,8.83,8.83,0,0,1,3.71-.79,9.11,9.11,0,0,1,3.48.68A10.17,10.17,0,0,1,16.23,28l-2.4,2.91a6.73,6.73,0,0,0-2.17-1.43,6.42,6.42,0,0,0-2.14-.37,5,5,0,0,0-2.12.47,5.52,5.52,0,0,0-1.73,1.25,6,6,0,0,0-1.16,1.87A6.32,6.32,0,0,0,4.09,35a6.21,6.21,0,0,0,.42,2.29,6.09,6.09,0,0,0,1.16,1.86A5.42,5.42,0,0,0,7.4,40.44,5,5,0,0,0,9.52,40.91Z"></path> <path d="M39,31.09a6,6,0,0,1-.26,1.76,5.74,5.74,0,0,1-.72,1.52,5.25,5.25,0,0,1-1.12,1.23,5.92,5.92,0,0,1-1.42.86l6.41,8.21H37.09l-6-7.8H29.26v7.8H25.12V25.33h8.35a5.29,5.29,0,0,1,2.16.45A5.45,5.45,0,0,1,37.41,27,5.92,5.92,0,0,1,39,31.09Zm-6.08,2a1.85,1.85,0,0,0,1.36-.59,2,2,0,0,0,.57-1.43,2,2,0,0,0-.57-1.41A1.84,1.84,0,0,0,33,29.1H29.26v4Z"></path> <path d="M49.64,25.33H61.72V29.1H53.78v3.49h7v3.76h-7v4.56h7.94v3.76H49.64Z"></path> <path d="M82,25.33,90,44.67H85.56l-1.75-4.15H75.6l-1.72,4.15H69.39l8.07-19.34Zm.3,11.43-2.54-6.08-2.53,6.08Z"></path> <path d="M114.63,25.33h3.9V44.67h-4.14V31.91l-4.61,6.46h-3.3l-4.67-6.27V44.67H97.67V25.33h3.93l6.55,8.92Z"></path> <path d="M154,31.09a6,6,0,0,1-.26,1.76,5.74,5.74,0,0,1-.72,1.52,5.47,5.47,0,0,1-1.12,1.23,5.92,5.92,0,0,1-1.42.86l6.41,8.21h-4.83l-6-7.8h-1.86v7.8h-4.14V25.33h8.34a5.3,5.3,0,0,1,2.17.45A5.56,5.56,0,0,1,152.37,27,5.92,5.92,0,0,1,154,31.09Zm-6.08,2a1.85,1.85,0,0,0,1.36-.59,2,2,0,0,0,.57-1.43,2,2,0,0,0-.57-1.41,1.84,1.84,0,0,0-1.36-.58h-3.69v4Z"></path> <path d="M173.71,25.06a8.86,8.86,0,0,1,3.71.79,9.79,9.79,0,0,1,3,2.16,10.34,10.34,0,0,1,2,3.16,9.9,9.9,0,0,1,.75,3.85,10,10,0,0,1-.75,3.84,10.25,10.25,0,0,1-2,3.19,10,10,0,0,1-3,2.17,9,9,0,0,1-7.42,0,9.6,9.6,0,0,1-3-2.17,10.41,10.41,0,0,1-2-3.19,10,10,0,0,1-.75-3.84,9.9,9.9,0,0,1,.75-3.85A10.5,10.5,0,0,1,167,28a9.41,9.41,0,0,1,3-2.16A8.83,8.83,0,0,1,173.71,25.06Zm0,15.85a4.88,4.88,0,0,0,2.1-.47,5.45,5.45,0,0,0,1.71-1.27,6.09,6.09,0,0,0,1.16-1.86,6.21,6.21,0,0,0,.42-2.29,6.32,6.32,0,0,0-.42-2.31,6.07,6.07,0,0,0-1.16-1.88,5.45,5.45,0,0,0-1.71-1.27,4.88,4.88,0,0,0-2.1-.46,4.8,4.8,0,0,0-2.09.46,5.38,5.38,0,0,0-1.72,1.27,5.87,5.87,0,0,0-1.15,1.88,6.32,6.32,0,0,0-.43,2.31,6.22,6.22,0,0,0,.43,2.29,5.88,5.88,0,0,0,1.15,1.86,5.38,5.38,0,0,0,1.72,1.27A4.81,4.81,0,0,0,173.72,40.91Z"></path> <path d="M203.35,25.33h5l-6.9,10.28v9.06H197.3V35.61l-6.9-10.28h5l4,6Z"></path> <path d="M224.93,25.33,233,44.67h-4.47l-1.75-4.15h-8.21l-1.71,4.15h-4.5l8.07-19.34Zm.3,11.43-2.54-6.08-2.53,6.08Z"></path> <path d="M244.78,40.91h7.94v3.76H240.64V25.33h4.14Z"></path> <circle cx="86.38" cy="64" r="1.29"></circle> <circle cx="167.31" cy="64" r="1.29"></circle> </g> </g> </svg> 

 <div> 
<div> 
<h4>18 dollars</h4> 
<div/>
<div><h4>basket</h4></div> 
</div>  
</div>
</div>


 )

  
}

export default Header;