import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import Container from "./participate.style";
import img1 from "@/app/assets/images/about/first_sec.png";
import img2 from "@/app/assets/images/about/sec_section.png";
import img3 from "@/app/assets/images/about/third_sec.png";
import img4 from "@/app/assets/images/about/fourth_sec.png";
import img5 from "@/app/assets/images/about/last_sec.png";
import useTranslation from "@/app/hooks/useTranslation";

const ParticipateComponent = () => {
  const { t, locale, setLocale } = useTranslation();

  const [Slides, setSlides] = useState([
    {
      title:
        "عندما يتأخر صديق عن موعده تتسارع إلى عقولنا أسباب مختلفة في التعقيد والبساطة. ويش اللي حصله ليس عادته، هل تعرض لحادث؟ أو راحت عليه نومه, لكن ايهما هو الصحيح؟ دخلت إلى البيت ووجدت المياه مقطوعه، أيضاً هنا تتسارع إلى عقولنا الاحتمالات أو الأسباب المختلفة، هل سددت الفاتورة؟ أو يوجد الآن صيانة لخط المياه. أيهما الصحيح؟",
      src: img1,
      btnLink:
        "https://ps-map.mn.co/posts/%D8%B4%D9%81%D8%B1%D8%A9-%D8%A3%D9%88%D9%83%D8%A7%D9%85?utm_source=manual",
    },
    {
      title:
        "ذكرت في مقالة تحليل السبب الجذري للمشكلة أم تحليل السمكة للمشكلة أن RCA عملية تحقيق تبدأ بالكشف عن السبب المحسوس (الفيزيائي) ثم معرفة الخطأ البشري لنفهم أخيراً السبب التنظيمي الذي أخفق في منع وقوع الخطأ البشري.",
      src: img2,
      btnLink:
        "https://ps-map.mn.co/posts/%D8%A7%D9%84%D8%A8%D8%B1%D9%87%D8%A7%D9%86-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%86%D8%AA%D8%A7%D8%AC%D9%8A-%D9%88%D8%A7%D9%84%D8%A8%D8%B1%D9%87%D8%A7%D9%86-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%82%D8%B1%D8%A7%D8%A6%D9%8A-%D9%81%D9%8A-rca?utm_source=manual",
    },
    {
      title:
        "لتحسين والبحث عن الحلول لمواجهة التحديات سمة بشرية بل لا يجانبني الصواب إن قلت أنها غريزة منحها الله لجميع المخلوقات والتي تواجه صعوبات الحياة بأشكال مختلفة من التكيف ، ولما كان الإنسان سيد هذه العوالم بما منحه الله من القدرة العقلية والخِلْقة كان في سعيٍ دؤوب للتغلب على العوائق والبحث عن الوفرة سواء في الطعام أو المال أو الوقت أو حتى الرفاهية.",
      src: img3,
      btnLink: "https://ps-map.mn.co/posts/16320286?utm_source=manual",
    },
    {
      title:
        "في اللقاء السابق وهو اللقاء الثاني لمجموعة حل المشاكل عند الحديث عن RCA ذكر زميلي عمار الخالدي بأن Fishbone ليست أداة ناجحة في الكشف عن الأسباب الجذرية للمشاكل مثل RCA (logic tree). لماذا؟ ولتوضيح أكثر إليك مختصر توضيحي لكلا الأداتين يبين هذا الترجيح.",
      src: img4,
      btnLink:
        "https://ps-map.mn.co/posts/fishbone-vs-rca-%D8%AA%D8%AD%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D8%B3%D8%A8%D8%A8-%D8%A7%D9%84%D8%AC%D8%B0%D8%B1%D9%8A-%D9%84%D9%84%D9%85%D8%B4%D9%83%D9%84%D8%A9-%D8%A3%D9%85-%D8%AA%D8%AD%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D8%B3%D9%85%D9%83%D8%A9-%D9%84%D9%84%D9%85%D8%B4%D9%83%D9%84%D8%A9?utm_source=manual",
    },
    {
      title:
        " بالنظر للجدول في الأسفل، والذي يقيس ساعات التشغيل وعدد الأعطال خلال شهرين لنظامين مختلفين. ولنحاول حساب 'متوسط الوقت بين الأعطال' (MTBF )",
      src: img5,
      btnLink: "https://ps-map.mn.co/posts/14468497?utm_source=manual",
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <section className="participate">
        <h3
          className="landing__title"
          dangerouslySetInnerHTML={{ __html: t("participate_title") }}
        ></h3>
        <div className="participate-slider">
          <div className="slider-container">
            <Slider {...settings}>
              {Slides.map((m, i) => (
                <div className="carousel-item">
                  <Image
                    src={m.src}
                    alt="Picture of the author"
                    width={400}
                    height={400}
                    className="img-fluid"
                  />
                  <p>{m.title}</p>
                  <a
                    type="button"
                    className="btn "
                    href={m.btnLink}
                    target="_blank"
                    style={{ backgroundColor: "#ff2800", color: "#fff" }}
                  >
                    {t("global_read_more_btn")}
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ParticipateComponent;
