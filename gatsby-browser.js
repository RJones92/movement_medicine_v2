import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fontsource/poppins';
import './src/styles/global.css';

// export const shouldUpdateScroll = ({ routerProps }) => {
//   const hasAnchor = !!routerProps.location.hash; // (ie. /#features)

//   return hasAnchor;
//   //https://github.com/gatsbyjs/gatsby/issues/7454#issuecomment-763420873
// };

// export const shouldUpdateScroll = ({ routerProps }) => {
//   const { pathname } = routerProps.location;
//   // list of routes for the scroll-to-top-hook
//   const scrollToTopRoutes = [`/privacy-policy`, `/page-2`];
//   // if the new route is part of the list above, scroll to top (0, 0)
//   if (scrollToTopRoutes.indexOf(pathname) !== -1) {
//     window.scrollTo(0, 0);
//   }

//   return false;

//   // https://stackoverflow.com/questions/55336831/how-to-fix-gatsby-js-link-component-retaining-scroll-position-and-not-resetting
// };

// export const shouldUpdateScroll = () => false;

// export const shouldUpdateScroll = () => window.scrollTo(0, 0);

// EXPLAINATION
// It looks like simply turning off 'shouldUpdateScroll()' with a return of FALSE
// still retains the scroll position of the previous page, however doesn't snap to the nearest section or div or something.
// Setting it to TRUE snaps to that nearest thing
