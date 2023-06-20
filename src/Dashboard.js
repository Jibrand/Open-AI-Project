import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { computed,  } from 'mobx'
import MainBody from './Components/Body'
import {Helmet} from "react-helmet";
import  "./Login/OPst.css"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { observer, inject } from 'mobx-react'
@inject('store')
@observer
class Body extends Component {

	@computed get permissions() {
		return this.props.store.tools.filter(tool=>
			tool.permissions.some(r=> this.props.store.profile.permissions.includes(r))
		)
	}

	@computed get beta() {
		return this.permissions.filter(tool => tool.category === 'Beta')
	}


	@computed get personal() {
		return this.permissions.filter(tool => tool.category === 'Personal')
	}

	@computed get business() {
		return this.permissions.filter(tool => tool.category === 'Business')
	}

	@computed get social() {
		return this.permissions.filter(tool => tool.category === 'Social')
	}

	@computed get content() {
		return this.permissions.filter(tool => tool.category === 'Content')
	}

	@computed get programming() {
		return this.permissions.filter(tool => tool.category === 'Programming')
	}

	render() {
	return (

		<>
			<Helmet>
				<title>{`Tools - OpenAI Template`}</title>
			</Helmet>

			<MainBody className=" py-4 headofdash  md:px-28 md:py-8 lg:py-12 ">


  <h1 className=' welcomeback'> Welcome back {this.props.store.profile.fname} {this.props.store.profile.lname}, How are you today? <span className='creadits'>  <i> -- Credits Left - {this.props.store.profile.credits}</i></span> </h1>
  	<Grid className=''>
					{this.programming.map((tool, index) => 
						<Tool 
							key={index}
							group={tool.category}
							title={tool.title} 
							to={tool.to} 
							Icon={tool.Icon} 
							desc={tool.desc} 
							fromColor={tool.fromColor} 
							toColor={tool.toColor} 
						/>)} 

					{this.content.map((tool, index) => 
						<Tool 
							key={index}
							group={tool.category}
							title={tool.title} 
							to={tool.to} 
							Icon={tool.Icon} 
							desc={tool.desc} 
							fromColor={tool.fromColor} 
							toColor={tool.toColor} 
						/>)} 

					{this.business.map((tool, index) => 
						<Tool 
							key={index}
							group={tool.category}
							title={tool.title} 
							to={tool.to} 
							Icon={tool.Icon} 
							desc={tool.desc} 
							fromColor={tool.fromColor} 
							toColor={tool.toColor} 
						/>)} 

					{this.personal.map((tool, index) => 
						<Tool 
							key={index}
							group={tool.category}
							title={tool.title} 
							to={tool.to} 
							Icon={tool.Icon} 
							desc={tool.desc} 
							fromColor={tool.fromColor} 
							toColor={tool.toColor} 
						/>)} 



					{this.social.map((tool, index) => 
						<Tool 
							key={index}
							group={tool.category}
							title={tool.title} 
							to={tool.to} 
							Icon={tool.Icon} 
							desc={tool.desc} 
							fromColor={tool.fromColor} 
							toColor={tool.toColor} 
						/>)} 
				</Grid>


</MainBody>
</>)
}
  }

export const Divider = () => <div className="divide-y-2 divide-dashed divide-red-700 py-8 md:py-12"> <div></div>
<div></div></div>

export const Title = ({ title }) => <h2 className="text-xl sm:text-2xl md:text-3xl text-black mb-4 md:mb-6">
{title}
</h2>

export const Grid = ({ children }) => <div className="grid carddash justify-center gap-6 mt-4 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 md:justify-center sm:justify-center xs:justify-center 
 ">{children}</div>

export const Tool = ({ Icon, title, desc, to, group, fromColor, toColor }) => <Link to={to || "/"} className="flex tools relative ">

	<div className={` flex-1 rounded-xl transition   md:max-w-1lg text-black  cursor-pointer border tools  md:flex relative transform  `}>
  <div className="p-4 tools">
	<div className={`uppercase tracking-wide    text-sm text-${fromColor ? fromColor : "green-500"} font-semibold leading-none`}>{group || "New"}</div>
	<div href="#" className="block text-lg xl:text-xl 2xl:text-2xl toolsleading-tight font-medium text-black leading-none">{title}</div>
	<p className="mt-1 pr-1 text-sm ">{desc} </p>
  </div>
</div>
</Link>



export default Body
// import {
// 	TextField,
// 	Button,
// 	Typography,
// 	Paper,
// 	Container,
// 	Grid,
// 	CardContent,
// 	CardMedia,
// 	Card,
// 	CardActions,
// } from "@material-ui/core";
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import { computed, } from 'mobx'
// import MainBody from './Components/Body'
// import { Helmet } from "react-helmet";
// import "./Login/OPst.css"
// import Box from '@mui/material/Box';
// import useStyles from "./style";


