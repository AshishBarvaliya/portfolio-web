import { useEffect } from "react";
import "./AnimatedText.scss";

const AnimatedText: React.FC = () => {
  const content = [
    "Frontend Developer",
    "Full Stack Dev Student",
    "Freelancer",
  ];

  let part = 0,
    partIndex = 0;
  let intervalVal: any;

  useEffect(() => {
    let element = document.querySelector("#text") as HTMLElement;
    let cursor = document.querySelector("#cursor") as HTMLElement;

    function Type() {
      let text = content[part].substring(0, partIndex + 1);
      element.innerHTML = text;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      partIndex++;

      if (text === content[part]) {
        cursor.style.display = "none";

        clearInterval(intervalVal);
        setTimeout(function () {
          intervalVal = setInterval(Delete, 20);
        }, 1000);
      }
    }

    function Delete() {
      let text = content[part].substring(0, partIndex - 1);
      element.innerHTML = text;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      partIndex--;

      if (text === "") {
        clearInterval(intervalVal);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if (part === content.length - 1) part = 0;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        else part++;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        partIndex = 0;

        setTimeout(function () {
          cursor.style.display = "inline-block";
          // eslint-disable-next-line react-hooks/exhaustive-deps
          intervalVal = setInterval(Type, 60);
        }, 200);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    intervalVal = setInterval(Type, 60);
  });

  return (
    <div id="container">
      <div id="text"></div>
      <div id="cursor"></div>
    </div>
  );
};

export default AnimatedText;
