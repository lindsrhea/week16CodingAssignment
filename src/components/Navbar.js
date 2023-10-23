import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
    return <nav className="nav">
             <Link to="/" className="site-title">Home Page</Link>
             <ul>
                <CustomLink to="/quiz">Quiz</CustomLink>
                <CustomLink to="/review">Review</CustomLink>
                <CustomLink to="/about">About</CustomLink>
             </ul>
    </nav>
}



function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    // want to make sure entire url is the same:
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}
