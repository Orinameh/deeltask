import { Result } from "../App";

const ListItem = ({ name, description, image_url, searchTerm }: Result) => {
  const regex = new RegExp(searchTerm, "gi");
  const desc = description.replace(regex, `<mark>$&</mark>`);
  return (
    <div className="item">
      <div className="left">
        <img
          src={image_url}
          alt={description}
          loading="lazy"
          className="thumbnail"
        />
      </div>
      <div className="center">
        <h4>{name}</h4>
        <p>
          <span dangerouslySetInnerHTML={{ __html: desc }} />
        </p>
      </div>
      <div className="right">
        <p>&#8250;</p>
      </div>
    </div>
  );
};

export default ListItem;
