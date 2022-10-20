import React from 'react';

function Home() {
    return <div>
        <header>
            <img alt="Foodie Logo"/>
            <input placeholder="Search for anyhting"/>
            <select name="languages" id="lang">
                <option value="javascript">JavaScript</option>
                <option value="php">PHP</option>
                <option value="java">Java</option>
            </select>
            <button>Search</button>
            <button>Favorites</button>
            <button>Notifications</button>
            <button>Cart</button>
        </header>
        <div>

        </div>
        <footer>

        </footer>
    </div>;
}

export default Home;