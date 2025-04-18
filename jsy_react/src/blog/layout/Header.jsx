function Header() {
    return (
        <header
            className="flex-wrap align-items-center justify-content-center py-3 mb-4 border-bottom">


            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href={'/'} className="nav-link px-2 link-secondary">Home</a></li>
                <li><a href={'/write'} className="nav-link px-2">Write</a></li>
                <li><a href={'#'} className="nav-link px-2">QnA</a></li>
            </ul>

        </header>
    );
}

export default Header