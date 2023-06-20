import React, { Component } from 'react'
import { CheckIcon,  } from '@heroicons/react/outline'
import { observer, inject } from 'mobx-react'
import "../Login/OPst.css"


@inject("store")
@observer
class EntryPrompt extends Component {
	render() {

		const { currentPrompt, disabled, index } = this.props 
		let hidden = currentPrompt === index ? false : true

		return (
			<div className={`align-bottom backblur md:rounded-md text-left overflow-hidden  transition-all sm:align-middle transition :shadow-md shadow-2xl focus:shadow-2xl md:mb-8  ${hidden ? "hidden" : ""}`}>

				<div className="px-6 py-6">

					<div className="flex items-center">

						 
						<div className="mt-0 ml-4 text-left">
							<div as="h3" className="text-lg leading-6 font-medium text-black">

								{this.props.prompt.title || "Entry Text"}

							</div>

							<p className="text-sm text-gray-400">

								{this.props.prompt.desc || "Write a small bit of text"}

							</p>

						</div>

					</div>
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default EntryPrompt;