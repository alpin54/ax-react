const Logo = (props) => {
  const { fileName, name } = props;
  return <img src={`asset/image/logo/${fileName}`} alt={name} />;
};

return Logo;
