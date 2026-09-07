import "./features.scss";

export default function Features({ item }) {


  return (
    <>
      <div className="card-container">
        <img src={`${process.env.PUBLIC_URL}/${item.icon}`} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
      </div>
    </>
  );
}
