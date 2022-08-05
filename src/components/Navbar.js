import logo from '../images/logo.svg'

export default function Navbar() {
    return (
        <header>
            <nav>
                <div class="logo-flex">
                    <img src={logo} alt="React logo" className="logo"/>
                    <span className="nav-title-blue">ReactFacts</span>
                </div>
                <span className="nav-title-white">React Course - Project 1</span>
            </nav>
        </header>

    )
}

// export default function Navbar() {
//     return <h1>Navbar test</h1>
// }