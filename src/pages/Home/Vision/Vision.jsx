import { useEffect } from 'react';

const Vision = () => {
  useEffect(() => {
    const animateWords = () => {
      const words = document.querySelectorAll('.glow');
      let currentIndex = 0;
      const highlightWord = () => {
        words.forEach(w => w.classList.remove('text-green-300', 'text-3xl'));
        words[currentIndex].classList.add('text-green-300', 'text-3xl');
        currentIndex = (currentIndex + 1) % words.length;
      };
      highlightWord();
      const intervalId = setInterval(highlightWord, 3000); 
      return () => clearInterval(intervalId);
    };
    animateWords();
  }, []); 

  return (
    <div className="min-h-screen bg-linear-to-b from-[#050C15] to-[#001938] relative pt-20 overflow-hidden text-primary">
      <div className="max-w-screen-2xl mx-auto">
        <p className="text-9xl font-bold text-green-100 -z-10 absolute">
          Purpose of
        </p>
        <p className="pt-20 text-6xl font-bold z-20 hover-stroke">EduCore</p>
        <div className="grid grid-cols-2 gap-20 mt-20">
          <p className="text-3xl">
            EduCore is a comprehensive platform that can <span className='glow'>transform the way educational institutions operate.</span> 
            It is the most <span className="glow">efficient and all-in-one</span> software for <span className='glow'>student management, exams, results, and accounting</span>, offering <span className="glow">unmatched convenience and accuracy</span>. 
            With EduCore, schools and colleges can <span className="glow">streamline administrative tasks</span>, manage data seamlessly, and <span className="glow">enhance overall institutional performance</span>.
          </p>
          <p className="text-3xl">
            Our platform empowers administrators and educators with <span className="glow">intuitive dashboards and powerful tools,</span> 
            enabling them to <span className="glow">easily track students, generate reports, and handle finances</span> while <span className="glow">reducing human error</span>. 
            Experience the transformative power of EduCore and <span className="glow">unlock the full potential of your institution</span>.
          </p>
        </div>

        {/* main container */}
        <div className='flex justify-between mt-20'>
          <div>
            <p className='text-5xl font-extrabold hover-stroke'>500+</p>
            <p className='text-green-200'>Schools & Colleges Managed</p>
          </div>
          <div>
            <p className='text-5xl font-extrabold hover-stroke'>50k+</p>
            <p className='text-green-200'>Active Students</p>
          </div>
          <div>
            <p className='text-5xl font-extrabold hover-stroke'>1M+</p>
            <p className='text-green-200'>Exams Processed</p>
          </div>
          <div>
            <p className='text-5xl font-extrabold hover-stroke'>10M+</p>
            <p className='text-green-200'>Hours Saved in Administration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
