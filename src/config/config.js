export function serverBaseURL() {
   //DEV
   // const protocol = "http";
   // const host = "localhost";
   // const port = "8081";
   // return `${protocol}://${host}:${port}`;

   //PRODUCTION
   //e.g https://portfolio-server26052021.herokuapp.com/api/projects
   //const host = "portfolio-server26052021.herokuapp.com";
   const host = "api-9dg1.onrender.com";
   //const host = "api.neilrigg.com";
   //const host = "enchanting-wear-lamb.cyclic.app";
   const protocol = "https";
   //const host = "neilrigg.com";
   //const port = "80";
   return `${protocol}://${host}`;
}

// export function devBaseURL() {
//   //DEV
//   const protocol = "http";
//   const host = "localhost";
//   const port = "8081";
//   return `${protocol}://${host}:${port}`;
// }

// export function productionBaseURL() {
//   //e.g https://portfolio-server26052021.herokuapp.com/api/projects

//   //production
//   const protocol = "https";
//   const host = "portfolio-server26052021.herokuapp.com";
//   //const port = "80";
//   return `${protocol}://${host}`;
// }
