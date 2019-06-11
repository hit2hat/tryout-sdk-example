import React from "react";
import ReactDOM from "react-dom";
import connect from "@vkontakte/vkui-connect";
import "@vkontakte/vkui/dist/vkui.css";

import App from "./App";

// Init VK App
connect.send("VKWebAppInit", {});

ReactDOM.render(<App />, document.getElementById("root"));
