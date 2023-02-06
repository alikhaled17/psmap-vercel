import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Container from "./about.style";
import useTranslation from "@/app/hooks/useTranslation";

const AboutComponent = () => {
  const [Thing, setThing] = useState<any>("second");
  const [Slides, setSlides] = useState<string[]>([
    "https://www.youtube.com/embed/iX07qA8O-rQ",
    "https://www.youtube.com/embed/dnQMocv09vU",
    "https://www.youtube.com/embed/BzGixmZOooU",
    "https://www.youtube.com/embed/mJfsptaWET8",
    "https://www.youtube.com/embed/8uN8WMvDy24",
  ]);
  useEffect(() => {
    console.log(Thing);
  }, [Thing]);

  const handleIFrame = () => {};
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function editOnItemOnce(index: number) {
    // let newArr = Slides.splice(index, 1);
    // let x = Slides[index];
    // newArr[index] = <h1>asas</h1>;
    // console.log(newArr);

    setSlides([...Slides]);
  }
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <section id="about" className="about">
        <h3
          className="about_title"
          dangerouslySetInnerHTML={{ __html: t("about_title") }}
        ></h3>
        <p className="video_title">{t("about_desc")} </p>

        <div className="slider-container">
          <Slider
            {...settings}
            beforeChange={(oldIndex: number, newIndex: number) => {
              let video = Slides[oldIndex];
              setSlides((oldState) =>
                oldState.map((s, i) => {
                  if (i === oldIndex) {
                    return "";
                  }
                  return s;
                })
              );
              setTimeout(() => {
                setSlides((oldState) =>
                  oldState.map((s, i) => {
                    if (i === oldIndex) {
                      return video;
                    }
                    return s;
                  })
                );
              }, 100);
            }}
          >
            {Slides.map((m, i) => (
              <div className="carousel-item " key={i}>
                <iframe
                  className="video"
                  src={m}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </Container>
  );
};

export default AboutComponent;
