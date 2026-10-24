import { useDispatch, useSelector } from 'react-redux';
import { setSearchText } from '../slices/searchSlice';
import { toggleTheme } from '../slices/themeSlice';
import { useLocation } from 'react-router-dom';
import logo from '../images/download.jpeg';

const Header = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const isCharacterDetailPage = location.pathname.startsWith('/character/');

    const isDarkmode = useSelector((state) => state.theme.isDarkmode);
    const text = useSelector((state) => state.search.text);

    if (isCharacterDetailPage) {
        return null;
    }

    return (
        <header className="navbar">
            <div className="navbar-container">
                <img src={logo} alt="Rick and Morty app logo" className="logo" />
                <div className="search-container">
                    <input
                        type="search"
                        className="search-input"
                        placeholder="Search by character name"
                        aria-label="Search characters by name"
                        value={text}
                        onChange={(event) => dispatch(setSearchText(event.target.value))}
                    />
                </div>
                <button
                    type="button"
                    className="toggle-btn"
                    onClick={() => dispatch(toggleTheme())}
                    aria-label={isDarkmode ? 'Switch to light theme' : 'Switch to dark theme'}
                >
                    {isDarkmode ? 'Light' : 'Dark'}
                </button>
            </div>
        </header>
    );
};

export default Header;
