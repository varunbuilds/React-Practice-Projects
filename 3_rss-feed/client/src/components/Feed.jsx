function Feed({ index, title, date, link }) {
  let formattedDate = new Date(date);
  let options = { year: "numeric", month: "long", day: "numeric" };
  date = formattedDate.toLocaleDateString(undefined, options);

  return (
    <>
      <div
        key={index}
        className="w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-lg mb-4"
      >
        <h2 className="font-bold text-lg">{title}</h2>
        <p>{date}</p>
        <a
          className="text-red-600 hover:underline"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>
    </>
  );
}

export default Feed;
