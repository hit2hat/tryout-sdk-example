import React, { useState } from "react";
import TryOutSDK from "tryout-sdk/dist/sdk";
import VKConnect from "@vkontakte/vkui-connect";
import { ConfigProvider, View, Panel, PanelHeader, Div, Button } from "@vkontakte/vkui";

// Initial TryOut SDK
TryOutSDK.init({
	product_id: "sandbox",
	catcherEnabled: true
});

const App = () => {
	const [ scheme, setScheme ] = useState("client_dark");
	VKConnect.subscribe(({ detail: { type, data } }) => type === "VKWebAppUpdateConfig" ? setScheme(data.scheme) : null);
	return (
		<ConfigProvider isWebView scheme={scheme}>
			<View activePanel="home" popout={TryOutSDK.renderReportForm()}>
				<Panel id="home">
					<PanelHeader>TryOut SDK [Example]</PanelHeader>
					<Div style={{ display: "grid", justifyContent: "center", gridTemplateColumns: "1fr 1fr", gridColumnGap: "20px" }}>
						<Button onClick={() => TryOutSDK.showReportForm()}>
							Показать форму
						</Button>
						<Button onClick={() => console.error({
							type: "error",
							data: "fuck your account <3"
						})}>
							Сгенерировать ошибку
						</Button>
					</Div>
				</Panel>
			</View>
		</ConfigProvider>
	);
};

export default App;