import React, { Component } from 'react';
import { Link, Switch, Route, } from 'react-router-dom'
import { computed, observable, makeObservable } from 'mobx'
import Header from '../Components/Header'
import { IdentificationIcon,  CheckIcon,
	ChatAltIcon, UsersIcon,UserCircleIcon, ReplyIcon, ChevronLeftIcon,
} from '@heroicons/react/outline'
import Feedbackicon from "../signout.png"
import pricingplan from '../price-tag.png'
import MainBody from '../Components/Body'
import Referral from './Referral'
import Feedback from './Feedback'
import {Helmet} from "react-helmet";
import EnvIcon from './EnvIcon'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import Pricing from '../Pricing'
import "../Login/OPst.css"
@inject('store')
@observer
class Body extends Component {

	@computed get headerMessage(){
		if(this.props.store.profile.status === "trialing"){
			return "7 Day Trial"
		}
		if(this.props.store.profile.status === "active"){
			if(this.props.store.profile.cancel_at_period_end){
				return `Set to cancel soon`
			}
			return `${this.props.store.profile.plan} Plan`
		}
		if(this.props.store.profile.status === "incomplete"){
			return `${this.props.store.profile.plan} Plan Restarted`
		}
		return "Expired"
	}

	@computed get ifNotActive(){
		if(this.props.store.profile.cancel_at_period_end){
			return "Canceled"
		}
		if(this.props.store.profile.status === "trialing"){
			return "Trialing"
		}
		return false
	}

	@computed get fromColor(){
		if(this.props.store.profile.status === "trialing"){
			return "black"
		}
		if(this.props.store.profile.status === "active"){
			if(this.props.store.profile.cancel_at_period_end){
				return "yellow-500"
			}
			return "black"
		}
		if(this.props.store.profile.status === "incomplete"){
			return "yellow-600"
		}
		return "black"
	}

	@computed get currentPeriodEnd(){
		// console.log(this.props.store.profile.current_period_end)
		if(this.props.store.profile.current_period_end && this.props.store.profile.current_period_end.length > 0){
			var days_difference = Math.round(((new Date(this.props.store.profile.current_period_end)).getTime() - (new Date()).getTime() ) / (1000 * 60 * 60 * 24));  
			if(days_difference < 0) {
				return 0
			}
			return days_difference
		}
		return 0
	}

	@observable plan = {
		plan: '',
	}

	componentDidMount(){
		this.props.store.refreshTokenAndProfile()
		makeObservable(this);
		this.init()
	}

	init = async () => {
		let res = await this.props.store.api.post("/user/stripe/plan")
		this.plan = {
			...res.data
		}
		console.log(`this.plan`,{...this.plan})
	}

	onBack = () => {
		this.props.history.push(`/my-profile`)
	}


