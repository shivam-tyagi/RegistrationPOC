import image_template1 from '../assets/template1.png';
import image_template2 from '../assets/template2.png';
import image_template3 from '../assets/template3.png';
import image_template4 from '../assets/template4.png';
import image_template5 from '../assets/template5.png';
import image_template6 from '../assets/template6.png';
import image_template7 from '../assets/template7.png';
import image_template8 from '../assets/template8.png';
import image_template9 from '../assets/template9.png';
import image_template10 from '../assets/template10.png';
import image_template11 from '../assets/template11.png';
import image_template12 from '../assets/template12.png';
import image_template13 from '../assets/template13.png';
import image_template14 from '../assets/template14.png';
import image_template15 from '../assets/template15.png';
import image_template16 from '../assets/template16.png';
import login_carousel_image1 from '../assets/carousel/login/1.png';
import login_carousel_image2 from '../assets/carousel/login/2.png';
import login_carousel_image3 from '../assets/carousel/login/3.png';
import signup_carousel_image1 from '../assets/carousel/signup/1.png';
import signup_carousel_image2 from '../assets/carousel/signup/2.png';
import signup_carousel_image3 from '../assets/carousel/signup/3.png';
import landing_top_carousel_image1 from '../assets/carousel/landing_top/1.png';
import landing_top_carousel_image2 from '../assets/carousel/landing_top/2.png';
import landing_top_carousel_image3 from '../assets/carousel/landing_top/3.png';
import landing_bottom_carousel_image1 from '../assets/carousel/landing_bottom/1.png';
import landing_bottom_carousel_image2 from '../assets/carousel/landing_bottom/2.png';
import landing_bottom_carousel_image3 from '../assets/carousel/landing_bottom/3.png';

export const configData = {
  header: {
    headerColor: '#f05c27',
    headerLogoBgColor: '#f05c27',
    headerLogo: ['android', 'accessibility', 'alarm'],
  },
  registrationSettings: {
    showFirstName: true,
    showLastName: true,
    showDOB: true,
    showContact: true,
  },
  bodyBackground: '#e5ffff',
  homePageBgColor: '#f0fff7',
  landingPageBg: '#f0fff7'
};

export const templateLayouts = [{
    name:'template1',
    template_image: image_template1,
    template_id: 1,
    template_name:'Easter Egg',
    template_description:'26 March Easter Egg',
    isFavourite: false,
    isDrafted: false,
    isCompleted: false,
  },{
    name:'template2',
    template_image: image_template2,
    template_id: 2,
    template_name:'Easter Egg',
    template_description:'26 March Easter Egg',
    isFavourite: false,
    isDrafted: false,
    isCompleted: false,
  },{
    name:'template3',
    template_image: image_template3,
    template_id: 3,
    template_name:'Easter Egg',
    template_description:'26 March Easter Egg',
    isFavourite: false,
    isDrafted: false,
    isCompleted: false,
  },{
    name:'template4',
    template_image: image_template4,
    template_id: 4,
    template_name:'Easter Egg',
    template_description:'26 March Easter Egg',
    isFavourite: false,
    isDrafted: false,
    isCompleted: false,
  },{
    name:'template5',
    template_image: image_template5,
    template_id: 5,
    template_name:'Easter Egg',
    template_description:'26 March Easter Egg',
    isFavourite: false,
    isDrafted: false,
    isCompleted: false,

  }
];

export const login_carousel_images = {
  1: login_carousel_image1,
  2: login_carousel_image2,
  3: login_carousel_image3,
};

export const signup_carousel_images = {
  1: signup_carousel_image1,
  2: signup_carousel_image2,
  3: signup_carousel_image3,
};

export const landing_top_carousel_images = {
  1: landing_top_carousel_image1,
  2: landing_top_carousel_image2,
  3: landing_top_carousel_image3,
};

export const landing_bottom_carousel_images = {
  1: landing_bottom_carousel_image1,
  2: landing_bottom_carousel_image2,
  3: landing_bottom_carousel_image3,
};


export default {};