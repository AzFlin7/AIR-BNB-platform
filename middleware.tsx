export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/messages", "/account", "/trips"],
};
// import { withAuth } from "next-auth/middleware";

// export default withAuth(
//   // `withAuth` augments your `Request` with the user's token.
//   function middleware(req) {
//     console.log("middleware" + req.url);
//   }
// );
// export const config = {
//   matcher: ["/messages", "/account", "/wishlists", "/trips"],
// };
