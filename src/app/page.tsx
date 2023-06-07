import IconCopy from './IconCopy';
import IconArrowRight from './IconArrowRight';
import CharLength from './CharLength';

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
        <CharLength />
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
