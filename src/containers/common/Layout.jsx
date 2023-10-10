import { Outlet } from "react-router-dom";

import Header from "../../components/Header";
import Root from "../../components/Root";
import Template from "../../components/Template";

const Layout = () => {
	return (
		<Root>
			<Header />
			<Template>
				<Outlet />
			</Template>
		</Root>
	);
};

export default Layout;
