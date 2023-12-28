import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

function Home() {
  return (
    <div>
      <Main />
      <section className="py-[680px] ml-10">
        <Row rowId='1' title="Upcoming" fetchURL={requests.requestUpcoming} />
        <Row rowId='2' title="Popular" fetchURL={requests.requestPopular} />
        <Row rowId='3' title="Trending" fetchURL={requests.requestTrending} />
        <Row rowId='4' title="Top Rated" fetchURL={requests.requestTopRated} />
        <Row rowId='5' title="Horror" fetchURL={requests.requestHorror} />
        <Row rowId='6' title="Romance" fetchURL={requests.requestRomance} />

      </section>
    </div>
  );
}

export default Home;
