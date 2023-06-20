const dev = {
	baseURL: "http://localhost:3080/api/",
	landingPageUrl: "http://localhost:3080",
	stripe: {
		free: "price_1MUYTVSCuC6Bk4rvCFGIqvw9",
		entry: "price_1MUYStSCuC6Bk4rvm9mLDDyM",
		pro: "price_1MUYSJSCuC6Bk4rvLr3UcHWT"
		// pro: "price_1MKIi0KDl4BWQxUPbknrrmEH"
		// sporty-useful-revel-fancy
	},
};
  
const prod = {
	baseURL: '/api/',
	landingPageUrl: "https://app.openaitemplate.com",
	stripe: {
		free: "price_1MKISQKDl4BWQxUPCjluSykk",
		entry: "price_1MKISQKDl4BWQxUPCjluSykk",
		pro: "price_1MKISQKDl4BWQxUPCjluSykk"
	},
};
  
const config = process.env.NODE_ENV === 'development'
	? dev
	: prod;
  
export default config;