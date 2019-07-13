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
    isFavourite: true,
    isDrafted: false,
    isCompleted: false,
    data: {
      eventTitle: 'title 2',
      eventFestival: 'Festival 2',
      eventHostedby: 'Host 2',
      eventMobilenumber: 'Mobile 2',
      eventDate: 'Date 2',
      eventTime: 'Time 2',
      eventEndTime: 'End Time 2',
      eventLocation: 'Location 2',
      eventAddress: 'Address 2',
      eventMessageFromHost: 'Host Message 2',
    }
  },{
    name:'template3',
    template_image: image_template3,
    template_id: 3,
    template_name:'Easter Egg',
    template_description:'26 March Easter Egg',
    isFavourite: true,
    isDrafted: false,
    isCompleted: false,
    data: {
      eventTitle: 'title 3',
      eventFestival: 'Festival 3',
      eventHostedby: 'Host 3',
      eventMobilenumber: 'Mobile 3',
      eventDate: 'Date 3',
      eventTime: 'Time 3',
      eventEndTime: 'End Time 3',
      eventLocation: 'Location 3',
      eventAddress: 'Address 3',
      eventMessageFromHost: 'Host Message 3',
    }
  },{
    name:'template4',
    template_image: image_template4,
    template_id: 4,
    template_name:'Easter Egg',
    template_description:'26 March Easter Egg',
    isFavourite: false,
    isDrafted: false,
    isCompleted: false,
    data: {
      eventTitle: 'title 4',
      eventFestival: 'Festival 4',
      eventHostedby: 'Host 4',
      eventMobilenumber: 'Mobile 4',
      eventDate: 'Date 4',
      eventTime: 'Time 4',
      eventEndTime: 'End Time 4',
      eventLocation: 'Location 4',
      eventAddress: 'Address 4',
      eventMessageFromHost: 'Host Message 4',
    }
  },{
    name:'template5',
    template_image: image_template5,
    template_id: 5,
    template_name:'Easter Egg',
    template_description:'26 March Easter Egg',
    isFavourite: false,
    isDrafted: false,
    isCompleted: false,
    data: {
      eventTitle: 'title 5',
      eventFestival: 'Festival 5',
      eventHostedby: 'Host 5',
      eventMobilenumber: 'Mobile 5',
      eventDate: 'Date 5',
      eventTime: 'Time 5',
      eventEndTime: 'End Time 5',
      eventLocation: 'Location 5',
      eventAddress: 'Address 5',
      eventMessageFromHost: 'Host Message 5',
    }
  },{
    name:'template6',
    template_image: image_template6,
    template_id: 6,
    template_name:'Easter Egg',
    template_description:'26 March Easter Egg',
    isFavourite: false,
    isDrafted: true,
    isCompleted: false,
    data: {
      eventTitle: 'title 6',
      eventFestival: 'Festival 6',
      eventHostedby: 'Host 6',
      eventMobilenumber: 'Mobile 6',
      eventDate: 'Date 6',
      eventTime: 'Time 6',
      eventEndTime: 'End Time 6',
      eventLocation: 'Location 6',
      eventAddress: 'Address 6',
      eventMessageFromHost: 'Host Message 6',
    }
  },{
    name:'template7',
    template_image: image_template7,
    template_id: 7,
    template_name:'Easter Egg',
    template_description:'26 March Easter Egg',
    isFavourite: false,
    isDrafted: true,
    isCompleted: false,
    data: {
      eventTitle: 'title 7',
      eventFestival: 'Festival 7',
      eventHostedby: 'Host 7',
      eventMobilenumber: 'Mobile 7',
      eventDate: 'Date 7',
      eventTime: 'Time 7',
      eventEndTime: 'End Time 7',
      eventLocation: 'Location 7',
      eventAddress: 'Address 7',
      eventMessageFromHost: 'Host Message 7',
    }
  },{
    name:'template8',
    template_image: image_template8,
    template_id: 8,
    template_name:'Easter Egg',
    template_description:'26 March Easter Egg',
    isFavourite: false,
    isDrafted: false,
    isCompleted: true,
    data: {
      eventTitle: 'title 8',
      eventFestival: 'Festival 8',
      eventHostedby: 'Host 8',
      eventMobilenumber: 'Mobile 8',
      eventDate: 'Date 8',
      eventTime: 'Time 8',
      eventEndTime: 'End Time 8',
      eventLocation: 'Location 8',
      eventAddress: 'Address 8',
      eventMessageFromHost: 'Host Message 8',
    }
  }
];

export const login_carousel_images = [ {
  imageSrc: login_carousel_image1,
  headingText: 'Lorem Ipsum',
  brief: 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
},{
  imageSrc: login_carousel_image2,
  headingText: 'Lorem Ipsum',
  brief: 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
},{
  imageSrc: login_carousel_image3,
  headingText: 'Lorem Ipsum',
  brief: 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
}];

export const signup_carousel_images = [ {
  imageSrc: signup_carousel_image1,
  headingText: 'Lorem Ipsum',
  brief: 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
},{
  imageSrc: signup_carousel_image2,
  headingText: 'Lorem Ipsum',
  brief: 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
},{
  imageSrc: signup_carousel_image3,
  headingText: 'Lorem Ipsum',
  brief: 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
} ];

export const landing_top_carousel_images = [ {
  imageSrc: landing_top_carousel_image1,
}, {
  imageSrc: landing_top_carousel_image2,
}, {
  imageSrc: landing_top_carousel_image3,
} ];

export const landing_bottom_carousel_images = [ {
  imageSrc: landing_bottom_carousel_image1,
}, {
  imageSrc: landing_bottom_carousel_image2,
}, {
  imageSrc: landing_bottom_carousel_image3,
} ];





export default {};