import PersonalInfoCard from "presentation/component/molecule/PersonalInfoCard";
import Button from "presentation/component/atom/Button";

import style from "./style.module.scss";

// --- state
import useCart from "core/state/cart";

const SectionPersonalInfo = (props) => {
  
  const { title, data, error } = props;

  const { handleIncrement, handleDecrement } = useCart();

  return (
    <div className={style.section}>
      <div className="container">
        <h2 className={style.title}>{title}</h2>
        <Button variant="secondary" onClick={handleDecrement}>-</Button>
        <Button variant="secondary" onClick={handleIncrement}>+</Button>
        {data !== null ? (
          <div className={style.list}>
            {data.map((val, idx) => (
              <div className={style.item} key={`pic${idx}`}>
                <PersonalInfoCard name={val.name} email={val.email} website={val.website} company={val.company.name} />
              </div>
            ))}
          </div>
        ) : null}
        {error !== null ? <p className={style.error}>{error}</p> : null}
      </div>
    </div>
  );
};

export default SectionPersonalInfo;