import React from 'react'
import {useEffect,useState} from "react"
import { async } from "@firebase/util";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import HFundRaisedSub from "./HFundRaisedSub";


function HRaisedFund() {

  let articles = [
    {
      author: "2Investor's Business Daily",
      title: "Snackpass",
      description:
        "Before Snackpass, the restaurant owners were worried about the customers not collecting their orders. With Snackpass, they don’t have to fear anything. As soon as a customer places an order, the app automatically deducts money from his wallet. Simple, right?Snackpass is now used in multiple universities across the US and is backed by some of the bigshots of the tech industry.",
      url: "https://www.fundable.com/alertgy",
      urlToImage:
        "https://www.cloudways.com/blog/wp-content/uploads/Snackpass-20200110-133430.jpg",
      publishedAt: "2022-08-13T01:54:00Z",
      content:
        "Dow Jones futures will open on Sunday evening, along with S&amp;P 500 futures and Nasdaq futures. The stock market rally had another strong week, moving up to a major test.\r\nXA market pause wouldn't … [+9329 chars]",
      cost: "250",
    },
    {
      author: null,
      title: "Wheels",
      description:
        "Wheels is a shared electric mobility platform that’s designed to promote smart city projects around the world. Wheels lets you rent wheels (motor pods) for a day, a month, or even a year. They will take care of the maintenance and all other expenses related to it. If the motor pod stops working, you will find a new one parked just for you.",
      url: "https://www.fundable.com/ambient-clinical-analytics",
      urlToImage:
        "https://www.cloudways.com/blog/wp-content/uploads/wheels-20200110-133432.jpg",
      publishedAt: "2022-08-13T00:42:38Z",
      content: null,
      cost: "2150",
    },
    {
      author: null,
      title: "Coded Minds",
      description:
        "Coded Minds is a technology-education startup that aims to revolutionize the paradigm of tech education. Coded Minds focuses on methods. It starts with the problem and inculcates a practical, hands-on project-based curriculum.The startup aims to focus on real-world issues and fix them using technology and innovation.",
      url: "https://www.fundable.com/cleanrobotics",
      urlToImage:
        "https://www.cloudways.com/blog/wp-content/uploads/Coded-Minds-20200110-133427.jpg",
      publishedAt: "2022-08-13T00:23:00Z",
      content:
        "BOSTON —A Delta airplane bound for Los Angeles from Boston's Logan Airport struck the wing of another aircraft while taxiing from the gate Friday evening. \r\nA passenger on board Delta Flight 458 post… [+1554 chars]",
      cost: "25870",
    },

    {
      author: "Scaeva Technologies",
      title: "Social Security Recipients",
      description:
        "Transforming sound into mind bending immersive audio experiences. as well as by providing the better user experience so that each one can be satisfied by our products ",
      url: "https://www.fundable.com/scaeva-technologies",
      urlToImage:
        "https://s3.amazonaws.com/media.fundable.com/profile-sections/318713/files/screen-shot-2022-02-15-at-105232-am-hedkd6hcnc.png",
      publishedAt: "2022-08-12T23:41:32Z",
      content:
        "Social Security beneficiaries are set to see a sizable increase in their 2023 benefit checks thanks to a cost-of-living adjustment (COLA) designed to offset soaring inflation.\r\nAn analysis released t… [+1877 chars]",
      cost: "2780",
    },

    {
      author: null,
      title: "Hastee",
      description:
        "We provide crucial software and technologies that improve product developmentthe new business opportunities have encouraged entrepreneurship on a grand scale.",
      url: "https://www.fundable.com/windpact-1",
      urlToImage:
        "https://www.cloudways.com/blog/wp-content/uploads/Hastee-20200110-133428.jpg",
      publishedAt: "2022-08-12T23:17:17Z",
      content: null,
      cost: "890",
    },

    {
      author: null,
      title: "Native traits",
      description:
        "Native trate is premier developer and marketer of naturally occuring genetic traits for the hybrid seed corn industry.",
      url: "https://www.fundable.com/native-traits",
      urlToImage:
        "https://s3.amazonaws.com/media.fundable.com/profile-sections/316581/files/screen-shot-2022-06-10-at-22114-pm-sowxtat7qt.png",
      publishedAt: "2022-08-12T21:17:18Z",
      content:
        "Carnival Cruise Line today announced protocol updates that meet public health goals but recognize the evolving nature of COVID-19. With these changes, Americas Cruise Line is making it easier for mor… [+3034 chars]",
      cost: "69265",
    },
  ];
  const style = {
    textAlign: "center",
    textDecoration: "underline",
    margin: "2rem",
    fontSize: "3rem",
  };
  const mp3 = {
    border: "2px solid red",
  };
  return (
    <div>
      <h2 style={style}>Funds Raised by the Companies</h2>
      <div className="container my-3" style={mp3}>
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4">
                <HFundRaisedSub
                  title={element.title.slice(0, 40)}
                  description={element.description.slice(0, 150)}
                  imageUrl={element.urlToImage}
                  Urlcontent={element.cost}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


export default HRaisedFund