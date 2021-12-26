import ReactFullpage from '@fullpage/react-fullpage';
import img from './start.jpg';
import { useState } from "react";


const Wrapper = ({ className, children }) => {
  return <div className={`relative section px-10 h-full overflow-y-hidden ${className}`}>
    {children}
  </div>;
};


function App() {
  const [iLoveYou, setILoveYou] = useState(false);
  const iloveyoutext = '-ml-5 sm:ml-44';

  return (
    <div className='text-lg w-screen overflow-y-hidden'>
      {iLoveYou &&
        <p className='fixed top-1/2 left-0 ml-5 text-black z-10 -mt-10 sm:mt-0 -translate-y-2/4'>I love you, because
          you</p>}
      <ReactFullpage
        // debug
        navigation
        afterLoad={(origin, destination, direction) => {
          if (direction === "up") {
            setILoveYou(destination.index > 1 && destination.index < 7);
          }
        }}
        onLeave={(origin, destination, direction) => {
          if (direction === "down") {
            setILoveYou(destination.index > 1  && destination.index < 7);
          }
        }}
        scrollingSpeed={1000}
        render={() => {
          return (
            <>
              <div className='overflow-y-hidden'>
                <Wrapper>
                  <div className='relative z-10 text-white -mt-20 p-5'>
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0 rounded-md'/>
                    <p className='relative z-10 w-full text-center '>
                      What is better than a letter? Exactly a website 😉
                    </p>
                    <p className='relative z-10 w-full text-center'>
                      Why you ask? Well if you ever feel down and you are not home you can
                      just come to here and read it. You can't do that with a letter 🔥
                      Also I just wanted to give this a little personal touch😉
                    </p>
                    <br/>
                    <p className='relative z-10 w-full text-center text-2xl'>
                      Here are all the reasons why I love you❤️
                    </p>
                  </div>
                  <img src={img}
                       className='absolute top-0 left-0 h-full overflow-y-hidden max-w-[100vw] w-full object-cover blur'/>
                </Wrapper>
                <Wrapper>
                  <div className='-ml-5 mt-[-3.2rem] sm:m-0 sm:flex sm:flex-row'>
                    {!iLoveYou && <p className={!iLoveYou ? 'sm:-ml-5' : ''}>I love you, because you</p>}
                    <p className={iLoveYou ? 'mt-5 sm:m-0 sm:ml-44' : 'sm:ml-2'}> are super smart🤓</p>
                  </div>
                </Wrapper>
                <Wrapper>
                  <p className={iloveyoutext}>are super beautiful😍</p>
                </Wrapper>
                <Wrapper>
                  <p className={iloveyoutext}>are funny🤣</p>
                </Wrapper>
                <Wrapper>
                  <p className={iloveyoutext}>motivate me to be a better person🧚🏽‍♀️</p>
                </Wrapper>
                <Wrapper>
                  <p className={iloveyoutext}>have the best natural smile😌</p>
                </Wrapper>
                <Wrapper>
                  <div className='-ml-5 mt-[-3.2rem] sm:m-0 sm:flex sm:flex-row'>
                    {!iLoveYou && <p className={!iLoveYou ? 'sm:-ml-5' : ''}>I love you, because you</p>}
                    <p className={iLoveYou ? 'mt-5 sm:m-0 sm:ml-44' : 'sm:ml-2'}> are a little bit crazy😅</p>
                  </div>
                </Wrapper>
                <Wrapper>
                  As you know I am not the best with expressing my feelings. That is why I wanted to show it through this
                  how I feel.
                  I love you. I am always going to be there for you.
                </Wrapper>
              </div>
            </>
          );
        }}
      />
    </div>
  );
}

export default App;
