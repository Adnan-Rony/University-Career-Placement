import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';



// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { templatesData } from '../ResumeBuilder/lib/templatedata';
export const Demo = ({name}) => {
  const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    
  return (
         <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
              {
                templatesData.map((tem)=><a href={tem.image}>
                  <button>pre</button>
                </a>)
              }
                <a href="https://res.cloudinary.com/dto6ulc5n/image/upload/v1742757754/ayo-ogunseinde-6W4F62sN_yI-unsplash_z8moxp.jpg">
                    <img alt="img1" src="img/thumb1.jpg" />
                </a>
                <a href="img/img2.jpg">
                    <img alt="button" src="img/thumb2.jpg" />
                </a>
                ...
            </LightGallery>
        </div>
  );
};
