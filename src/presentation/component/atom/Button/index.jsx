import { Link } from "react-router-dom";
import style from "./style.module.scss";

const Button = (props) => {
	const { variant = 'primary', ghost, children, type } = props;

	let variantStyle = style.btn;
	if (variant === "primary") {
		variantStyle += " " + style.btnPrimary;
	} else if (variant === "secondary") {
		variantStyle += " " + style.btnSecondary;
	} else if (variant === "tertiary") {
		variantStyle += " " + style.btnTertiary;
	}

	if (ghost) {
		variantStyle += " " + style.btnGhost;
	}

	if (type) {
		return (
			<Link {...props} className={variantStyle}>
				{children}
			</Link>
		);
	}

	return (
		<button {...props} className={variantStyle}>
			{children}
		</button>
	);
};

export default Button;