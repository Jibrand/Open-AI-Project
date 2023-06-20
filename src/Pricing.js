import React, { Component } from 'react';
import "./Login/OPst.css"
import {
	CheckCircleIcon,
	BanIcon,
	DatabaseIcon,
	PencilIcon,
	MenuAlt1Icon,
	LightBulbIcon,
	SparklesIcon,
	UserIcon,
	CurrencyDollarIcon,
	UserCircleIcon,
  } from '@heroicons/react/solid'

import Logo from './Logo'
import config from './config'

import { observer, inject } from 'mobx-react'
@inject('store')
@observer
class Pricing extends Component {



	render() {
	
	return (

		<>

{this.props.store.profile.status ? null :<div className="border-b   border-gray-300 bg-dark shadow-sm ">
                    <div className="container flex mx-auto px-4 md:px-28 flex select-none">
                           
                            <div className="relative text-gray-400 focus-within:text-gray flex flex-1 ">
                            </div>
                             <div 
                             onClick={this.props.store.handleLogout}
                             className="cursor-pointer text-lg flex logoutp py-3 px-6 xl:py-4 xl:px-8 :  rounded-t-md font-medium transition items-center"><UserCircleIcon className="w-7 h-7 mheadng lg:mr-4 transition" />
                              <div className="hidden text-gray  lg:block"> Log Out</div>
                            </div>


                        </div>
                        
                </div>}
			
			<div className="container mx-auto px-8 py-4 backp lg:px-28 lg:py-12 lg:pb-64 select-none">

		{this.props.store.profile.status ? null : <><div className="text-center">
			</div>
	
			 </>} 

			<Grid>
				{this.props.store.profile.status ? null : <Free  fromColor="gray-400" toColor="gray-500" baseURL={this.props.store.baseURL} api={this.props.store.api}/>} 
				<Entry fromColor="gray" toColor="gray" baseURL={this.props.store.baseURL} api={this.props.store.api} />
				<Premium fromColor="indigo-500" toColor="gray" baseURL={this.props.store.baseURL} api={this.props.store.api} />
			</Grid>
		
			
</div>
</>)
}
  }

  
const Free = ({ fromColor, toColor, baseURL, api }) => <div className="flex relative ">
<div className={`absolute inset-0  shadow-lg  skew-y-0 -rotate-3 rounded-3xl `}></div>

<div className={`packs rounded-xl transition  flow-hidden md:max-w-1lg text-gray-500 border-t-2 border-  flex-1`}>

<div className="p-8 flex-1">
<div href="#" className={`text-gray block text-lg text-2xl leading-tight font-medium mb-2`}>Free</div>
<div className="text-6xl text-gray font-bold">$0<span className="text-lg text-gray-400"> free trial</span></div>
<p className="mt-4 text-lg">
	Test before you buy, and upgrade or cancel anytime.
</p>
<div className="divide-y divide-dashed divide-gray-300 mt-4">
	<div className="py-2 flex  items-center">
		<DatabaseIcon className={`w-6 h-6 mr-2 text-gray `} /> 
		<div><span className="font-medium text-gray">10</span >{` x `}Cgrayits</div>
	</div>
	<div className="py-2 flex  items-center">
		<MenuAlt1Icon className={`w-6 h-6 mr-2 text-gray `} /> 
		<div><span className="font-medium text-gray">300</span>{` x `}Words</div>
	</div>
	<div className="py-2 flex  items-center">
		<PencilIcon className={`w-6 h-6 mr-2 text-gray `} /> 
		<div><span className="font-medium text-gray">1,200</span>{` x `}Letters</div>
	</div>
	
	<div className="py-2 flex  items-center">
		<BanIcon className="w-6 h-6 mr-2 text-gray-400" /> 
		<div><span className="text-gray-400">Hours of usage saved</span></div> 
	</div>
	<div className="py-2 flex  items-center">
		<BanIcon className="w-6 h-6 mr-2 text-gray-400" /> 
		<div><span className="text-gray-400">Calculate billable saved</span></div> 
	</div>
	<div className="py-2 flex  items-center">
		<BanIcon className="w-6 h-6 mr-2 text-gray-400" /> 
		<div><span className="text-gray-400">Access to all tools</span></div> 
	</div>
	<div className="py-2 flex  items-center">
		<BanIcon className="w-6 h-6 mr-2 text-gray-400" /> 
		<div><span className="text-gray-400">New beta-feature testing</span></div> 
	</div>
</div>
<div className="py-2 xl:flex hidden  items-center">
		<BanIcon className="w-6 h-6 mr-2 text-black " /> 
	</div>
	
<form action={baseURL + "user/stripe/subscribe"} method="POST" className="flex flex-1">
<input type="hidden" name="token" value={api.defaults.headers.common['x-access-token']} />
		<input type="hidden" name="priceId" value={config.stripe.free} />
		{/* <input type="hidden" name="trial" value="true" /> */}
<button type="submit" className={`mt-8 inset-0 bg-gray shadow-lg flex-1 rounded-md p-4 text-black  font-medium text-center text-lg transition   text-enter`}>Try Out</button>
</form>
</div>
</div>
</div>

const Entry = ({ fromColor, toColor, baseURL, api }) => <div className="flex relative ">
  <div className={`absolute inset-0       shadow-lg  skew-y-0 -rotate-3 rounded-3xl `}></div>

  <div className={`packs rounded-xl transition   overflow-hidden md:max-w-1lg text-gray-500 border-t-2 border-  md:flex relative    flex-1`}>

