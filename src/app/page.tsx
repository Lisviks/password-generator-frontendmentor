import IconCopy from './IconCopy';
import Form from './Form';

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
      <Form />
    </main>
  );
}
