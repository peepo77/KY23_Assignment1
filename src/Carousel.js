import React from "react";
import { Carousel } from "react-responsive-carousel";
import './App.css'

export default () => (
    <>
    <nav class="nav flex flex-wrap items-center justify-between px-4 m-8">
  <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
    <svg class="fill-current h-8 mr-2 w-8" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 716 895">
      <path d="M357.776 0l357.77 178.885v536.657l-357.77 178.89L0 715.542V178.885"></path>
      <path class="text-white fill-current" d="M357.776 804.982l268.32-134.16v-178.89l-89.44-44.72 89.44-44.72V223.606L357.776 89.442v626.1l-178.89-89.44V178.885l-89.443 44.721v447.216l268.333 134.16z"></path>
      <path d="M447.216 670.822l89.44-44.72v-89.45l-89.44-44.72v178.89zM447.216 402.492l89.44-44.721v-89.443l-89.44-44.722"></path>
    </svg>
    <span class="font-semibold text-xl tracking-tight">Rajat Gallery</span>
  </div>

  {/* <input class="menu-btn hidden" type="checkbox" id="menu-btn"> */}
  <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
    <span class="navicon bg-grey-darkest flex items-center relative"></span>
  </label>

  <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
    <li class="border-t md:border-none">
      <a href="/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">Image Carousel</a>
    </li>
    
  </ul>
</nav>

<Carousel autoPlay infiniteLoop emulateTouch>
    <div>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1660220725863-6d493cd0119b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      />
      <p className="legend">Trees</p>
    </div>
    <div>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1660121999601-18cbe99954de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      />
      <p className="legend">Mountains</p>
    </div>
    <div>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1660127797386-abad2ee4bc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      />
      <p className="legend">Night</p>
    </div>
    <div>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1657857285379-b6bc135b6105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      />
      <p className="legend">Nature</p>
    </div>
    <div>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1659586692312-dc4e35004728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <p className="legend">Monument</p>
    </div>
    <div>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1658816738212-be97adb6d48f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <p className="legend">Himalayas</p>
    </div>
    <div>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1659476158803-bc3b8e84bee3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <p className="legend">Flower</p>
    </div>
    <div>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1653729249841-874506cb40a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <p className="legend">Sunset</p>
    </div>
  </Carousel>
    </>
  
);
