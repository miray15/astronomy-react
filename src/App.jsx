import { useEffect } from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import axios from "axios";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const data = {
        style: "inverted",
        observer: {
          latitude: 33.775867,
          longitude: -84.39733,
          date: "2023-06-27",
        },
        view: {
          type: "constellation",
          parameters: {
            constellation: "ori",
          },
        },
      };

      try {
        const response = await axios.post(
          "https://api.astronomyapi.com/api/v2/studio/star-chart",
          data,
          {
            headers: {
              Authorization: "Basic ",
            },
          }
        );

        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