// import { observer, inject } from 'mobx-react'


// const Dashboard = (

// ) => {
// 	const classes = useStyles();

// 	class Body extends Component {

// 		@computed get permissions() {
// 			return this.props.store.tools.filter(tool =>
// 				tool.permissions.some(r => this.props.store.profile.permissions.includes(r))
// 			)
// 		}

// 		@computed get beta() {
// 			return this.permissions.filter(tool => tool.category === 'Beta')
// 		}


// 		@computed get personal() {
// 			return this.permissions.filter(tool => tool.category === 'Personal')
// 		}

// 		@computed get business() {
// 			return this.permissions.filter(tool => tool.category === 'Business')
// 		}

// 		@computed get social() {
// 			return this.permissions.filter(tool => tool.category === 'Social')
// 		}

// 		@computed get content() {
// 			return this.permissions.filter(tool => tool.category === 'Content')
// 		}

// 		@computed get programming() {
// 			return this.permissions.filter(tool => tool.category === 'Programming')
// 		}
// 	}

// 	return (
// 		<div>
// <MainBody className=" py-4 headofdash  md:px-28 md:py-8 lg:py-12 ">

		 
			 

// 			<Container maxWidth="md" className={classes.cardgrid}>
// 				<Grid container spacing={4}>
// 					<Grid item xs={12} sm={6} md={3}>
// 						<Card className={classes.card}>
// 							<CardMedia
// 								className={classes.cardmedia}
// 								image="https://source.unsplash.com/random"
// 								title="green iguana"
// 							/>
// 							<CardContent className={classes.cardcontent}>
// 								<Link to='/home'>
// 									<Typography gutterBottom variant="h6" component="div">
// 										New Product Evaluation
// 									</Typography>
// 								</Link>
// 								<Typography variant="body2" color="text.secondary">
// 									Select this to get a quote to perform{" "}
// 									<span className={classes.span}>
// 										full product compliance evaluation{" "}
// 									</span>
// 									from scratch to help launch your product to the market with no
// 									hassle.
// 								</Typography>
// 							</CardContent>
// 						</Card>
// 					</Grid>

// 					<Grid item xs={12} sm={6} md={3}>
// 						<Card className={classes.card}>
// 							<CardMedia
// 								className={classes.cardmedia}
// 								image="https://source.unsplash.com/random"
// 								title="green iguana"
// 							/>
// 							<CardContent className={classes.cardcontent}>
// 								<Link to='/Evaluatedproduct'>
// 									<Typography gutterBottom variant="h6" component="div">
// 										Existing Product Evaluation
// 									</Typography>
// 								</Link>
// 								<Typography variant="body2" color="text.secondary">
// 									This will help you provide a test quote from lab for any
// 									technical changes whether it be a{" "}
// 									<span className={classes.span}> end of life component </span>
// 									or adding an alternate component to the existing certified
// 									product.
// 								</Typography>
// 							</CardContent>
// 						</Card>
// 					</Grid>
// 					<Grid item xs={12} sm={6} md={3}>
// 						<Card className={classes.card}>
// 							<CardMedia
// 								className={classes.cardmedia}
// 								image="https://source.unsplash.com/random"
// 								title="green iguana"
// 							/>
// 							<CardContent className={classes.cardcontent}>
// 								<Link to='/precompliance'>

// 									<Typography gutterBottom variant="h6" component="div">
// 										Pre-Compliance/ Engineering Quote
// 									</Typography>
// 								</Link>
// 								<Typography variant="body2" color="text.secondary">
// 									Select this option to get a quote for performing
// 									pre-compliance testing to ensure that your prototype meets{" "}
// 									<span className={classes.span}>
// 										intended market regulatory product standard’s requirements.
// 									</span>
// 								</Typography>
// 							</CardContent>
// 						</Card>
// 					</Grid>
// 					<Grid item xs={12} sm={6} md={3}>
// 						<Card className={classes.card}>
// 							<CardMedia
// 								className={classes.cardmedia}
// 								image="https://source.unsplash.com/random"
// 								title="green iguana"
// 							/>
// 							<CardContent className={classes.cardcontent}>
// 								<Link to='/consulting' >
// 									<Typography gutterBottom variant="h6" component="div">
// 										Consulting
// 									</Typography>
// 								</Link>
// 								<Typography variant="body2" color="text.secondary">
// 									Consulting helps you connect to an expert to get your product
// 									in compliance with product regulatory requirement from the
// 									design phase till it’s launch.
// 								</Typography>
// 							</CardContent>
// 						</Card>
// 					</Grid>
// 				</Grid>
// 			</Container>
// 			</MainBody>
// 		</div>
// 	)
// }

// export default Dashboard
