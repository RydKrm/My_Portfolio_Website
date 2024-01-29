import Image from "next/image";
import * as React from "react";

export default function App({images,name}) {

  return (
        <div className="mt-10">
      <div className="gallery-wrapper">
        {
          images.map((img,index) => 
          <div key={img} className="image-wrapper">
          <a href={`#${index}`}>
            <Image src={img} alt="" width={320} height={320}/>
            <div className="image-title">{name}</div>
          </a>
        </div>)
        }
        
        {/* <div className="image-wrapper">
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
        </div>*/}
      </div> 
      <div className="gallery-lightboxes">
        
       
        {
          images.map((img,index) => 
             <div key={img} className="image-lightbox" id= {index}>
          <div className="image-lightbox-wrapper">
            <a href="#" className="close"></a>
            <a href={`#${index!==0 ? index-1 : images.length-1}`} className="arrow-left"></a>
            <a href={`#${index!==length-1 ? index+1 : 0}`}  className="arrow-right"></a>
            <Image src={img} alt="" width={320} height={320}/>
            <div className="image-title">Cat staring at me</div>
          </div>
        </div> 
            )
        }
{/*         
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
         */}
      </div>
    </div>
  );
}