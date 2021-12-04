import Header from "components/Header";
import SubHeader from "components/SubHeader";
import Video from "components/Video";
import { IVideo } from "models/video";
import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const router = useRouter();
  const luke = Number(router.query.luke);

  const { data, error } = useSWR("/api/state", fetcher);

  const allSlots = new Array(24).fill(null);
  data?.videos.forEach((video: IVideo, i: number) => {
    allSlots[i] = video;
  });

  return (
    <>
      <Head>
        <title>Juleølkalender</title>
        <meta name="Juleølkalender" content="Abakus' juleølkalender 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="grid-1">
        <div className="title">
          <Header />
          <SubHeader />
        </div>
        {allSlots.map((elem: IVideo | null, i: number) => (
          <div className={`day-${i + 1}`} key={i}>
            <label>
              <input type="checkbox"></input>
              <div className="door">
                <div className="front">{i + 1}</div>
                <div className={elem ? "back" : "back back2"}>
                  <Video video={elem} initiallyOpen={luke == i + 1} />
                </div>
              </div>
            </label>
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
