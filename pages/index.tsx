import Head from "next/head";
import HeaderMenu from "@/components/layout/Header";
import SliderComponent from "@/components/slider/Slider";
import CardComponent from "@/components/card/Card";
import { dummyData } from "../features/dummy/dummyData";
import { footerDummy } from "../features/dummy/FooterDummy";
import { Footer } from "@/components/footer/Index";
import { PoemComponent } from "@/features/poem/PoemIndex";
import { PoemDummy } from "@/features/dummy/poemDummy";
import { IoIosHome } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { BsEnvelope } from "react-icons/bs";

export default function Home() {
  const slides = [
    {
      id: 1,
      image: "/assets/images/Web.jpg",
      title: "",
      description: "",
    },
    {
      id: 2,
      image: "/assets/images/Web.jpg",
      title: "",
      description: "",
    },
    {
      id: 3,
      image: "/assets/images/Web.jpg",
      title: "",
      description: "",
    },
  ];
  return (
    <>
      <HeaderMenu
        items={[
          { name: "Home", icon: IoIosHome },
          { name: "About", icon: FaCircleUser },
          { name: "Contact", icon: BsEnvelope },
        ]}
      />
      <Head>
        <title>BookReviewsBy</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />

        <script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
        />
      </Head>

      <section>
        <div className="w-100 ">
          <SliderComponent slides={slides} />
        </div>

        <div className="mt-[4rem]">
          <h1 className="text-center text-[3rem] ">New Reviews</h1>

          <div className="flex flex-col justify-center items-center mt-[2.5rem] mb-[2.4rem]">
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-[4rem]">
              {dummyData.map((item) => (
                <CardComponent
                  key={item.id}
                  name={item.name}
                  description={item.description}
                />
              ))}
            </div>
          </div>
          <div className="bg-secondary my-[2rem]">
            {PoemDummy.map((item) => (
              <PoemComponent
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="w-100  ">
        {footerDummy.map((item) => (
          <Footer
            description={item.description}
            title={item.title}
            list={item.list}
          />
        ))}
      </div>
    </>
  );
}
