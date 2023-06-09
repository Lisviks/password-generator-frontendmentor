import IconCopy from './IconCopy';
import IconArrowRight from './IconArrowRight';
import CharLength from './CharLength';
import PasswordOption from './PasswordOption';

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
        <PasswordOption text='Include Uppercase Letters' />
        <PasswordOption text='Include Lowercase Letters' />
        <PasswordOption text='Include Numbers' />
        <PasswordOption text='Include Symbols' />
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
