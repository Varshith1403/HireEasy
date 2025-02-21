import React from 'react';
import { Search, User} from 'lucide-react'; // Importing icons
import { Star } from 'lucide-react';
import './Home.css';

export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <b>Hire Ease</b>
        <div className="contents">
          <a className="con">Home</a>
          <a className="con">Services</a>
          <a className="con">About Us</a>
          <a className="con">Contact</a>
        </div>
        <div className="header-right">
          <div className="search">
            <Search size={22} />
          </div>
          <div className="login">
            <User size={22} />
          </div>
        </div>
      </div>
      <div class="Main">
        <div class="home">
            <div class="content">
            <h3>Find and hire skilled professionals</h3>
            <p>
                "Find and connect with skilled professionals from every industry—whether you're looking for a local artisan, a handyman, or a top-tier software engineer. Our platform bridges the gap between talent and opportunity, ensuring you get the best services effortlessly. Discover, hire, and collaborate with experts who bring your ideas to life!"
            </p>
            </div>
            <img class="logo" src="your-image-url.jpg" alt="Hire Ease"/>
        </div>
        <div className="photographer-section">
          <h2 className="section-heading">Photographers</h2>
          <div className="photographer-cards">
            {/* Profile Card 1 */}
            <div className="profile-card">
              <img src="profile1.jpg" alt="Profile 1" className="profile-photo" />
              <h3 className="profile-name">John Doe</h3>
              <p className="profile-contact">john.doe@example.com | +123 456 7890</p>
              <div className="profile-rating">
                <Star size={18} fill="#FFD700" />
                <Star size={18} fill="#FFD700" />
                <Star size={18} fill="#FFD700" />
                <Star size={18} fill="#FFD700" />
                <Star size={18} fill="#FFD700" />
              </div>
              <p className="profile-description">
                Specializing in portrait and wedding photography, John captures the essence of every moment with creativity and precision.
              </p>
            </div>

            {/* Profile Card 2 */}
            <div className="profile-card">
              <img src="profile2.jpg" alt="Profile 2" className="profile-photo" />
              <h3 className="profile-name">Jane Smith</h3>
              <p className="profile-contact">jane.smith@example.com | +987 654 3210</p>
              <div className="profile-rating">
                <Star size={18} fill="#FFD700" />
                <Star size={18} fill="#FFD700" />
                <Star size={18} fill="#FFD700" />
                <Star size={18} fill="#FFD700" />
                <Star size={18} />
              </div>
              <p className="profile-description">
                A landscape photographer with a passion for nature, Jane's work showcases the beauty of the world in stunning detail.
              </p>
            </div>

            {/* Profile Card 3 */}
            <div className="profile-card">
              <img src="profile3.jpg" alt="Profile 3" className="profile-photo" />
              <h3 className="profile-name">Alex Johnson</h3>
              <p className="profile-contact">alex.johnson@example.com | +456 789 1230</p>
              <div className="profile-rating">
                <Star size={18} fill="#FFD700" />
                <Star size={18} fill="#FFD700" />
                <Star size={18} fill="#FFD700" />
                <Star size={18} />
                <Star size={18} />
              </div>
              <p className="profile-description">
                Alex is a fashion photographer known for their unique style and ability to bring out the best in every subject.
              </p>
            </div>

            {/* Profile Card 4 */}
            <div className="profile-card">
              <img src="profile4.jpg" alt="Profile 4" className="profile-photo" />
              <h3 className="profile-name">Emily Brown</h3>
              <p className="profile-contact">emily.brown@example.com | +321 654 9870</p>
              <div className="profile-rating">
                <Star size={18} fill="#FFD700" />
                <Star size={18} fill="#FFD700" />
                <Star size={18} fill="#FFD700" />
                <Star size={18} fill="#FFD700" />
                <Star size={18} fill="#FFD700" />
              </div>
              <p className="profile-description">
                Emily specializes in event photography, capturing the energy and emotion of every occasion.
              </p>
            </div>
          </div>
          <button className="view-more-button">View More</button>
        </div>
      </div>
    </div>
  );
}



