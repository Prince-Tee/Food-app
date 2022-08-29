import React from 'react'
import "../css/Dashboard.css";
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import img1 from '../assets/burger1.png'
import img2 from '../assets/pasta1.png'
import img3 from '../assets/meat1.png' 
import img4 from '../assets/indomie.png' 
import img5 from '../assets/bread.png'
import img6 from '../assets/soup.png'
import img7 from '../assets/profile.png' 
import { BiHome } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineGift } from 'react-icons/ai'
import { HiOutlineShoppingCart } from 'react-icons/hi'


const Dashboard = () => {
  let user = 'Sarah Smith' 

  const meals = [
    {
        id: 1,
        image: img1,
        title: 'Stir fry Pasta',
        description: 'Stir fry Pasta yada yada yada because of the season',
        price: 1000,
        action: 'Add to cart',
    },
    {
        id: 2,
        image: img2,
        title: 'Meat Balls',
        description: 'Meat Balls yada yada yada because of the season',
        price: 1000,
        action: 'Add to cart',
    },
    {
        id: 3,
        image: img3,
        title: 'Burger Meal',
        description: 'Burger Meal yada yada yada because of the season',
        price: 1000,
        action: 'Add to cart',
    },
    {
        id: 4,
        image: img4,
        title: 'Fried Indomie',
        description: 'Burger Meal yada yada yada because of the season',
        price: 1000,
        action: 'Add to cart',
    },
    {
        id: 5,
        image: img5,
        title: 'Baked Bread',
        description: 'Burger Meal yada yada yada because of the season',
        price: 1000,
        action: 'Add to cart',
    },
    {
        id: 6,
        image: img6,
        title: 'Soup Meal',
        description: 'Burger Meal yada yada yada because of the season',
        price: 1000,
        action: 'Add to cart',
    },
 ]

  return (
    <div className='dashboard-container'>
      <div className="left">
        <div className='logo'>
            <Link to='/'> <img src={logo} alt=""/> <h2>Lilies</h2></Link>
        </div>
        <ul>
          <li><Link to="/dashboard"><BiHome className='icon'/>Dashboard</Link></li>
          <li><Link to="/dashboard"><CgProfile className='icon'/>Your Profile</Link></li>
          <li><Link to="/orders"><AiOutlineGift className='icon'/>Orders <div className='x' style={{background: '#06E775'}}>5</div></Link></li>
          <li><Link to="/cart"><HiOutlineShoppingCart className='icon'/>Your Cart <div className='x' style={{background: '#F3C294'}}>3</div></Link></li>
        </ul>
      </div>
      <div className="right">
        <div className="profile-head">
          <div className="user-name">s
            <h3>Good Morning, {user}!</h3>
            <p>What delicious meal are you craving today?</p>
          </div>
          <img src={img7} alt="" /> 
        </div>

        <div className='meals-box'>
            {meals.map((meal)=> {
                return (
                    <div key={meal.id} className="meals">
                        <img src={meal.image} alt="" />
                        <h5>{meal.title}</h5>
                        <p>{meal.description}</p>
                        <div className="price-action">
                          <strong>₦{meal.price}</strong>
                          <button>{meal.action}</button>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Dashboard