	render() {
	return (
		<> 

					<Route exact path="/my-profile">
						<Helmet>
							<title>{`My Profile - OpenAI Template`}</title>
						</Helmet>
						
				</Route>

				 
			<MainBody className=" px-4  backp md:px- md:py-8 ">
<h1> Credits - {this.props.store.profile.credits}</h1>
				<Switch>
					<Route exact path="/my-profile/pricing">
						<Pricing />
					</Route>
					<Route exact path="/my-profile/referral">
						<Referral />
					</Route>
					<Route exact path="/my-profile/feedback">
						<Feedback />
					</Route>
					<Route>

						
							
						<Grid>

						{this.plan.status === "trialing" ? 
									<ToolForm
									Icon={CheckIcon}
									title={`Active Subscription`} 
									desc={`${this.plan.plan === "Entry" ? "$30" : ""}${this.plan.plan === "Pro" ? "$90" : ""} billing  immediately. Ends trial and starts billing plan.`} 
									to={this.props.store.baseURL + "/user/stripe/activate"}
									api={this.props.store.api}
								 	
								/>: null}



							{this.plan.plan === "None" ? <Tool
								Icon={IdentificationIcon}
								title={"Pricing Plans"} 
								api={this.props.store.api}
								desc={"Upgrade, downgrade or cancel anytime."} 
								to={"/my-profile/pricing"}
								fromColor="red-400"
						/> : null	}


						{this.headerMessage === "Expired" ? null : <>
							{this.ifNotActive ? null : <>

								<ToolForm
									Icon={IdentificationIcon}
									title={"Cancel Subscription"} 
									api={this.props.store.api}
									desc={"Immediately cancelation of subscription and payments."} 
									to={this.props.store.baseURL + "user/stripe/cancel"}
									fromColor={this.props.store.profile.cancel_at_period_end ? "black" : "black"} 
									toColor={this.props.store.profile.cancel_at_period_end ? "red-400" : "black"} 
								/>
								
								{/* <ToolForm
									Icon={DatabaseIcon}
									title={"Buy Credits"} 
									desc={"250 x extra credits quick-buy"} 
									to={this.props.store.baseURL + "user/stripe/buy250"}
									api={this.props.store.api}
									fromColor="purple-500"
									toColor="indigo-600"
								/> */}
							</>}
							
							{this.props.store.profile.cancel_at_period_end ? <>

								<ToolForm
									Icon={CheckIcon}
									title={"Reactivate Subscription"} 
									api={this.props.store.api}
									desc={"Immediately cancelation of subscription and payments."} 
									to={this.props.store.baseURL + "user/stripe/uncancel"}
									fromColor={this.props.store.profile.cancel_at_period_end ? "red-400" : "black"} 
									toColor={this.props.store.profile.cancel_at_period_end ? "red-400" : "black"} 
								/>

							</> : null}
							<ToolForm
								Icon={IdentificationIcon}
								title={this.props.store.profile.cancel_at_period_end ? "Manage Subscription" : "Update Subscription"} 
								api={this.props.store.api}
								desc={"Change your plan, card details, or cancel the plan anytime."} 
								to={this.props.store.baseURL + "user/stripe/customer-portal"}
								fromColor={this.props.store.profile.cancel_at_period_end ? "blue-600" : "blue-500"} 
								toColor={this.props.store.profile.cancel_at_period_end ? "blue-400" : "blue-600"} 
							/></>}




						 
							
							
							<ToolDiv 
								Icon={ReplyIcon}
								title={"Log Out"} 
								desc={"Sign out of your account"} 
								onClick={this.props.store.handleLogout}
								fromColor="black"
								toColor="black"
							/>
						</Grid>
					</Route>
				</Switch>
			
			

			
		

			
</MainBody>
</>)
}
  }

const Grid = ({ children }) => <div className="grid   grid-cols-1 gap-8 mt-4 lg:grid-cols-2 xl:grid-cols-1 ">{children}</div>

const ToolDiv = ({ Icon, title, desc, to, group, fromColor, toColor, onClick }) => <><div className="flex relative " onClick={onClick}>
	<div className={`absolute inset-0   rounded-3xl `}></div>

	<div className={`flex-1 packs rounded-xl transition  overflow-hidden md:max-w-1lg text-black cursor-pointer border-t-2 border- h  md:flex relative  `}>
  {/* {Icon && <div className={`md:flex-shrink-0 flex justify-start items-center ml-8 text-${fromColor ? fromColor : "black"}`}>
	<Icon className="h-16 w-16 mb-4 mt-4" /> 

  </div>} */}  
  <img  src={Feedbackicon}   height='10px' width='90px'  /> 
  <div className="p-4">
	<div className={`uppercase tracking-wide text-sm text-${fromColor ? fromColor : "black"} font-semibold leading-none`}>{group || ""}</div>
	<div href="#" className="block text-lg xl:text-xl 2xl:text-2xl leading-tight font-medium text-black leading-none">{title}</div>
	<p className="mt-1 pr-1 text-sm ">{desc} </p>
  </div>
