import IconCopy from './IconCopy';
import IconArrowRight from './IconArrowRight';

export default function Home() {
  return (
    <main>
      <h1>Password Generator</h1>
      <div className='result'>
        <input className='password' placeholder='P4$5W0rD!' disabled />
        <div className='copy'>
          <IconCopy />
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
          <label htmlFor='uppercase'>
            <input type='checkbox' id='uppercase' />
            <span className='checkmark'></span>Include Uppercase Letters
          </label>
        </div>
        <div className='lowercase'>
          <label htmlFor='lowercase'>
            <input type='checkbox' id='lowercase' />
            <span className='checkmark'></span>Include Lowercase Letters
          </label>
        </div>
        <div className='numbers'>
          <label htmlFor='numbers'>
            <input type='checkbox' id='numbers' />
            <span className='checkmark'></span>Include Numbers
          </label>
        </div>
        <div className='symbols'>
          <label htmlFor='symbols'>
            <input type='checkbox' id='symbols' />
            <span className='checkmark'></span>Include Symbols
          </label>
        </div>
        <div className='strength'>
          <p>Strength</p>
          <div className='medium'>
            Medium
            <p>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </p>
          </div>
        </div>
        <button type='submit'>
          Generate <IconArrowRight />
        </button>
      </form>
    </main>
  );
}
