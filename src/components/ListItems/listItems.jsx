export const ListItems = ({ item: { image, name, price } }) => {
  return (
    <>
      <div>
        <img src={image}></img>
        <p>{name}</p>
        <p>Preço: {price}</p>
      </div>
    </>
  );
};
