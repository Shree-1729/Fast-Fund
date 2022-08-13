import React from "react";
import CFeatured from "./CFeatured";
import { async } from "@firebase/util";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import {useState, useEffect} from "react"


function CFeaturedMain() {
  const [users, setUsers] = useState([]);

  const useCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      let data = await getDocs(useCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  const style = {
    textAlign: "center",
    textDecoration:"underline",
    margin:"2rem",
    fontSize:"3rem"
  };
const mp3={
    border:"2px solid red"
}
let articles = [
  {
    author: "george haiden",
    title: "Capacity",
    description:
      "Capacity is an AI platform that interlinks everything you need (all the apps of your choice) on a single platform. Never lose a  digital file ever again – is the motto of the Capacity startup. The software uses AI to find out what apps you need at what time, and keep them ready for you. This helps you and your team manage time and gain knowledge about things that matter and focus on achieving the business goals..",
    url: "https://clever-kulfi-1efd22.netlify.app/",
    urlToImage:
      "https://www.cloudways.com/blog/wp-content/uploads/Capacity-20200110-133426.png",
    publishedAt: "2022-08-13T02:34:20Z",
    content:
      "Lyons Magnus, a nutritional drinks company, expanded a voluntary recall of some varieties of popular products including the oat drink Oatly, Optimum Nutrition protein powder and Glucerna shakes, beca… [+724 chars]",
  },
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
  },
  {
    author: null,
    title: "Coded Minds",
    description:
      "Coded Minds is a technology-education startup that aims to revolutionize the paradigm of tech education. Coded Minds focuses on methods. It starts with the problem and inculcates a practical, hands-on project-based curriculum.The startup aims to focus on real-world issues and fix them using technology and innovation.",
    url: "https://clever-kulfi-1efd22.netlify.app/",
    urlToImage:
      "https://www.cloudways.com/blog/wp-content/uploads/Coded-Minds-20200110-133427.jpg",
    publishedAt: "2022-08-13T00:23:00Z",
    content:
      "BOSTON —A Delta airplane bound for Los Angeles from Boston's Logan Airport struck the wing of another aircraft while taxiing from the gate Friday evening. \r\nA passenger on board Delta Flight 458 post… [+1554 chars]",
  },
  {
    author: "Abner Li",
    title: "AnyWay ",
    description:
      "Premium arcade game platform with licenced arcade games and online services  taking on financial risks in the hope of profit.the new business opportunities have encouraged entrepreneurship on a grand scale ",
    url: "https://clever-kulfi-1efd22.netlify.app/",
    urlToImage:
      "https://media.istockphoto.com/photos/retro-video-game-arcade-machine-screen-picture-id1300036875?b=1&k=20&m=1300036875&s=170667a&w=0&h=8mo7J-9e8b0QCDSNgg--WGqLgWVSlwgH7AwJQ4xZWp4=",
    publishedAt: "2022-08-12T23:47:00Z",
    content:
      "Google is reportedly following Apple TV and Amazon Prime Video in letting users subscribe to other streaming services through a YouTube “channel store.”\r\nAccording to the Wall Street Journal, YouTube… [+1639 chars]",
  },
  {
    author: "Scaeva Technologies",
    title: "Social Security Recipients",
    description:
      "Transforming sound into mind bending immersive audio experiences. as well as by providing the better user experience so that each one can be satisfied by our products ",
    url: "https://clever-kulfi-1efd22.netlify.app/",
    urlToImage:
      "https://s3.amazonaws.com/media.fundable.com/profile-sections/318713/files/screen-shot-2022-02-15-at-105232-am-hedkd6hcnc.png",
    publishedAt: "2022-08-12T23:41:32Z",
    content:
      "Social Security beneficiaries are set to see a sizable increase in their 2023 benefit checks thanks to a cost-of-living adjustment (COLA) designed to offset soaring inflation.\r\nAn analysis released t… [+1877 chars]",
  },
  {
    author: "Jason Nelson",
    title: "Orison",
    description:
      "The world's first and only self installable energy storage appliances.the new business opportunities have encouraged entrepreneurship on a grand scale",
    url: "https://clever-kulfi-1efd22.netlify.app/",
    urlToImage:
      "https://media.istockphoto.com/photos/diverse-modern-office-businessman-leads-business-meeting-with-talks-picture-id1363104923?b=1&k=20&m=1363104923&s=170667a&w=0&h=HSEJHzvyR-YAcHGA6ar2JNialxqhgI443WeIJBkUiUU=",
    publishedAt: "2022-08-12T23:26:37Z",
    content:
      "In the week following the sanctioning of the Tornado Cash website by the U.S. Treasury Departments Office of Foreign Assets Control (OFAC), the price of the token underpinning the system is down 56%,… [+2011 chars]",
  },
  {
    author: null,
    title: "Hastee",
    description:
      "We provide crucial software and technologies that improve product developmentthe new business opportunities have encouraged entrepreneurship on a grand scale.",
    url: "https://clever-kulfi-1efd22.netlify.app/",
    urlToImage:
      "https://www.cloudways.com/blog/wp-content/uploads/Hastee-20200110-133428.jpg",
    publishedAt: "2022-08-12T23:17:17Z",
    content: null,
  },
  {
    author: null,
    title: "Kitopi",
    description:
      "Kitopi stands for Kitchen. Operation. Innovation. It is a state-of-the-art kitchen network that prepares and delivers food to other retail outlets. It is a managed cloud kitchen network, where a restaurant can place orders and get it delivered in quick time. It helps restaurants, food brands, eateries to focus on what matters the most, i.e., marketing, budget, and product innovation. ",
    url: "https://clever-kulfi-1efd22.netlify.app/",
    urlToImage:
      "https://www.cloudways.com/blog/wp-content/uploads/Kitopi-20200110-133428.jpg",
    publishedAt: "2022-08-12T21:47:52Z",
    content:
      "To continue, please click the box below to let us know you're not a robot.",
  },
  {
    author: null,
    title: "Native traits",
    description:
      "Native trate is premier developer and marketer of naturally occuring genetic traits for the hybrid seed corn industry.",
    url: "https://clever-kulfi-1efd22.netlify.app/",
    urlToImage:
      "https://s3.amazonaws.com/media.fundable.com/profile-sections/316581/files/screen-shot-2022-06-10-at-22114-pm-sowxtat7qt.png",
    publishedAt: "2022-08-12T21:17:18Z",
    content:
      "Carnival Cruise Line today announced protocol updates that meet public health goals but recognize the evolving nature of COVID-19. With these changes, Americas Cruise Line is making it easier for mor… [+3034 chars]",
  },
  {
    author: "Dave Jamieson",
    title: "Sustain Inc.",
    description:
      "Marking renewable energy easy with our scalable flatform, for all the living beings living on the earth by providing the basic ammunities for them by making available to all the organisms",
    url: "https://clever-kulfi-1efd22.netlify.app/",
    urlToImage:
      "https://s3.amazonaws.com/media.fundable.com/profile-sections/286641/files/1-4z7nrcc57n.png",
    publishedAt: "2022-08-12T20:27:29Z",
    content:
      "It was a little more than two weeks ago that an upstart labor campaign, Trader Joes United, won an election in Massachusetts to form the grocery chains first union. But the independent group of Trade… [+3659 chars]",
  },
  {
    author: "Daniella Genovese",
    title: "Neuvoair",
    description:
      "NuvoAir is your go-to platform for respiratory health tracking, improvement, and cure. The startup offers devices to track and monitor the respiratory health of individuals – young and old alike. This data is automatically transferred to the user’s mobile app allowing him/her and the doctor to take relevant decisions and provide medical care based on accurate data.",
    url: "https://clever-kulfi-1efd22.netlify.app/",
    urlToImage:
      "https://www.cloudways.com/blog/wp-content/uploads/NuvoAir-20200110-133429.jpg",
    publishedAt: "2022-08-12T20:24:25Z",
    content:
      'Amusement park operator Six Flags has become "day care center for teenagers" after offering too many discounts, according to its chief executive officer. \r\nDuring an earnings call with analysts, Seli… [+2933 chars]',
  },
];

  return (
    <div>
      <h2 style={style}>Featured Companies on Fast Funding </h2>
      <div className="container my-3" style={mp3}>
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4">
                <CFeatured 
                  title={element.title.slice(0, 40)}
                  description={element.description.slice(0, 150)}
                  imageUrl={element.urlToImage}
                  Urlcontent={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
      
      
    </div>
  );
}

export default CFeaturedMain;
