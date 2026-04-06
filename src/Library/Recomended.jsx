const Recomended = ()=> {
  const items = [
    {
      img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      text: "Creative Design",
    },
    {
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      text: "Web Development",
    },
    {
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      text: "Marketing",
    },
  ];

  return (
    <div className="overflow-hidden mt-10">
      <div className="flex w-max animate-scroll gap-10">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <img
              src={item.img}
              className="w-14 h-14 rounded-full object-cover"
            />
            <p className="text-base font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Recomended