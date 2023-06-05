import Image from 'next/image';
import iconCopy from '../../public/images/icon-copy.svg';
import arrowRight from '../../public/images/icon-arrow-right.svg';

export default function Home() {
  return (
    <main>
      <h1>Password Generator</h1>
      <div className='result'>
        <input className='password' placeholder='P4$5W0rD!' disabled />
        <div className='copy'>
          <Image src={iconCopy} alt='copy password' />
        </div>
      </div>
      <form>
        <div className='character-length'>
          <label htmlFor='length'>
            <span>Character Length </span>
            <span>10</span>
          </label>
          <input type='range' id='length' min='5' max='30' className='slider' />
        </div>
        <div className='uppercase'>
          <input type='checkbox' id='uppercase' />
          <span className='checkmark'></span>
          <label htmlFor='uppercase'>Include Uppercase Letters</label>
        </div>
        <div className='lowercase'>
          <input type='checkbox' id='lowercase' />
          <span className='checkmark'></span>
          <label htmlFor='lowercase'>Include Lowercase Letters</label>
        </div>
        <div className='numbers'>
          <input type='checkbox' id='numbers' />
          <span className='checkmark'></span>
          <label htmlFor='numbers'>Include Numbers</label>
        </div>
        <div className='symbols'>
          <input type='checkbox' id='symbols' />
          <span className='checkmark'></span>
          <label htmlFor='symbols'>Include Symbols</label>
        </div>
        <div className='strength'>
          <p>Strength</p>
          <p>
            Medium <span></span>
          </p>
        </div>
        <button type='submit'>
          Generate <Image src={arrowRight} alt='arrow right' />
        </button>
      </form>
    </main>
  );
}