<div className="p-8 flex-1">
  <div href="#" className={`text-gray block text-lg text-2xl leading-tight font-medium mb-2`}>Entry</div>
  <div className="text-6xl text-gray font-bold">$301<span className="text-lg text-gray-400">/per month</span></div>
  <p className="mt-4 text-lg">
	  Start today to get access to our powerful AI-powegray features.
  </p>
  <div className="divide-y divide-dashed divide-gray-300 mt-4">
	  <div className="py-2 flex  items-center">
		  <DatabaseIcon className={`w-6 h-6 mr-2 text-gray `} /> 
		  <div><span className="font-medium text-gray">250</span>{` x `}Cgrayits</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <MenuAlt1Icon className={`w-6 h-6 mr-2 text-gray `} /> 
		  <div><span className="font-medium text-gray">15,000</span>{` x `}Words</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <PencilIcon className={`w-6 h-6 mr-2 text-gray `} /> 
		  <div><span className="font-medium text-gray">60,000</span>{` x `}Letters</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <UserIcon className={`w-6 h-6 mr-2 text-gray `} /> 
		  <div><span className="font-medium text-gray">2,700</span>{` x `}minutes saved</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <CheckCircleIcon className={`w-6 h-6 mr-2 text-gray `} /> 
		  <div><span className="font-medium text-gray">45</span>{` x `}hours of time saved</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <CurrencyDollarIcon className={`w-6 h-6 mr-2 text-gray `} /> 
		  <div><span className="font-medium text-gray">$1,000</span>{` x `} billable time saved</div> 
	  </div>
	  <div className="py-2 flex  items-center">
		  <BanIcon className="w-6 h-6 mr-2 text-gray-400" /> 
		  <div><span className="text-gray-400">Access to all tools</span></div> 
	  </div>
	  <div className="py-2 flex  items-center">
		  <BanIcon className="w-6 h-6 mr-2 text-gray-400" /> 
		  <div><span className="text-gray-400">New beta-feature testing</span></div> 
	  </div>
  </div>
  <form action={baseURL + "user/stripe/subscribe"} method="POST" className="flex flex-1">
<input type="hidden" name="token" value={api.defaults.headers.common['x-access-token']} />
		<input type="hidden" name="priceId" value={config.stripe.entry} />
<button type="submit" className={`mt-8 inset-0 bg-light shadow-lg flex-1 rounded-md p-4 text-black  font-medium text-center text-lg transition  :from-gray-700  :to-gray-800 text-enter`}>Get Started</button>
</form>
</div>
</div>
</div>


const Premium = ({ fromColor, toColor, baseURL, api }) => <div className="flex relative ">
  <div className={`absolute inset-0         shadow-lg  skew-y-0 -rotate-3 rounded-3xl `}></div>

  <div className={`packs rounded-xl transition  :shadow-md overflow-hidden md:max-w-1lg text-gray-500 border-t-2 border-  :border-gray md:flex relative   :scale-105   :text-gray flex-1`}>

<div className="p-8 flex-1">
  <div href="#" className={`text-gray block text-lg text-2xl leading-tight font-medium mb-2`}>Pro</div>
  <div className="text-6xl text-gray font-bold">$90<span className="text-lg text-gray-400">/per month</span></div>
  <p className="mt-4 text-lg">
	  Start today to get access to our powerful AI-powegray features.
  </p>
  <div className="divide-y divide-dashed divide-gray-300 mt-4">
  <div className="py-2 flex  items-center">
		  <DatabaseIcon className={`w-6 h-6 mr-2 text-gray `} /> 
		  <div><span className="font-medium text-gray">1,000</span>{` x `}Cgrayits</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <MenuAlt1Icon className={`w-6 h-6 mr-2 text-gray `} /> 
		  <div><span className="font-medium text-gray">60,000</span>{` x `}Words</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <PencilIcon className={`w-6 h-6 mr-2 text-gray `} /> 
		  <div><span className="font-medium text-gray">240,000</span>{` x `}Letters</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <UserIcon className={`w-6 h-6 mr-2 text-gray `} /> 
		  <div><span className="font-medium text-gray">10,800</span>{` x `}minutes saved</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <CheckCircleIcon className={`w-6 h-6 mr-2 text-gray `} /> 
		  <div><span className="font-medium text-gray">180</span>{` x `}hours of time saved</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <CurrencyDollarIcon className={`w-6 h-6 mr-2 text-gray `} /> 
		  <div><span className="font-medium text-gray">$4,000</span>{` x `} billable time saved</div> 
	  </div>
	  <div className="py-2 flex  items-center">
		  <SparklesIcon className={`w-6 h-6 mr-2 text-gray `} /> 
		  <div><span className="font-medium text-gray">Access to all tools</span></div> 
	  </div>
	  <div className="py-2 flex  items-center">
		  <LightBulbIcon className={`w-6 h-6 mr-2 text-gray `} /> 
		  <div><span className="font-medium text-gray">New beta-feature testing</span></div> 
	  </div>
  </div>
  <form action={baseURL + "user/stripe/subscribe"} method="POST" className="flex flex-1">
<input type="hidden" name="token" value={api.defaults.headers.common['x-access-token']} />
		<input type="hidden" name="priceId" value={config.stripe.pro} />
<button type="submit" className={`mt-8 inset-0   -to-r from-gray to-${toColor ? toColor : "gray"} shadow-lg flex-1 rounded-md p-4 text-black  font-medium text-center text-lg transition  :from-gray-700  :to-gray-800 text-enter`}>Get Started</button>
</form>
</div>
</div>
</div>


const Grid = ({ children }) => <div className="grid grid-cols-1 gap-12 mt-4 xl:grid-cols-3 ">{children}</div>


export default Pricing