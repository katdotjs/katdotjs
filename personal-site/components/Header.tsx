import { FC } from "react";
import ThemeToggle from "./ThemeToggle";
import Nav from "./Nav";

const Header: FC = () => (
<header className="flex justify-between sm:px-20 py-4 w-full">
    <Nav />
    <ThemeToggle />
</header>
);

export default Header;