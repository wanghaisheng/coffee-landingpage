import aboutPic from '../assets/img/aboutpic.jpg'
import about1 from '../assets/img/about1.jpg'
import about2 from '../assets/img/about2.jpg'
import about3 from '../assets/img/about3.jpg'
import about4 from '../assets/img/about4.jpg'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'


function About() {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
  return (
    <>
      <div className="container">
        <div className="row" data-aos="fade-left">
          <div className="d-none d-lg-flex col-lg-6">
            <img src={aboutPic} alt="About cremebrew" className='img-fluid border rounded h-100' />
          </div>

          <div className="col-lg-6 my-5">
              <div className="col">
                <h3 className='mb-1'>Creme<span>Brew</span></h3>
                <h4 className='mb-4'>a new coffee experience</h4>
                <p>CremeBrew is committed to providing an authentic coffee experience that connects you with the farmers who produce it and the knowledge of our baristas who prepare it.</p>
              </div>
              <div className="col mt-5">
                <h3 className='mb-1'>Offering <span>Great Food</span></h3>
                <p>Not just your average coffee shop, we also offer delicious baked goods that are made fresh by our artisan bakers with locally sourced ingredients. And they're not just any baked goods - they're healthy breads with grains, seeds and nuts that are nutrient rich and full of flavour!</p>
              </div>
          </div>
        </div>

            </div>
            
            <div className="container">

              <div className="row pt-5 grid-pics">
                <div className="col-md-6 col-lg-5">
                  <a href={about1} data-toggle="lightbox" data-gallery="img-gallery">
                    <img src={about1} alt="About cremebrew" className='img-fluid border rounded h-100' />
                  </a>
                </div>
                <div className="col-md-3 col-lg-3">
                  <a href={about2} data-toggle="lightbox" data-gallery="img-gallery">
                    <img src={about2} alt="About cremebrew" className='img-fluid border rounded h-100' />
                  </a>
                </div>
                <div className="col-md-3 col-lg-4 d-flex flex-column justify-content-between ">

                    <a href={about3} data-toggle="lightbox" data-gallery="img-gallery">
                      <img src={about3} alt="About cremebrew" className='img-fluid border rounded mb-3 h-100' />
                    </a>

                    <a href={about4} data-toggle="lightbox" data-gallery="img-gallery">
                      <img src={about4} alt="About cremebrew" className='img-fluid border rounded h-100' />
                    </a>
           
            
                </div>
            </div>
          </div>
    
    </>
  )
}

export default About