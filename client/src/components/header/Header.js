import './Header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img
                className="headerImg"
                src="https://images.unsplash.com/photo-1680639224103-133fad8b5763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                alt=""
            />
        </div>
    )
}
