import { Link } from "react-router-dom";
import style from "./style.module.scss";

const ButtonText = (props) => {
	const { className, to, children } = props;

	return (
		<Link {...props} className={className + " " + style.buttonText}>
			{children}
		</Link>
	);
};

export default ButtonText;