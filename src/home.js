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
            <button>Account</button>
            <button>Help center</button>
            <button>Cart</button>
        </header>
        <div>
            <p>Top selling</p>
            <p>Flash Sales</p>
            <p>Explore Popular Categories</p>
            <p>Recommended for you</p>
        </div>
        <footer>
            <p>About us</p>
            <p>Help Center</p>
            <p>Foodie Careers</p>
            <p>Bulk purcahses</p>
            <p>Social media platforms</p>
            <p>Email</p>
            <p>Downlaod the app</p>
            <p>Payment methods</p>
        </footer>
    </div>;
}

export default Home;