import NewsCard from "./NewsCard";

function Article() {
  const data = JSON.parse(localStorage.getItem("article") || "");
  console.log({ data });

  return (
    <div className="flex justify-center flex-col items-center">
        <h1 className="text-lg font-bold mb-8">Article</h1>
      <NewsCard {...data} />
    </div>
  );
}

export default Article;
