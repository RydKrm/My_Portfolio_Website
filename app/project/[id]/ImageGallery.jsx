import Image from "next/image";
import * as React from "react";

export default function App() {

  return (
        <div className="mt-10">
      <div className="gallery-wrapper">
        <div className="image-wrapper">
          <a href="#lightbox-image-1">
            <Image src="/image/skills-01.jpg" alt="" width={320} height={320}/>
            <div className="image-title">Cat staring at me</div>
          </a>
        </div>
        <div className="image-wrapper">
          <a href="#lightbox-image-2">
            <Image src="/image/skills-02.jpg" alt="" width={320} height={320}/>
            <div className="image-title">Cat playing with mouse</div>
          </a>
        </div>
        <div className="image-wrapper">
          <a href="#lightbox-image-3">
            <Image src="/image/skills-03.jpg" alt="" width={320} height={320}/>
            <div className="image-title">Cat turns away</div>
          </a>
        </div>
        <div className="image-wrapper">
          <a href="#lightbox-image-4">
            <Image src="/image/skills-03.jpg" alt="" width={320} height={320}/>
            <div className="image-title">Cat turns away</div>
          </a>
        </div>
      </div>
      <div className="gallery-lightboxes">
        
        <div className="image-lightbox" id="lightbox-image-1">
          <div className="image-lightbox-wrapper">
            <a href="#" className="close"></a>
            <a href="#lightbox-image-4" className="arrow-left"></a>
            <a href="#lightbox-image-2" className="arrow-right"></a>
            <Image src="/image/skills-01.jpg" alt="" width={320} height={320}/>
            <div className="image-title">Cat staring at me</div>
          </div>
        </div>
        
        <div className="image-lightbox" id="lightbox-image-2">
          <div className="image-lightbox-wrapper">
            <a href="#" className="close"></a>
            <a href="#lightbox-image-1" className="arrow-left"></a>
            <a href="#lightbox-image-3" className="arrow-right"></a>
            <Image src="/image/skills-02.jpg" alt="" width={320} height={320}/>
            <div className="image-title">Cat playing with mouse</div>
          </div>
        </div>
        <div className="image-lightbox" id="lightbox-image-2">
          <div className="image-lightbox-wrapper">
            <a href="#" className="close"></a>
            <a href="#lightbox-image-2" className="arrow-left"></a>
            <a href="#lightbox-image-4" className="arrow-right"></a>
            <Image src="/image/skills-03.jpg" alt="" width={320} height={320}/>
            <div className="image-title">Cat playing with mouse</div>
          </div>
        </div>
        
        <div className="image-lightbox" id="lightbox-image-3">
          <div className="image-lightbox-wrapper">
            <a href="#" className="close"></a>
            <a href="#lightbox-image-3" className="arrow-left"></a>
            <a href="#lightbox-image-1" className="arrow-right"></a>
            <Image src="/image/skills-03.jpg" alt="" width={320} height={320}/>
            <div className="bg-gray-300 image-title">Cat turns away</div>
          </div>
        </div>
        
      </div>
    </div>
  );
}