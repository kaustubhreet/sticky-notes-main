const Header = ({ handleToggleDarkMode }) => {
    return (
        < >
            <button
                onClick={() =>
                    handleToggleDarkMode(
                        (previousDarkMode) => !previousDarkMode
                    )
                }
                className='save'
            >
                Toggle Mode
            </button>
        </>
    );
};

export default Header;