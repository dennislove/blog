import { MyCV } from './components/MyCV';
import { MBTI } from './components/MBTI';
import { Header } from './components/Header';
import { Information } from './components/Information';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className=" lg:px-20 md:px-10">
        <Information />
        <Projects />
        <MyCV />
        <MBTI />
      </div>
      <Footer />
    </>
  );
}

export default App;
