// Import the image
import logoImage from './New folder 2/logo.png';
import playlist from './New folder 2/playlist.jpg';
import discover from './New folder 2/discover.jpeg'
import share from './New folder 2/share.jpeg'
import stream from './New folder 2/stream.jpeg'
import download from './New folder 2/download.jpeg'
import React from 'react';
import './App.css';

const AboutPage = () => {
  return (
    <div className="about-page">
     <header>
        <h1>About Our Music App</h1>
        <img src={logoImage} alt="Logo" className="logo-img" />
      </header>

      
      <p>
        Our music app is the perfect way to listen to your favorite tunes.</p>
        <p>With a wide variety of features, you can create your own playlists,</p>
        <p>discover new music, and share your favorite songs with friends.</p>
      <ul>
      <li className='list'><span className='head'>Create Custom Playlists</span><div  className='list-item'> 
          <span className='new'>
          Unlock your personalized musical journey with our 'Create Custom
          Playlists' feature! Tailor your listening experience by curating 
          playlists that resonate with your mood, setting the perfect soundtrack
          for every moment. Whether it's building the ultimate workout mix or 
          crafting a playlist for a cozy night in, our music streaming app empowers
          you to be the DJ of your life.
            </span>
          <img src={playlist} alt='playlist'/>
          </div></li>
          <li className='list'><span className='head'>Discover new music</span><div  className='list-item'> 
          <span className='new'>
          Embark on a musical exploration with our 'Discover New Music' 
          feature! Dive into an extensive library of handpicked tracks 
          and curated playlists, designed to introduce you to fresh sounds 
          and emerging artists. Let our music streaming app be your guide in
          uncovering hidden gems and expanding your musical horizons, 
          making every listening session an exciting journey of discovery
            </span>
          <img src={discover} alt='disover'/>
          </div></li ><li className='list'><span className='head'>Share your favorite songs</span><div  className='list-item'> 
          <span className='new'>
          Spread the joy of music with our 'Share Your Favorite Songs' feature! Amplify 
          your connection with friends and loved ones by effortlessly sharing the tracks 
          that resonate with you the most. Whether it's a nostalgic classic or the latest
          chart-topper, our music streaming app makes it easy to create shared 
          playlists, sparking conversations and creating lasting musical memories together.
            </span>
          <img src={share} alt='share'/>
          </div></li>
          <li className='list'><span className='head'>Stream music on demand</span><div  className='list-item'> 
          <span className='new'>
          Dive into a world of limitless musical possibilities with our 'Stream Music on Demand'
          feature! Experience the freedom to listen to your favorite tunes whenever and wherever 
          inspiration strikes. From chart-topping hits to timeless classics, our music streaming
          app puts the power of on-demand streaming in your hands, ensuring an immersive and 
          tailored musical journey at your fingertips.
            </span>
          <img src={stream} alt='stream'/>
          </div></li>
          <li className='list'><span className='head'>Download music for offline listening</span><div  className='list-item'> 
          <span className='new'>
          Take your music everywhere with our 'Download Music for Offline Listening' feature!
          Enjoy the flexibility of creating your own portable playlist by downloading your 
          favorite tracks. Whether you're on a plane, in a subway, or exploring remote areas, 
          our music streaming app ensures uninterrupted access to 
          your cherished tunes, making every moment a personalized and melodious experience.
            </span>
          <img src={download} alt='download'/>
          </div></li>
      </ul>
      <p>
        We are committed to providing our users with the best possible
        music listening experience. That's why we are constantly adding new
        features and improving our app.
      </p>
      <br></br>
      
       {/* Additional content to cause overflow */}
       <div >
  <br />
  <h3>Co-created by</h3>
  <ul>
    <p>
      Tarun Kumar Dora
    </p>
    <p>
      Tejas Naik J
    </p>
    <p>
      Thejas Hariprasad Shetty
    </p>
  </ul>
</div>

      </div>
  );
};
export default AboutPage;

<div className='header'>
<h2 >Additional Content</h2>
<img src={logoImage} alt="Logo" className="soup" />
</div>