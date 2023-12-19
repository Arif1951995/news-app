import { useState } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";
import staticData from "../staticData";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
import moment from "moment";
import LangToggle from "./LangToggle";
import Topics from "./Topics";

function Cards() {
  const [lang, setLang] = useState("en");
  const [topic, setTopic] = useState("apple");

  const { isLoading, error, data } = useQuery({
    queryKey: ["articles", lang, topic],
    enabled: true,
    queryFn: () =>
      axios
        .get(
          `${
            staticData.NEWS_API_BASE_URL
          }&q=${topic}&language=${lang}&from=${moment()
            .subtract("7", "days")
            .format("YYYY-MM-DD")}`
        )
        .then((res) => {
          console.log({ res });
          return res.data.articles;
        }),
  });


if(error) return <div className="text-center text-red-600">{error?.message || "Something went wrong kindly refresh the page"}</div>
  return (
    <div className="flex flex-col">
      <LangToggle lang={lang} setLang={setLang} />
      <h1 className="text-center mb-10 font-extrabold text-2xl">News APP</h1>
      <Topics topic={topic} setTopic={setTopic} />
      <div className="flex flex-wrap justify-center">
        {isLoading ? (
          <Spinner />
        ) : (
          data?.length &&
          data.map((el: any, index: number) => {
            console.log({ index, el });
            return (
              <NewsCard
                key={index}
                imageUrl={el.urlToImage}
                title={el.title}
                description={el.description}
                publishedAt={el.publishedAt}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Cards;
