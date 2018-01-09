import { Book, Img, Framework } from './model-base';
export const BOOKS: Book[] = [
    {
        isbn: 9781786462084,
        title: 'Laravel 5.x Cookbook',
        authors: 'Alfred Nutile',
        published: 'September 2016',
        description: 'A recipe-based book to help you efficiently create amazing PHP-based applications with Laravel 5.x',
        coverImage: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/B05517_MockupCover_Cookbook_0.jpg'
    },
    {
        isbn: 9781784396527,
        title: 'Sitecore Cookbook for Developers',
        authors: 'Yogesh Patel',
        published: 'April 2016',
        description: 'Over 70 incredibly effective and practical recipes to get you up and running with Sitecore development',
        coverImage: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/6527cov_.jpg'
    },
    {
        isbn: 9781783286935,
        title: 'Sass and Compass Designers Cookbook',
        authors: 'Bass Jobsen',
        published: 'April 2016',
        description: 'Over 120 practical and easy-to-understand recipes that explain how to use Sass and Compass to write efficient, maintainable, and reusable CSS code for your web development projects',
        coverImage: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/I6935.jpg'
    }
];
export const IMGS: Img[] = [
    { name: 'Angular', url: 'assets/img/angularLogo.png' },
    { name: 'React', url: 'assets/img/reactLogo.png' },
    { name: 'Ember', url: 'assets/img/emberLogo.png' },
    { name: 'Vue', url: 'assets/img/vueLogo.png' },
    { name: 'Meteor', url: 'assets/img/meteorLogo.png' }
];
export const FWKS: Framework[] = [
    { name: 'Angular', releaseYear: 2016, logoUrl: 'assets/img/angularLogo.png', description: 'After a long-awaited release of Angular back in 2016, its popularity has touched new heights, though AngularJS will hold off on giving ground in 2017. Angular.js is often referred to as an MVW (Model-View-Whatever) framework and among the top benefits, for startups and mid-sized companies, people name: quick code production, easy testing of any app part and two-way data binding (changes in the backend are immediately reflected on the UI). Since release its ecosystem has gone beyond imagination. As for now, it is reasonably called the most used JS framework for SPAs (Single-Page Applications) development and it boasts the largest community of developers. Angular2 comes with a long list of features that enable building everything, ranging from web to desktop and mobile. Framework is built with TypeScript from Microsoft with an eye to making JavaScript more agile and attractive for large enterprises. ng2 features a component-based architecture, improved DI (dependency injection), efficient logging service, inter-component communications and more. Both Angular-s are a better option for enterprise-based applications or for strict programming environments with high standards for code readability.' },  
    { name: 'React', releaseYear: 2017, logoUrl: 'assets/img/reactLogo.png', description: 'It is more of a library than a JS framework. It stands behind user interfaces of Facebook and Instagram, showing its efficiency within dynamic high-traffic applications. It is rightly considered the fastest growing JS framework: as of today, there are about 1,000 contributors on Github. In MVC (Model-View-Controller) pattern React.js acts as “V” and can be smoothly integrated with any architecture. Due to the usage of virtual DOM it provides a great performance boost, comparing to Angular 1.x. In addition to that, React components can be created and re-used among applications or even transferred for public use. Despite the fact that React has a higher learning curve, it makes app development straightforward and easy-to-understand. Furthermore it can be a perfect fit for complex, high-load and awesome software solutions.' },
    { name: 'Ember', releaseYear: 2014, logoUrl: 'assets/img/emberLogo.png', description: 'Back in 2015 Ember was called the best javascript framework for web application, leaving behind React and AngularJS. Today it boasts a huge online community, regular updates and wide appliance of JavaScript best practices to guarantee ultimate experience right out of the box. Ember features two-way data binding, like Angular.js, keeping both view and model in sync for all the time. Applying Fastboot.js module it ensures prompt server-side rendering of DOM, improving performance of complex UIs. Emberjs is commonly usable for complex feature-rich web applications and website. Among the top users are Chipotle, Blue Apron, Nordstrom, Kickstarter, LinkedIn, Netflix and many others. Moreover it has an easier learning curve and there are oceans of tutorials and guide available online.' },
    { name: 'Vue', releaseYear: 2017, logoUrl: 'assets/img/vueLogo.png', description: 'Vue 2.0 was also introduced in 2016 and it took the best from Ember, React and Angular, putting all that into a handy package. It is proved to be faster and leaner, comparing to React and Angular 2.0. Going deeper, Vue.js offers two-way data binding (seen in AngularJS), server-side rendering (like in Angular2 and ReactJS), Vue-cli (scaffolding tool for quick start) and optional JSX support. Its founder states that Vue 2 is one of the fastest frameworks all in all. Vue.js is a better choice for quick development of cross-platform solutions. It can become a firm basis for high-end single page applications (SPAs) and beneficial solution to those cases, when performance is put ahead of good code organization or app structure.' },
    { name: 'Meteor', releaseYear: 2012, logoUrl: 'assets/img/meteorLogo.png', description: 'Meteor is among the most popular JavaScript frameworks but which comes well-heeled with tons of features for back-end development, front-end rendering, database management and business logic. Since release in 2012 its ecosystem has grown drastically and at a swift rate. This full-stack platform enables fast development of end-to-end web and mobile applications in pure JavaScript. Due to modular structure all the packages and libraries can be used at pace. In terms of performance, all the changes in the database are immediately transmitted to the UI and in conversely with no evident time losses caused by different languages or server response time. MeteorJS covers all the phases of software development cycle and takes care of such glooming processes as linking, files concatenation and others. It is of current usage in real-time application development for business companies like Mazda, IKEA, Honeywell and many others.' },
];