</div>
</div></>

const ToolForm = ({ Icon, title, desc, to, group, fromColor, toColor, onClick, api }) => <><form action={to} method="POST" className="flex relative">
	<input type="hidden" name="token" value={api.defaults.headers.common['x-access-token']} />
	<button type="submit" className="flex-1 text-left">
	<div className={`absolute inset-0     `}></div>

	<div type="submit" className={`flex-1 packs rounded-xl transition  overflow-hidden md:max-w-1lg text-black cursor-pointer border-t-2 border-   md:flex relative      `}>
  {/* {Icon && <div className={`md:flex-shrink-0 flex justify-start items-center ml-8 text-${fromColor ? fromColor : "black"}`}>
	<Icon className="h-16 w-16 mb-4 mt-4" />
  </div>} */}
  <img  src={pricingplan}   height='10px' width='90px'  /> 
  <div className="p-4">
	<div className={`uppercase tracking-wide text-sm text-${fromColor ? fromColor : "black"} font-semibold leading-none`}>{group || ""}</div>
	<div className="block text-lg xl:text-xl 2xl:text-2xl leading-tight font-medium text-black leading-none">{title}</div>
	<p className="mt-1 pr-1 text-sm ">{desc} </p>
  </div>
</div>
</button>
</form></>



const Tool = ({ Icon, title, desc, to, group, fromColor, toColor, onClick, api }) => <Link to={to} className="flex    relative">
	<div  className="flex-1   text-left">
	<div className={`absolute inset-0     `}></div>

	<div  className={`flex-1  packs rounded-xl transition  overflow-hidden md:max-w-1lg text-black cursor-pointer  cardp  md:flex relative      `}>
  {/* {Icon && <div className={`md:flex-shrink-0 flex justify-start items-center ml-8 text-${fromColor ? fromColor : "black"}`}>
	<Icon className="h-16 w-16 mb-4 mt-4" />
  </div>} */}
  <img  src={pricingplan}   height='10px' width='90px'  /> 

  <div className="p-4">
	<div className={`uppercase tracking-wide text-sm text-${fromColor ? fromColor : "black"} font-semibold leading-none`}>{group || ""}</div>
	<div className="block text-lg xl:text-xl 2xl:text-2xl leading-tight font-medium text-black leading-none">{title}</div>
	<p className="mt-1 pr-1 text-sm ">{desc} </p>
  </div>
</div>
</div>
</Link>












const ATool = ({ Icon, title, desc, to, group, fromColor, toColor, onClick, api }) => <a href={to} className="flex relative">
	<div  className="flex-1 text-left">
	<div className={`absolute inset-0 bg-gradient-to-r from-${fromColor ? fromColor : "red-400"} to-${toColor ? toColor : "blue-500"} shadow-lg   skew-y-0 -rotate-3 rounded-3xl `}></div>

	<div  className={`flex-1 bg-dark rounded-xl transition   overflow-hidden md:max-w-1lg text-black cursor-pointer border-t-2 border-  md:flex relative    `}>
  {/* {Icon && <div className={`md:flex-shrink-0 flex justify-start items-center ml-8 text-${fromColor ? fromColor : "black"}`}>
	<Icon className="h-16 w-16 mb-4 mt-4" />
  </div>} */}
  <img  src={Feedbackicon}   height='10px' width='90px'  /> 

  <div className="p-4">
	<div className={`uppercase tracking-wide text-sm text-${fromColor ? fromColor : "black"} font-semibold leading-none`}>{group || ""}</div>
	<div className="block text-lg xl:text-xl 2xl:text-2xl leading-tight font-medium text-black leading-none">{title}</div>
	<p className="mt-1 pr-1 text-sm ">{desc} </p>
  </div>
</div>
</div>
</a>

export const Divider = () => <div className="divide-y-2 divide-dashed divide-red-700 py-8 md:py-12"> <div></div>
<div></div></div>

export default withRouter(Body)