import './App.css';
import profilePhoto from './aljenpic.jpg';

function App() {
  return (
    <div class="app">
      <img class="profile" src={profilePhoto} alt='Your Profile'></img>
      <h1>Aljen Estenzo</h1>
      <p>#06 from Inchland Academy.</p>
    </div>
  );
}

export default App;
