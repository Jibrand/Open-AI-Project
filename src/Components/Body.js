import "../Login/OPst.css"
export function Body(props) {
	return(
		<div className={` container background_padding mx-auto   ${props.className || "md:px-28 md:py-8 lg:py-12 "}`}>{props.children}</div>
	)
}

export function Grid(props) {
	return(
		<div className=" ">{props.children}</div>
	)
}

export function Col({span, children, className}) {
	return(
		<div className={`col-span-${span || "6"} ${className}`}>{children}</div>
	)
}

export default Body