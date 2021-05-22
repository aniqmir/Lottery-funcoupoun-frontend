import roadmap from "../assets/roadmap.jpg";


export default function Roadmap() {
//background-image: linear-gradient(#07042E, #000059)
  return (
    <div style={{ display: "flex", justifyContent: "center",backgroundImage: "linear-gradient(#070435, #00005d)" }}>
      <img src={roadmap} alt="roadmap" />
    </div>
  );
}
