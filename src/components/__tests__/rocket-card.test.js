import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux"; // import Provider from react-redux
import RocketCard from "../rockets/RocketCard";
import store from "../../redux/config-store";

describe("RocketCard", () => {
  it("renders without errors", () => {
    const props = {
      id: 1,
      name: "Falcon 1",
      description:
        "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009.",
      flickrImages: [
        "https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg",
      ],
      reserved: false,
    };

    render(
      <Provider store={store}>
        <RocketCard rocketProps={props} />
      </Provider>
    );
  });
});